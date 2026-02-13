import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Note } from '../utils/storage';

interface NoteMiniPlayerContextValue {
  note: Note | null;
  isOpen: boolean;
  openMiniPlayer: (note: Note) => void;
  closeMiniPlayer: () => void;
}

const NoteMiniPlayerContext = createContext<NoteMiniPlayerContextValue | null>(null);

export function NoteMiniPlayerProvider({ children }: { children: ReactNode }) {
  const [note, setNote] = useState<Note | null>(null);

  const openMiniPlayer = useCallback((n: Note) => {
    setNote(n);
  }, []);

  const closeMiniPlayer = useCallback(() => {
    setNote(null);
  }, []);

  return (
    <NoteMiniPlayerContext.Provider
      value={{
        note,
        isOpen: note !== null,
        openMiniPlayer,
        closeMiniPlayer,
      }}
    >
      {children}
    </NoteMiniPlayerContext.Provider>
  );
}

export function useNoteMiniPlayer() {
  const ctx = useContext(NoteMiniPlayerContext);
  if (!ctx) throw new Error('useNoteMiniPlayer must be used within NoteMiniPlayerProvider');
  return ctx;
}
