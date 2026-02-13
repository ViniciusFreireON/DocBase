import { useState, useCallback, useEffect, useMemo } from 'react';
import { Icon } from './Icon';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  getNotes,
  saveNote,
  deleteNote,
  getNoteById,
  type Note,
} from '../utils/storage';
import './NotesPage.css';

type SortBy = 'date' | 'title';

function newNote(): Note {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    title: '',
    content: '',
    createdAt: now,
    updatedAt: now,
  };
}

export function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [busca, setBusca] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('date');

  const loadNotes = useCallback(() => {
    setNotes(getNotes());
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const filteredAndSorted = useMemo(() => {
    let list = notes.filter((n) => {
      const t = (n.title || '').toLowerCase();
      const c = (n.content || '').toLowerCase();
      const q = busca.toLowerCase();
      return t.includes(q) || c.includes(q);
    });
    list = [...list].sort((a, b) => {
      if (sortBy === 'date') return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      return (a.title || '').localeCompare(b.title || '');
    });
    return list;
  }, [notes, busca, sortBy]);

  return (
    <div className="notes-page">
      <div className="notes-page__inner">
        <nav className="notes-page__breadcrumb" aria-label="Navegação">
          <Link to="/">Início</Link>
          <span className="notes-page__breadcrumb-sep">›</span>
          <span>Notas</span>
        </nav>
        <header className="notes-page__header">
          <h1 className="notes-page__title">Minhas notas</h1>
          <p className="notes-page__subtitle">
            Crie e edite suas notas. Salvas no seu navegador.
          </p>
          <Link to="/notas/nova" className="notes-page__btn-new">
            + Nova nota
          </Link>
        </header>

        <section className="notes-page__list">
          <div className="notes-page__list-header">
            <h2 className="notes-page__list-title">Todas ({notes.length})</h2>
            <div className="notes-page__list-controls">
              <input
                type="search"
                placeholder="Buscar nas notas..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="notes-page__search"
                aria-label="Buscar notas"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="notes-page__sort"
                aria-label="Ordenar por"
              >
                <option value="date">Mais recentes</option>
                <option value="title">Título (A-Z)</option>
              </select>
            </div>
          </div>
          {filteredAndSorted.length === 0 ? (
            <p className="notes-page__empty">
              {notes.length === 0 ? 'Nenhuma nota ainda. Crie a primeira!' : 'Nenhuma nota corresponde à busca.'}
            </p>
          ) : (
            <ul className="notes-page__items">
              {filteredAndSorted.map((n) => (
                <li key={n.id} className="notes-page__item">
                  <Link to={`/notas/${n.id}`} className="notes-page__item-link">
                    <span className="notes-page__item-title">
                      {n.title || '(Sem titulo)'}
                    </span>
                    <span className="notes-page__item-preview">
                      {n.content.slice(0, 100)}
                      {n.content.length > 100 ? '...' : ''}
                    </span>
                    <span className="notes-page__item-meta">
                      Atualizada em{' '}
                      {new Date(n.updatedAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

export function NoteEditorPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<Note | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [salvo, setSalvo] = useState(false);

  const isNew = id === 'nova';

  useEffect(() => {
    if (isNew) {
      setNote(newNote());
      setTitle('');
      setContent('');
    } else if (id) {
      const found = getNoteById(id);
      setNote(found ?? null);
      setTitle(found?.title ?? '');
      setContent(found?.content ?? '');
    }
  }, [id, isNew]);

  const handleSave = useCallback(() => {
    if (!note) return;
    const updated: Note = {
      ...note,
      title: title.trim() || '(Sem titulo)',
      content: content.trim(),
      updatedAt: new Date().toISOString(),
    };
    saveNote(updated);
    setNote(updated);
    setTitle(updated.title);
    setContent(updated.content);
    setSalvo(true);
    setTimeout(() => setSalvo(false), 2000);
    if (isNew) {
      navigate(`/notas/${updated.id}`, { replace: true });
    }
  }, [note, title, content, isNew, navigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleSave]);

  const handleDelete = () => {
    if (!note || !confirm('Excluir esta nota?')) return;
    deleteNote(note.id);
    navigate('/notas');
  };

  if (!note && !isNew) {
    return (
      <div className="notes-page">
        <div className="notes-page__inner">
          <p>Nota nao encontrada.</p>
          <Link to="/notas">Voltar</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-page notes-page--editor">
      <div className="notes-page__inner">
        <header className="notes-page__header notes-page__header--row">
          <Link to="/notas" className="notes-page__back">
            <Icon name="arrow_back" className="icon--sm" aria-hidden /> Voltar
          </Link>
          <div className="notes-page__actions">
            <button
              type="button"
              className="notes-page__btn notes-page__btn--save"
              onClick={handleSave}
            >
              {salvo ? 'Salvo!' : 'Salvar'}
            </button>
            {!isNew && (
              <>
                <button
                  type="button"
                  className="notes-page__btn notes-page__btn--export"
                  onClick={() => {
                    const text = `${title}\n\n${content}`;
                    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = `${(title || 'nota').replace(/[^a-z0-9-_]/gi, '_')}.txt`;
                    a.click();
                    URL.revokeObjectURL(a.href);
                  }}
                  title="Exportar como .txt"
                >
                  Exportar
                </button>
                <button
                  type="button"
                  className="notes-page__btn notes-page__btn--del"
                  onClick={handleDelete}
                >
                  Excluir
                </button>
              </>
            )}
          </div>
        </header>

        <div className="notes-page__form">
          <input
            type="text"
            className="notes-page__input-title"
            placeholder="Titulo da nota"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="notes-page__textarea"
            placeholder="Escreva sua nota aqui... (Ctrl+S para salvar)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
          />
        </div>
      </div>
    </div>
  );
}
