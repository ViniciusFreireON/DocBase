import { useState, useRef, useEffect, useCallback } from 'react';
import { useNoteMiniPlayer } from '../contexts/NoteMiniPlayerContext';
import { getNoteById, saveNote } from '../utils/storage';
import { Icon } from './Icon';
import './NoteMiniPlayer.css';

const MIN_WIDTH = 280;
const MIN_HEIGHT = 200;
const DEFAULT_WIDTH = 360;
const DEFAULT_HEIGHT = 400;

export function NoteMiniPlayer() {
  const { note, closeMiniPlayer } = useNoteMiniPlayer();
  const [position, setPosition] = useState({ x: 20, y: 80 });
  const [size, setSize] = useState({ width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; posX: number; posY: number } | null>(null);
  const resizeRef = useRef<{ startX: number; startY: number; width: number; height: number } | null>(null);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentNote = note ? getNoteById(note.id) ?? note : null;

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title || '');
      setContent(currentNote.content || '');
    }
  }, [currentNote?.id]);

  const persistNote = useCallback(() => {
    if (!currentNote) return;
    saveNote({
      ...currentNote,
      title: title.trim() || '(Sem titulo)',
      content: content.trim(),
      updatedAt: new Date().toISOString(),
    });
  }, [currentNote, title, content]);

  const scheduleSave = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(persistNote, 600);
  }, [persistNote]);

  const handleTitleChange = (v: string) => {
    setTitle(v);
    scheduleSave();
  };

  const handleContentChange = (v: string) => {
    setContent(v);
    scheduleSave();
  };

  const handleDragStart = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.note-mini-player__drag-handle') && !(e.target as HTMLElement).closest('.note-mini-player__actions') && !(e.target as HTMLElement).closest('input')) {
      e.preventDefault();
      setIsDragging(true);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        posX: position.x,
        posY: position.y,
      };
    }
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    resizeRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      width: size.width,
      height: size.height,
    };
  };

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPosition({
        x: Math.max(0, dragRef.current.posX + dx),
        y: Math.max(0, dragRef.current.posY + dy),
      });
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      dragRef.current = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!isResizing) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!resizeRef.current) return;
      const dw = e.clientX - resizeRef.current.startX;
      const dh = e.clientY - resizeRef.current.startY;
      setSize({
        width: Math.max(MIN_WIDTH, resizeRef.current.width + dw),
        height: Math.max(MIN_HEIGHT, resizeRef.current.height + dh),
      });
    };
    const handleMouseUp = () => {
      setIsResizing(false);
      resizeRef.current = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  if (!currentNote) return null;

  return (
    <div
      className={`note-mini-player ${isFullscreen ? 'note-mini-player--fullscreen' : ''}`}
      style={
        isFullscreen
          ? undefined
          : {
              left: position.x,
              top: position.y,
              width: size.width,
              height: size.height,
            }
      }
      onMouseDown={!isFullscreen ? handleDragStart : undefined}
    >
      <div className="note-mini-player__drag-handle">
        {!isFullscreen && (
          <Icon name="drag_indicator" className="note-mini-player__drag-icon icon--sm" aria-hidden />
        )}
        <input
          type="text"
          className="note-mini-player__title-input"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Titulo"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
        <div className="note-mini-player__actions">
          <button
            type="button"
            className="note-mini-player__btn"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
            aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
          >
            <Icon
              name={isFullscreen ? 'fullscreen_exit' : 'open_in_full'}
              className="icon--sm"
              aria-hidden
            />
          </button>
          <button
            type="button"
            className="note-mini-player__btn"
            onClick={closeMiniPlayer}
            title="Fechar mini player"
            aria-label="Fechar"
          >
            <Icon name="close" className="icon--sm" aria-hidden />
          </button>
        </div>
      </div>
      <div className="note-mini-player__content">
        <textarea
          className="note-mini-player__textarea"
          value={content}
          onChange={(e) => handleContentChange(e.target.value)}
          placeholder="Escreva sua nota..."
          spellCheck={false}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
      </div>
      {!isFullscreen && (
        <div
          className="note-mini-player__resize-handle"
          onMouseDown={handleResizeStart}
          aria-label="Redimensionar"
        >
          <Icon name="open_with" className="note-mini-player__resize-icon" aria-hidden />
        </div>
      )}
    </div>
  );
}
