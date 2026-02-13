const UPLOADS_KEY = 'docbase_uploads';
const NOTES_KEY = 'docbase_notes';

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
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    const notes = raw ? JSON.parse(raw) : [];
    return notes.sort((a: Note, b: Note) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  } catch {
    return [];
  }
}

export function saveNote(note: Note): void {
  const notes = getNotes().filter((n) => n.id !== note.id);
  notes.unshift(note);
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function deleteNote(id: string): void {
  const notes = getNotes().filter((n) => n.id !== id);
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function getNoteById(id: string): Note | null {
  return getNotes().find((n) => n.id === id) ?? null;
}
