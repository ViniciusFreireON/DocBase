const UPLOADS_KEY = 'docbase_uploads';
const NOTES_KEY = 'docbase_notes';

/* Cache em memória para notas (leitura rápida + persistência em localStorage) */
let notesCache: { id: string; note: Note }[] | null = null;

function loadNotesFromStorage(): Note[] {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistNotesToStorage(notes: Note[]): void {
  try {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (e) {
    console.warn('Erro ao salvar notas no localStorage:', e);
  }
}

export interface UploadedFile {
  id: string;
  name: string;
  type: string;
  content: string;
  size: number;
  uploadedAt: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export function getUploads(): UploadedFile[] {
  try {
    const raw = localStorage.getItem(UPLOADS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveUpload(file: UploadedFile): void {
  const uploads = getUploads();
  uploads.unshift(file);
  localStorage.setItem(UPLOADS_KEY, JSON.stringify(uploads));
}

export function deleteUpload(id: string): void {
  const uploads = getUploads().filter((u) => u.id !== id);
  localStorage.setItem(UPLOADS_KEY, JSON.stringify(uploads));
}

export function getUploadById(id: string): UploadedFile | null {
  return getUploads().find((u) => u.id === id) ?? null;
}

export function getNotes(): Note[] {
  const notes = notesCache
    ? notesCache.map(({ note }) => note)
    : loadNotesFromStorage();
  if (!notesCache) {
    notesCache = notes.map((n) => ({ id: n.id, note: n }));
  }
  return [...notes].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export function saveNote(note: Note): void {
  const notes = getNotes().filter((n) => n.id !== note.id);
  notes.unshift(note);
  notesCache = notes.map((n) => ({ id: n.id, note: n }));
  persistNotesToStorage(notes);
}

export function deleteNote(id: string): void {
  const notes = getNotes().filter((n) => n.id !== id);
  notesCache = notes.map((n) => ({ id: n.id, note: n }));
  persistNotesToStorage(notes);
}

export function getNoteById(id: string): Note | null {
  if (notesCache) {
    const found = notesCache.find((c) => c.id === id);
    return found ? found.note : null;
  }
  const notes = loadNotesFromStorage();
  return notes.find((n) => n.id === id) ?? null;
}

/** Limpa o cache em memória (força nova leitura do localStorage) */
export function invalidateNotesCache(): void {
  notesCache = null;
}
