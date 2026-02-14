import type { DocumentItem } from '../types/document';

export interface DocumentFolder {
  id: string;
  name: string;
  parentId: string | null;
  createdAt: string;
  _count?: { documents: number; children: number };
}

export interface ApiDocument {
  id: string;
  title: string;
  desc: string;
  path: string;
  type: string;
  category: string;
  folderId: string;
  createdAt: string;
  updatedAt: string;
}

type FetchFn = (url: string, options?: RequestInit) => Promise<Response>;

export async function fetchDocumentFolders(fetchWithAuth: FetchFn): Promise<DocumentFolder[]> {
  const res = await fetchWithAuth('/api/document-folders');
  if (!res.ok) throw new Error('Erro ao carregar pastas de documentos');
  const data = await res.json();
  return (data || []).map((f: { id: string; name: string; parentId: string | null; createdAt: string; _count?: { documents: number; children: number } }) => ({
    id: f.id,
    name: f.name ?? '',
    parentId: f.parentId ?? null,
    createdAt: typeof f.createdAt === 'string' ? f.createdAt : new Date(f.createdAt).toISOString(),
    _count: f._count,
  }));
}

export async function fetchDocuments(fetchWithAuth: FetchFn, folderId?: string | null): Promise<ApiDocument[]> {
  const url = folderId ? `/api/documents?folderId=${encodeURIComponent(folderId)}` : '/api/documents';
  const res = await fetchWithAuth(url);
  if (!res.ok) throw new Error('Erro ao carregar documentos');
  const data = await res.json();
  return (data || []).map((d: ApiDocument) => ({
    id: d.id,
    title: d.title,
    desc: d.desc ?? '',
    path: d.path,
    type: d.type,
    category: d.category,
    folderId: d.folderId,
    createdAt: d.createdAt,
    updatedAt: d.updatedAt,
  }));
}

export function apiDocumentToItem(d: ApiDocument): DocumentItem {
  return {
    type: d.type as DocumentItem['type'],
    category: d.category as DocumentItem['category'],
    title: d.title,
    desc: d.desc,
    path: d.path,
  };
}
