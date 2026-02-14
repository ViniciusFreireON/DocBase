export interface Note {
  id: string;
  title: string;
  content: string;
  folderId?: string | null;
  createdAt: string;
  updatedAt: string;
}

type FetchFn = (url: string, options?: RequestInit) => Promise<Response>;

export async function fetchNotes(fetchWithAuth: FetchFn, folderId?: string | null): Promise<Note[]> {
  const url = folderId !== undefined
    ? `/api/notes?folderId=${folderId ?? 'root'}`
    : '/api/notes';
  const res = await fetchWithAuth(url);
  if (!res.ok) throw new Error('Erro ao carregar notas');
  const data = await res.json();
  return (data || []).map((n: { id: string; title: string; content: string; folderId?: string | null; createdAt: string; updatedAt: string }) => ({
    id: n.id,
    title: n.title ?? '',
    content: n.content ?? '',
    folderId: n.folderId ?? null,
    createdAt: typeof n.createdAt === 'string' ? n.createdAt : new Date(n.createdAt).toISOString(),
    updatedAt: typeof n.updatedAt === 'string' ? n.updatedAt : new Date(n.updatedAt).toISOString(),
  }));
}

export async function fetchNoteById(fetchWithAuth: FetchFn, id: string): Promise<Note | null> {
  const res = await fetchWithAuth(`/api/notes/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Erro ao carregar nota');
  const n = await res.json();
  return {
    id: n.id,
    title: n.title ?? '',
    content: n.content ?? '',
    folderId: n.folderId ?? null,
    createdAt: typeof n.createdAt === 'string' ? n.createdAt : new Date(n.createdAt).toISOString(),
    updatedAt: typeof n.updatedAt === 'string' ? n.updatedAt : new Date(n.updatedAt).toISOString(),
  };
}

export async function createNote(
  fetchWithAuth: FetchFn,
  data: { title?: string; content?: string; folderId?: string | null }
): Promise<Note> {
  const res = await fetchWithAuth('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: data.title ?? '',
      content: data.content ?? '',
      folderId: data.folderId ?? null,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? 'Erro ao criar nota');
  }
  const n = await res.json();
  return {
    id: n.id,
    title: n.title ?? '',
    content: n.content ?? '',
    folderId: n.folderId ?? null,
    createdAt: typeof n.createdAt === 'string' ? n.createdAt : new Date(n.createdAt).toISOString(),
    updatedAt: typeof n.updatedAt === 'string' ? n.updatedAt : new Date(n.updatedAt).toISOString(),
  };
}

export async function updateNote(
  fetchWithAuth: FetchFn,
  id: string,
  data: { title?: string; content?: string; folderId?: string | null }
): Promise<Note> {
  const res = await fetchWithAuth(`/api/notes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? 'Erro ao atualizar nota');
  }
  const n = await res.json();
  return {
    id: n.id,
    title: n.title ?? '',
    content: n.content ?? '',
    folderId: n.folderId ?? null,
    createdAt: typeof n.createdAt === 'string' ? n.createdAt : new Date(n.createdAt).toISOString(),
    updatedAt: typeof n.updatedAt === 'string' ? n.updatedAt : new Date(n.updatedAt).toISOString(),
  };
}

export async function deleteNoteApi(fetchWithAuth: FetchFn, id: string): Promise<void> {
  const res = await fetchWithAuth(`/api/notes/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? 'Erro ao excluir nota');
  }
}
