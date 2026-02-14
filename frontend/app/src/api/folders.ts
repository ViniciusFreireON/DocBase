export interface Folder {
  id: string;
  name: string;
  parentId: string | null;
  createdAt: string;
  _count?: { notes: number; uploads: number; children: number };
}

type FetchFn = (url: string, options?: RequestInit) => Promise<Response>;

export async function fetchFolders(fetchWithAuth: FetchFn): Promise<Folder[]> {
  const res = await fetchWithAuth('/api/folders');
  if (!res.ok) throw new Error('Erro ao carregar pastas');
  const data = await res.json();
  return (data || []).map((f: { id: string; name: string; parentId: string | null; createdAt: string; _count?: object }) => ({
    id: f.id,
    name: f.name ?? '',
    parentId: f.parentId ?? null,
    createdAt: typeof f.createdAt === 'string' ? f.createdAt : new Date(f.createdAt).toISOString(),
    _count: f._count,
  }));
}

export async function createFolder(
  fetchWithAuth: FetchFn,
  data: { name: string; parentId?: string | null }
): Promise<Folder> {
  const res = await fetchWithAuth('/api/folders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: data.name, parentId: data.parentId ?? null }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? 'Erro ao criar pasta');
  }
  const f = await res.json();
  return {
    id: f.id,
    name: f.name ?? '',
    parentId: f.parentId ?? null,
    createdAt: typeof f.createdAt === 'string' ? f.createdAt : new Date(f.createdAt).toISOString(),
  };
}

export async function updateFolder(
  fetchWithAuth: FetchFn,
  id: string,
  data: { name?: string; parentId?: string | null }
): Promise<Folder> {
  const res = await fetchWithAuth(`/api/folders/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? 'Erro ao atualizar pasta');
  }
  const f = await res.json();
  return {
    id: f.id,
    name: f.name ?? '',
    parentId: f.parentId ?? null,
    createdAt: typeof f.createdAt === 'string' ? f.createdAt : new Date(f.createdAt).toISOString(),
  };
}

export async function deleteFolder(fetchWithAuth: FetchFn, id: string): Promise<void> {
  const res = await fetchWithAuth(`/api/folders/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? 'Erro ao excluir pasta');
  }
}
