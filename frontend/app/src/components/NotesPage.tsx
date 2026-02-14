import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { Icon } from './Icon';
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { fetchNotes, fetchNoteById, createNote, updateNote, deleteNoteApi, type Note } from '../api/notes';
import { fetchFolders, createFolder, deleteFolder, type Folder } from '../api/folders';
import { useNoteMiniPlayer } from '../contexts/NoteMiniPlayerContext';
import {
  MDXEditor,
  type MDXEditorMethods,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  linkDialogPlugin,
  codeBlockPlugin,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  UndoRedo,
  CreateLink,
  InsertCodeBlock,
  ListsToggle,
  Separator,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import './NotesPage.css';

type SortBy = 'date' | 'title';

/** Slug para cores por categoria (igual à página de Documentos) */
function getFolderSlug(name: string): string {
  const map: Record<string, string> = {
    'Front-end': 'front-end',
    'JavaScript': 'javascript',
    'Slides': 'slides',
    'README': 'readme',
    'Relatório de correção': 'relatorio',
  };
  return map[name] ?? '';
}

function flattenFoldersForMove(folders: Folder[]): { id: string; name: string; depth: number }[] {
  const byParent = new Map<string | null, Folder[]>();
  folders.forEach((f) => {
    const key = f.parentId ?? null;
    if (!byParent.has(key)) byParent.set(key, []);
    byParent.get(key)!.push(f);
  });
  byParent.forEach((list) => list.sort((a, b) => a.name.localeCompare(b.name)));
  const out: { id: string; name: string; depth: number }[] = [];
  function walk(parentId: string | null, depth: number) {
    const list = byParent.get(parentId) ?? [];
    list.forEach((f) => {
      out.push({ id: f.id, name: f.name, depth });
      walk(f.id, depth + 1);
    });
  }
  walk(null, 0);
  return out;
}

function NoteMoveDropdown({
  note,
  folders,
  fetchWithAuth,
  onMoved,
}: {
  note: Note;
  folders: Folder[];
  fetchWithAuth: (url: string, opts?: RequestInit) => Promise<Response>;
  onMoved: () => void;
}) {
  const [open, setOpen] = useState(false);
  const flatFolders = useMemo(() => flattenFoldersForMove(folders), [folders]);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const tid = setTimeout(() => window.addEventListener('click', close), 0);
    return () => {
      clearTimeout(tid);
      window.removeEventListener('click', close);
    };
  }, [open]);

  const handleMove = async (targetFolderId: string | null) => {
    try {
      await fetchWithAuth(`/api/notes/${note.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folderId: targetFolderId }),
      });
      setOpen(false);
      onMoved();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao mover');
    }
  };

  return (
    <div className="notes-page__move-wrap">
      <button
        type="button"
        className="notes-page__card-btn"
        onClick={(e) => { e.stopPropagation(); e.preventDefault(); setOpen(!open); }}
        title="Mover para pasta"
        aria-label="Mover para pasta"
        aria-expanded={open}
      >
        <Icon name="drive_file_move" className="icon--sm" aria-hidden />
      </button>
      {open && (
        <div className="notes-page__move-dropdown" onClick={(e) => e.stopPropagation()}>
          <button type="button" onClick={() => handleMove(null)}>Raiz (Todas)</button>
          {flatFolders.map((f) => (
            <button
              key={f.id}
              type="button"
              className="notes-page__move-dropdown-item"
              style={{ paddingLeft: 0.5 + f.depth * 0.75 + 'rem' }}
              onClick={() => handleMove(f.id)}
            >
              {f.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function NotesPage() {
  const { fetchWithAuth } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFolderId = searchParams.get('folder') ?? 'root';
  const [notes, setNotes] = useState<Note[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('date');
  const [creatingFolder, setCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const { openMiniPlayer, closeMiniPlayer, note: miniPlayerNote } = useNoteMiniPlayer();

  const loadFolders = useCallback(async () => {
    try {
      const list = await fetchFolders(fetchWithAuth);
      setFolders(list);
    } catch {
      setFolders([]);
    }
  }, [fetchWithAuth]);

  const loadNotes = useCallback(async () => {
    setLoading(true);
    try {
      const folderParam = currentFolderId === 'root' ? null : currentFolderId;
      const list = await fetchNotes(fetchWithAuth, folderParam);
      setNotes(list);
    } catch {
      setNotes([]);
    } finally {
      setLoading(false);
    }
  }, [fetchWithAuth, currentFolderId]);

  useEffect(() => {
    loadFolders();
  }, [loadFolders]);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleDeleteFolder = async (id: string) => {
    if (!confirm('Excluir esta pasta? As notas dentro dela ficarão na raiz.')) return;
    try {
      await deleteFolder(fetchWithAuth, id);
      if (currentFolderId === id) setSearchParams({});
      await loadFolders();
      await loadNotes();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao excluir pasta');
    }
  };

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

  type FolderWithChildren = Folder & { children: FolderWithChildren[] };
  const folderTree = useMemo(() => {
    const list = folders;
    const byId = new Map<string, FolderWithChildren>();
    list.forEach((f) => byId.set(f.id, { ...f, children: [] }));
    const roots: FolderWithChildren[] = [];
    list.forEach((f) => {
      const node = byId.get(f.id)!;
      if (!f.parentId) {
        roots.push(node);
      } else {
        const parent = byId.get(f.parentId);
        if (parent) parent.children.push(node);
        else roots.push(node);
      }
    });
    roots.sort((a, b) => a.name.localeCompare(b.name));
    roots.forEach((r) => r.children.sort((a, b) => a.name.localeCompare(b.name)));
    return roots;
  }, [folders]);

  const [expandedFolderIds, setExpandedFolderIds] = useState<Set<string>>(() => new Set());
  // undefined = formulário fechado, null = criar na raiz, string = criar dentro dessa pasta
  const [creatingFolderParentId, setCreatingFolderParentId] = useState<string | null | undefined>(undefined);

  const expandPathToFolder = useCallback((folderId: string) => {
    const path: string[] = [];
    let id: string | null = folderId;
    while (id) {
      path.push(id);
      const folder = folders.find((f) => f.id === id);
      id = folder?.parentId ?? null;
    }
    setExpandedFolderIds((prev) => {
      const next = new Set(prev);
      path.forEach((p) => next.add(p));
      return next;
    });
  }, [folders]);

  useEffect(() => {
    if (currentFolderId && currentFolderId !== 'root') expandPathToFolder(currentFolderId);
  }, [currentFolderId, expandPathToFolder]);

  const toggleExpanded = (id: string) => {
    setExpandedFolderIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCreateFolderWithParent = async (parentId: string | null) => {
    const name = newFolderName.trim();
    if (!name) return;
    const parentToExpand = typeof creatingFolderParentId === 'string' ? creatingFolderParentId : null;
    try {
      await createFolder(fetchWithAuth, { name, parentId });
      setNewFolderName('');
      setCreatingFolderParentId(undefined);
      await loadFolders();
      if (parentToExpand) setExpandedFolderIds((prev) => new Set(prev).add(parentToExpand));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao criar pasta');
    }
  };

  const rootFolders = useMemo(() => folders.filter((f) => !f.parentId), [folders]);
  const currentFolder = useMemo(() => folders.find((f) => f.id === currentFolderId), [folders, currentFolderId]);
  const foldersInCurrentView = useMemo(() => {
    if (currentFolderId === 'root' || !currentFolderId) return rootFolders;
    return folders.filter((f) => f.parentId === currentFolderId).sort((a, b) => a.name.localeCompare(b.name));
  }, [currentFolderId, folders, rootFolders]);
  const currentFolderPath = useMemo(() => {
    if (!currentFolderId || currentFolderId === 'root') return [];
    const path: Folder[] = [];
    let id: string | null = currentFolderId;
    while (id) {
      const f = folders.find((x) => x.id === id);
      if (!f) break;
      path.unshift(f);
      id = f.parentId;
    }
    return path;
  }, [folders, currentFolderId]);
  const isCreatingFolder = creatingFolderParentId !== undefined;

  function FolderTreeItem({
    node,
    depth,
  }: {
    node: FolderWithChildren;
    depth: number;
  }) {
    const hasChildren = node.children.length > 0;
    const isExpanded = expandedFolderIds.has(node.id);
    const isActive = currentFolderId === node.id;

    return (
      <div className="notes-page__folder-tree-branch" data-depth={depth}>
        <div className="notes-page__folder-wrap">
          {hasChildren ? (
            <button
              type="button"
              className="notes-page__folder-expand"
              onClick={(e) => { e.stopPropagation(); toggleExpanded(node.id); }}
              aria-label={isExpanded ? 'Recolher' : 'Expandir'}
              aria-expanded={isExpanded}
            >
              <Icon name={isExpanded ? 'expand_more' : 'chevron_right'} className="icon--xs" aria-hidden />
            </button>
          ) : (
            <span className="notes-page__folder-expand-placeholder" />
          )}
          <button
            type="button"
            className={`notes-page__folder-item ${isActive ? 'notes-page__folder-item--active' : ''}`}
            data-folder={getFolderSlug(node.name) || undefined}
            onClick={() => setSearchParams({ folder: node.id })}
          >
            <Icon name="folder" className="icon--sm" aria-hidden />
            <span>{node.name}</span>
            <span className="notes-page__folder-count">{node._count?.notes ?? 0}</span>
          </button>
          <button
            type="button"
            className="notes-page__folder-subfolder notes-page__folder-subfolder--visible"
            onClick={(e) => { e.stopPropagation(); setCreatingFolderParentId(node.id); }}
            title="Nova subpasta aqui"
            aria-label="Criar subpasta"
          >
            <Icon name="create_new_folder" className="icon--xs" aria-hidden />
          </button>
          <button
            type="button"
            className="notes-page__folder-del"
            onClick={(e) => { e.stopPropagation(); handleDeleteFolder(node.id); }}
            title="Excluir pasta"
            aria-label="Excluir pasta"
          >
            <Icon name="delete" className="icon--xs" aria-hidden />
          </button>
        </div>
        {hasChildren && isExpanded && (
          <div className="notes-page__folder-children">
            {node.children.map((child) => (
              <FolderTreeItem key={child.id} node={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="notes-page app">
      <div className="notes-page__inner notes-page__inner--with-sidebar">
        <aside className="notes-page__folders">
          <h3 className="notes-page__folders-title">Pastas</h3>
          <button
            type="button"
            className={`notes-page__folder-item ${currentFolderId === 'root' ? 'notes-page__folder-item--active' : ''}`}
            onClick={() => setSearchParams({})}
          >
            <Icon name="folder" className="icon--sm" aria-hidden />
            <span>Todas</span>
          </button>
          <div className="notes-page__folder-tree">
            {folderTree.map((node) => (
              <FolderTreeItem key={node.id} node={node} depth={0} />
            ))}
          </div>
          {isCreatingFolder ? (
            <div className="notes-page__folder-create">
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder={creatingFolderParentId === null ? 'Nome da pasta (raiz)' : 'Nome da subpasta'}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCreateFolderWithParent(creatingFolderParentId ?? null);
                  if (e.key === 'Escape') setCreatingFolderParentId(undefined);
                }}
              />
              <button type="button" onClick={() => handleCreateFolderWithParent(creatingFolderParentId ?? null)} disabled={!newFolderName.trim()}>Criar</button>
              <button type="button" onClick={() => { setCreatingFolderParentId(undefined); setNewFolderName(''); }}>Cancelar</button>
            </div>
          ) : (
            <button
              type="button"
              className="notes-page__folder-new"
              onClick={() => setCreatingFolderParentId(currentFolderId === 'root' ? null : currentFolderId)}
            >
              <Icon name="create_new_folder" className="icon--sm" aria-hidden /> Nova pasta
            </button>
          )}
        </aside>
        <div className="notes-page__main">
          <nav className="notes-page__breadcrumb" aria-label="Navegação">
            <Link to="/">Início</Link>
            <span className="notes-page__breadcrumb-sep">›</span>
            <Link to="/notas">Notas</Link>
            {currentFolderPath.map((f) => (
              <span key={f.id}>
                <span className="notes-page__breadcrumb-sep">›</span>
                <Link to={`/notas?folder=${f.id}`}>{f.name}</Link>
              </span>
            ))}
          </nav>
          <div className="notes-page__stats">
            <div className="notes-page__stat">
              <span className="notes-page__stat-value">{notes.length}</span>
              <span className="notes-page__stat-label">Total</span>
            </div>
          </div>
          <header className="notes-page__header">
            <h1 className="notes-page__title">{currentFolder ? currentFolder.name : 'Minhas notas'}</h1>
            <p className="notes-page__subtitle">
              {currentFolder
                ? `Notas nesta pasta`
                : 'Crie e edite suas notas. Organize em pastas.'}
            </p>
          </header>
          <div className="notes-page__toolbar">
            <div className="notes-page__toolbar-filters">
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
            <div className="notes-page__toolbar-actions">
              <span className="notes-page__count" title="Total de notas">
                {notes.length} notas
              </span>
              <Link
                to={currentFolderId === 'root' || !currentFolderId ? '/notas/nova' : `/notas/nova?folder=${currentFolderId}`}
                className="notes-page__btn-new"
              >
                <Icon name="add" className="icon--sm" aria-hidden /> Nova nota
              </Link>
            </div>
          </div>

          <section className="notes-page__section">
          {loading ? (
            <p className="notes-page__empty">Carregando notas...</p>
          ) : foldersInCurrentView.length === 0 && filteredAndSorted.length === 0 ? (
            <p className="notes-page__empty">
              {notes.length === 0 && foldersInCurrentView.length === 0
                ? 'Nenhuma nota nem pasta ainda. Crie a primeira!'
                : 'Nenhuma nota corresponde à busca.'}
            </p>
          ) : (
            <div className="notes-page__grid">
              {foldersInCurrentView.map((f) => (
                <div key={f.id} className="notes-page__card notes-page__card--folder" data-folder={getFolderSlug(f.name) || undefined}>
                  <Link to={`/notas?folder=${f.id}`} className="notes-page__card-link">
                    <div className="notes-page__card-header">
                      <h3 className="notes-page__card-title">
                        <Icon name="folder" className="notes-page__card-folder-icon" aria-hidden />
                        {f.name}
                      </h3>
                      <span className="notes-page__card-badge notes-page__card-badge--folder">Pasta</span>
                    </div>
                    <p className="notes-page__card-preview">
                      {(f._count?.notes ?? 0) === 0
                        ? 'Nenhuma nota'
                        : `${f._count?.notes ?? 0} ${(f._count?.notes ?? 0) === 1 ? 'nota' : 'notas'}`}
                    </p>
                    <span className="notes-page__card-meta">Pasta</span>
                  </Link>
                  <div className="notes-page__card-actions" onClick={(e) => e.preventDefault()}>
                    <button
                      type="button"
                      className="notes-page__card-btn notes-page__card-btn--del"
                      onClick={async (e) => {
                        e.stopPropagation();
                        if (confirm('Excluir esta pasta? As notas dentro dela ficarão na raiz.')) {
                          try {
                            await handleDeleteFolder(f.id);
                          } catch {
                            // handleDeleteFolder already shows alert
                          }
                        }
                      }}
                      title="Excluir pasta"
                      aria-label="Excluir pasta"
                    >
                      <Icon name="delete" className="icon--sm" aria-hidden />
                    </button>
                  </div>
                </div>
              ))}
              {filteredAndSorted.map((n) => (
                <div key={n.id} className="notes-page__card">
                  <Link to={`/notas/${n.id}`} className="notes-page__card-link">
                    <div className="notes-page__card-header">
                      <h3 className="notes-page__card-title">
                        {n.title || '(Sem titulo)'}
                      </h3>
                      <span className="notes-page__card-badge">Nota</span>
                    </div>
                    <p className="notes-page__card-preview">
                      {n.content ? (n.content.slice(0, 120) + (n.content.length > 120 ? '...' : '')) : '(vazio)'}
                    </p>
                    <span className="notes-page__card-meta">
                      {new Date(n.updatedAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </Link>
                  <div className="notes-page__card-actions" onClick={(e) => e.preventDefault()}>
                    <NoteMoveDropdown
                      note={n}
                      folders={folders}
                      fetchWithAuth={fetchWithAuth}
                      onMoved={loadNotes}
                    />
                    <button
                      type="button"
                      className="notes-page__card-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openMiniPlayer(n);
                      }}
                      title="Abrir mini player"
                      aria-label="Mini player"
                    >
                      <Icon name="picture_in_picture" className="icon--sm" aria-hidden />
                    </button>
                    <button
                      type="button"
                      className="notes-page__card-btn notes-page__card-btn--del"
                      onClick={async (e) => {
                        e.stopPropagation();
                        if (confirm('Excluir esta nota?')) {
                          try {
                            await deleteNoteApi(fetchWithAuth, n.id);
                            if (miniPlayerNote?.id === n.id) closeMiniPlayer();
                            await loadNotes();
                          } catch (err) {
                            alert(err instanceof Error ? err.message : 'Erro ao excluir');
                          }
                        }
                      }}
                      title="Excluir nota"
                      aria-label="Excluir"
                    >
                      <Icon name="delete" className="icon--sm" aria-hidden />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          </section>
        </div>
      </div>
    </div>
  );
}

type SavingStatus = 'idle' | 'pending' | 'saving' | 'saved';

export function NoteEditorPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const folderParam = searchParams.get('folder');
  const folderIdFromUrl = folderParam && folderParam !== 'root' ? folderParam : null;
  const { fetchWithAuth } = useAuth();
  const { openMiniPlayer } = useNoteMiniPlayer();
  const [note, setNote] = useState<Note | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [savingStatus, setSavingStatus] = useState<SavingStatus>('idle');
  const editorRef = useRef<MDXEditorMethods | null>(null);
  const isFirstRender = useRef(true);
  const lastSaved = useRef<{ title: string; content: string } | null>(null);

  const isNew = id === 'nova';

  useEffect(() => {
    if (isNew) {
      setNote({ id: '', title: '', content: '', createdAt: '', updatedAt: '' });
      setTitle('');
      setContent('');
      setLoading(false);
    } else if (id) {
      setLoading(true);
      fetchNoteById(fetchWithAuth, id)
        .then((found) => {
          setNote(found ?? null);
          setTitle(found?.title ?? '');
          setContent(found?.content ?? '');
        })
        .catch(() => setNote(null))
        .finally(() => setLoading(false));
    }
    isFirstRender.current = true;
    lastSaved.current = null;
  }, [id, isNew, fetchWithAuth]);

  const persistNote = useCallback(async () => {
    if (!note) return null;
    const md = editorRef.current?.getMarkdown?.();
    const finalContent = typeof md === 'string' ? md : content;
    const titleVal = title.trim() || '(Sem titulo)';
    const contentVal = finalContent.trim();
    try {
      let updated: Note;
      if (isNew || !note.id) {
        updated = await createNote(fetchWithAuth, { title: titleVal, content: contentVal, folderId: folderIdFromUrl });
        setNote(updated);
        setTitle(updated.title);
        setContent(updated.content);
        navigate(`/notas/${updated.id}`, { replace: true });
      } else {
        updated = await updateNote(fetchWithAuth, note.id, { title: titleVal, content: contentVal });
        setNote(updated);
        setTitle(updated.title);
        setContent(updated.content);
      }
      return updated;
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao salvar');
      return null;
    }
  }, [note, title, content, isNew, navigate, fetchWithAuth, folderIdFromUrl]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      lastSaved.current = { title, content };
      return;
    }
    if (lastSaved.current && lastSaved.current.title === title && lastSaved.current.content === content) {
      return;
    }
    setSavingStatus('pending');
    const t = setTimeout(() => {
      setSavingStatus('saving');
      persistNote().then((updated) => {
        if (updated) {
          lastSaved.current = { title: updated.title, content: updated.content };
        }
        setSavingStatus('saved');
        setTimeout(() => setSavingStatus('idle'), 1200);
      });
    }, 600);
    return () => clearTimeout(t);
  }, [title, content, persistNote]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        persistNote();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [persistNote]);

  const handleDelete = async () => {
    if (!note || !confirm('Excluir esta nota?')) return;
    if (isNew || !note.id) {
      navigate('/notas');
      return;
    }
    try {
      await deleteNoteApi(fetchWithAuth, note.id);
      navigate('/notas');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao excluir');
    }
  };

  if (loading && !isNew) {
    return (
      <div className="notes-page">
        <div className="notes-page__inner">
          <p>Carregando nota...</p>
        </div>
      </div>
    );
  }

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
            <span
              className={`notes-page__saving ${savingStatus !== 'idle' ? 'notes-page__saving--active' : ''}`}
              aria-live="polite"
            >
              <span className="notes-page__saving-dot" />
              {savingStatus === 'pending' || savingStatus === 'saving'
                ? 'Salvando...'
                : savingStatus === 'saved'
                  ? 'Salvo'
                  : null}
            </span>
            {!isNew && (
              <>
                <button
                  type="button"
                  className="notes-page__btn notes-page__btn--mini"
                  onClick={() => {
                    if (note) openMiniPlayer(note);
                  }}
                  title="Abrir mini player"
                >
                  <Icon name="picture_in_picture" className="icon--sm" aria-hidden />
                </button>
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
          <div className="notes-page__mdx-editor-wrap">
            <MDXEditor
              ref={editorRef}
              key={note?.id ?? 'new'}
              markdown={content}
              onChange={setContent}
              className="dark-theme"
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                codeBlockPlugin(),
                toolbarPlugin({
                  toolbarContents: () => (
                    <>
                      <UndoRedo />
                      <Separator />
                      <BoldItalicUnderlineToggles />
                      <Separator />
                      <BlockTypeSelect />
                      <ListsToggle />
                      <Separator />
                      <CreateLink />
                      <InsertCodeBlock />
                    </>
                  ),
                }),
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
