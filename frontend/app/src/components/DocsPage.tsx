import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { fetchDocumentFolders, fetchDocuments, apiDocumentToItem, type DocumentFolder } from '../api/documents';
import type { DocumentItem } from '../types/document';
import { DocumentCard } from './DocumentCard';
import { Icon } from './Icon';
import { useSearch } from '../contexts/SearchContext';
import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import { downloadAllDocuments } from '../utils/downloadAll';
import './DocsPage.css';

/** Mapeia o nome da pasta para um slug usado nas cores por categoria */
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

export function DocsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const folderId = searchParams.get('folder') || '';
  const { fetchWithAuth } = useAuth();
  const { open: openSearch } = useSearch();

  const [folders, setFolders] = useState<DocumentFolder[]>([]);
  const [documentsInFolder, setDocumentsInFolder] = useState<DocumentItem[]>([]);
  const [allDocuments, setAllDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadFolders = useCallback(async () => {
    try {
      const list = await fetchDocumentFolders(fetchWithAuth);
      setFolders(list);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro ao carregar pastas');
    }
  }, [fetchWithAuth]);

  const loadDocuments = useCallback(
    async (folderIdParam: string | null) => {
      try {
        const list = await fetchDocuments(fetchWithAuth, folderIdParam || undefined);
        setDocumentsInFolder(list.map(apiDocumentToItem));
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Erro ao carregar documentos');
        setDocumentsInFolder([]);
      }
    },
    [fetchWithAuth]
  );

  const loadAllDocuments = useCallback(async () => {
    try {
      const list = await fetchDocuments(fetchWithAuth);
      setAllDocuments(list.map(apiDocumentToItem));
    } catch {
      setAllDocuments([]);
    }
  }, [fetchWithAuth]);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setLoading(true);
    Promise.all([loadFolders(), loadAllDocuments()])
      .then(() => {
        if (!cancelled) setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [loadFolders, loadAllDocuments]);

  useEffect(() => {
    if (!folderId) {
      setDocumentsInFolder([]);
      return;
    }
    let cancelled = false;
    loadDocuments(folderId).then(() => {
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [folderId, loadDocuments]);

  const { recentDocs } = useRecentlyViewed(allDocuments);

  type FolderWithChildren = DocumentFolder & { children: FolderWithChildren[] };
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

  const expandPathToFolder = useCallback((id: string) => {
    const path: string[] = [];
    let current: string | null = id;
    while (current) {
      path.push(current);
      const f = folders.find((x) => x.id === current);
      current = f?.parentId ?? null;
    }
    setExpandedFolderIds((prev) => {
      const next = new Set(prev);
      path.forEach((p) => next.add(p));
      return next;
    });
  }, [folders]);

  useEffect(() => {
    if (folderId) expandPathToFolder(folderId);
  }, [folderId, expandPathToFolder]);

  const toggleExpanded = useCallback((id: string) => {
    setExpandedFolderIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const rootFolders = useMemo(
    () => folders.filter((f) => !f.parentId).sort((a, b) => a.name.localeCompare(b.name)),
    [folders]
  );
  const currentFolder = useMemo(() => folders.find((f) => f.id === folderId), [folders, folderId]);
  const childFolders = useMemo(
    () =>
      folderId
        ? folders.filter((f) => f.parentId === folderId).sort((a, b) => a.name.localeCompare(b.name))
        : [],
    [folders, folderId]
  );
  const hasChildFolders = childFolders.length > 0;
  const showDocuments = folderId && !hasChildFolders;

  const breadcrumbPath = useMemo(() => {
    if (!currentFolder) return [];
    const path: DocumentFolder[] = [];
    let f: DocumentFolder | undefined = currentFolder;
    while (f) {
      path.unshift(f);
      f = f.parentId ? folders.find((x) => x.id === f!.parentId) : undefined;
    }
    return path;
  }, [currentFolder, folders]);

  const setFolder = (id: string) => {
    const next = new URLSearchParams(searchParams);
    if (id) next.set('folder', id);
    else next.delete('folder');
    setSearchParams(next);
  };

  const handleDownloadAll = useCallback(async () => {
    const list = allDocuments.length > 0 ? allDocuments : (await fetchDocuments(fetchWithAuth).then((list) => list.map(apiDocumentToItem)));
    await downloadAllDocuments(list);
  }, [allDocuments, fetchWithAuth]);

  function FolderTreeItem({
    node,
    depth,
    expandedFolderIds,
    toggleExpanded,
    folderId: currentFolderId,
    setFolder: setFolderParam,
  }: {
    node: FolderWithChildren;
    depth: number;
    expandedFolderIds: Set<string>;
    toggleExpanded: (id: string) => void;
    folderId: string;
    setFolder: (id: string) => void;
  }) {
    const hasChildren = node.children.length > 0;
    const isExpanded = expandedFolderIds.has(node.id);
    const isActive = currentFolderId === node.id;

    return (
      <div className="docs-page__folder-tree-branch" data-depth={depth}>
        <div className="docs-page__folder-wrap">
          {hasChildren ? (
            <button
              type="button"
              className="docs-page__folder-expand"
              onClick={(e) => { e.stopPropagation(); toggleExpanded(node.id); }}
              aria-label={isExpanded ? 'Recolher' : 'Expandir'}
              aria-expanded={isExpanded}
            >
              <Icon name={isExpanded ? 'expand_more' : 'chevron_right'} className="icon--xs" aria-hidden />
            </button>
          ) : (
            <span className="docs-page__folder-expand-placeholder" />
          )}
          <button
            type="button"
            className={`docs-page__folder-item ${isActive ? 'docs-page__folder-item--active' : ''}`}
            data-folder={getFolderSlug(node.name) || undefined}
            onClick={() => setFolderParam(node.id)}
          >
            <Icon name="folder" className="icon--sm" aria-hidden />
            <span>{node.name}</span>
            {(node._count?.documents ?? 0) > 0 && (
              <span className="docs-page__folder-count">{node._count?.documents}</span>
            )}
          </button>
        </div>
        {hasChildren && isExpanded && (
          <div className="docs-page__folder-children">
            {node.children.map((child) => (
              <FolderTreeItem
                key={child.id}
                node={child}
                depth={depth + 1}
                expandedFolderIds={expandedFolderIds}
                toggleExpanded={toggleExpanded}
                folderId={currentFolderId}
                setFolder={setFolderParam}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (loading && folders.length === 0) {
    return (
      <div className="docs-page">
        <div className="docs-page__inner docs-page__inner--with-sidebar">
          <p className="docs-page__empty">Carregando documentos...</p>
        </div>
      </div>
    );
  }

  if (error && folders.length === 0) {
    return (
      <div className="docs-page">
        <div className="docs-page__inner docs-page__inner--with-sidebar">
          <p className="docs-page__empty">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="docs-page">
      <div className="docs-page__inner docs-page__inner--with-sidebar">
        <aside className="docs-page__folders">
          <h3 className="docs-page__folders-title">Pastas</h3>
          <button
            type="button"
            className={`docs-page__folder-item ${!folderId ? 'docs-page__folder-item--active' : ''}`}
            onClick={() => setFolder('')}
          >
            <Icon name="folder" className="icon--sm" aria-hidden />
            <span>Todas</span>
          </button>
          <div className="docs-page__folder-tree">
            {folderTree.map((node) => (
              <FolderTreeItem
                key={node.id}
                node={node}
                depth={0}
                expandedFolderIds={expandedFolderIds}
                toggleExpanded={toggleExpanded}
                folderId={folderId}
                setFolder={setFolder}
              />
            ))}
          </div>
        </aside>

        <div className="docs-page__main">
          <nav className="docs-page__breadcrumb" aria-label="Navegação">
            <Link to="/">Início</Link>
            <span className="docs-page__breadcrumb-sep">›</span>
            <Link to="/docs">Documentos</Link>
            {breadcrumbPath.map((f) => (
              <span key={f.id}>
                <span className="docs-page__breadcrumb-sep">›</span>
                <button
                  type="button"
                  className="docs-page__breadcrumb-link"
                  onClick={() => setFolder(f.id)}
                >
                  {f.name}
                </button>
              </span>
            ))}
          </nav>

          <header className="docs-page__header">
            <h1 className="docs-page__title">
              {currentFolder ? currentFolder.name : 'Documentos'}
            </h1>
            <p className="docs-page__subtitle">
              {showDocuments
                ? `${documentsInFolder.length} documento(s)`
                : folderId
                  ? 'Escolha uma pasta ou veja os documentos.'
                  : 'Escolha uma pasta para ver os documentos.'}
            </p>
          </header>

          <div className="docs-page__toolbar">
            <div
              className="docs-page__search-bar"
              onClick={openSearch}
              onKeyDown={(e) => e.key === 'Enter' && openSearch()}
              role="button"
              tabIndex={0}
              aria-label="Buscar documentos"
            >
              <Icon name="search" className="icon--sm" aria-hidden />
              <span>Buscar documentos</span>
            </div>
            <button type="button" className="docs-page__btn-download" onClick={handleDownloadAll}>
              <Icon name="download" className="icon--sm" aria-hidden /> Baixar todos
            </button>
          </div>

          {recentDocs.length > 0 && !folderId && (
            <section className="docs-page__recent">
              <h2 className="docs-page__recent-title">Vistos recentemente</h2>
              <div className="docs-page__recent-grid">
                {recentDocs.slice(0, 5).map((doc) => (
                  <Link key={doc.path} to={`/content/${doc.path}`} className="docs-page__recent-link">
                    {doc.title}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="docs-page__section">
            {!folderId ? (
              <div className="docs-page__grid">
                {rootFolders.map((f) => (
                  <div key={f.id} className="docs-page__card docs-page__card--folder" data-folder={getFolderSlug(f.name) || undefined}>
                    <button
                      type="button"
                      className="docs-page__card-link"
                      onClick={() => setFolder(f.id)}
                    >
                      <div className="docs-page__card-header">
                        <h3 className="docs-page__card-title">
                          <Icon name="folder" className="docs-page__card-folder-icon" aria-hidden />
                          {f.name}
                        </h3>
                        <span className="docs-page__card-badge docs-page__card-badge--folder">Pasta</span>
                      </div>
                      <p className="docs-page__card-preview">
                        {(f._count?.documents ?? 0) + (f._count?.children ?? 0) > 0
                          ? `${(f._count?.documents ?? 0) + (f._count?.children ?? 0)} item(ns)`
                          : 'Nenhum documento'}
                      </p>
                      <span className="docs-page__card-meta">Documentos</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : hasChildFolders ? (
              <div className="docs-page__grid">
                {childFolders.map((f) => (
                  <div key={f.id} className="docs-page__card docs-page__card--folder" data-folder={getFolderSlug(f.name) || undefined}>
                    <button
                      type="button"
                      className="docs-page__card-link"
                      onClick={() => setFolder(f.id)}
                    >
                      <div className="docs-page__card-header">
                        <h3 className="docs-page__card-title">
                          <Icon name="folder" className="docs-page__card-folder-icon" aria-hidden />
                          {f.name}
                        </h3>
                        <span className="docs-page__card-badge docs-page__card-badge--folder">Pasta</span>
                      </div>
                      <p className="docs-page__card-preview">
                        {(f._count?.documents ?? 0) === 0
                          ? 'Nenhum documento'
                          : `${f._count?.documents ?? 0} documento(s)`}
                      </p>
                      <span className="docs-page__card-meta">Categoria</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="docs-page__grid docs-page__grid--docs">
                {documentsInFolder.map((doc) => (
                  <DocumentCard key={doc.path} document={doc} />
                ))}
                {documentsInFolder.length === 0 && !loading && (
                  <p className="docs-page__empty">Nenhum documento nesta pasta.</p>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
