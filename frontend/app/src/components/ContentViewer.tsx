import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import type { Components } from 'react-markdown';
import { Header } from './Header';
import { Drawer } from './Drawer';
import { extractToc } from '../utils/toc';
import { useSearch } from '../contexts/SearchContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import { documents } from '../data/documents';
import { exportToPdf } from '../utils/exportPdf';
import './ContentViewer.css';

function SectionHeading({
  level,
  id,
  children,
  onCopyAll,
  onCopyParagraphs,
  isDropdownOpen,
  onDropdownToggle,
}: {
  level: 1 | 2 | 3;
  id?: string;
  children: React.ReactNode;
  onCopyAll: () => void;
  onCopyParagraphs: () => void;
  isDropdownOpen: boolean;
  onDropdownToggle: () => void;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3';

  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        onDropdownToggle();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen, onDropdownToggle]);

  const handleCopyAll = () => {
    onCopyAll();
    onDropdownToggle();
  };

  const handleCopyParagraphs = () => {
    onCopyParagraphs();
    onDropdownToggle();
  };

  return (
    <div ref={wrapperRef} className="content-viewer__section" data-heading-level={level}>
      <HeadingTag id={id} className="content-viewer__section-heading">
        {children}
      </HeadingTag>
      <div className="content-viewer__section-copy-wrapper">
        <button
          type="button"
          className="content-viewer__section-copy"
          onClick={onDropdownToggle}
          aria-label="Copiar"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="content-viewer__section-copy-dropdown" role="menu">
            <button type="button" role="menuitem" onClick={handleCopyAll}>
              Copiar tudo
            </button>
            <button type="button" role="menuitem" onClick={handleCopyParagraphs}>
              Copiar parágrafos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function downloadFile(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/markdown; charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function ContentViewer() {
  const { '*': path } = useParams<{ '*': string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [exportingPdf, setExportingPdf] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);
  const [openCopySectionId, setOpenCopySectionId] = useState<string | null>(null);
  const [indexOpen, setIndexOpen] = useState(false);

  const { addViewed } = useRecentlyViewed(documents);
  const { open: openSearch } = useSearch();
  const filename = path ? path.split('/').pop() || 'documento.md' : 'documento.md';

  const toc = useMemo(() => (content ? extractToc(content) : []), [content]);
  const tocIds = useMemo(() => toc.map((t) => t.id), [toc]);
  const activeSectionId = useActiveSection(tocIds);
  const [collapsedTocIds, setCollapsedTocIds] = useState<Set<string>>(new Set());

  const tocSections = useMemo(() => {
    const sections: { id: string; level: number; text: string; children: typeof toc }[] = [];
    let current: { id: string; level: number; text: string; children: typeof toc } | null = null;
    for (const item of toc) {
      if (item.level === 1) {
        current = { id: item.id, level: item.level, text: item.text, children: [] };
        sections.push(current);
      } else if (current) {
        current.children.push(item);
      }
    }
    return sections;
  }, [toc]);

  const toggleTocSection = useCallback((id: string) => {
    setCollapsedTocIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleDownload = useCallback(() => {
    if (content) downloadFile(content, filename);
  }, [content, filename]);

  const handleShare = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url).then(() => {
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 1500);
    });
  }, []);

  const handleCopyAll = useCallback(() => {
    if (content) {
      navigator.clipboard?.writeText(content);
    }
  }, [content]);

  const handleCopyParagraphs = useCallback(() => {
    const article = document.querySelector('.content-viewer__article');
    if (article) {
      const paragraphs = article.querySelectorAll('p');
      const text = Array.from(paragraphs)
        .map((p) => p.textContent?.trim())
        .filter(Boolean)
        .join('\n\n');
      if (text) navigator.clipboard?.writeText(text);
    }
  }, []);

  const handleExportPdf = useCallback(async () => {
    const article = document.querySelector('.content-viewer__article');
    if (article instanceof HTMLElement) {
      setExportingPdf(true);
      try {
        await exportToPdf(article, filename);
      } finally {
        setExportingPdf(false);
      }
    }
  }, [filename]);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIndexOpen(false);
  }, []);

  const toggleCopyDropdown = useCallback((id: string | null) => {
    setOpenCopySectionId((prev) => (prev === id ? null : id));
  }, []);

  const markdownComponents = useMemo<Components>(
    () => ({
      h1: ({ node, children, ...props }) => {
        const id = (props as { id?: string }).id;
        return (
          <SectionHeading
            level={1}
            id={id}
            onCopyAll={handleCopyAll}
            onCopyParagraphs={handleCopyParagraphs}
            isDropdownOpen={openCopySectionId === id}
            onDropdownToggle={() => toggleCopyDropdown(id ?? null)}
          >
            {children}
          </SectionHeading>
        );
      },
      h2: ({ node, children, ...props }) => {
        const id = (props as { id?: string }).id;
        return (
          <SectionHeading
            level={2}
            id={id}
            onCopyAll={handleCopyAll}
            onCopyParagraphs={handleCopyParagraphs}
            isDropdownOpen={openCopySectionId === id}
            onDropdownToggle={() => toggleCopyDropdown(id ?? null)}
          >
            {children}
          </SectionHeading>
        );
      },
      h3: ({ node, children, ...props }) => {
        const id = (props as { id?: string }).id;
        return (
          <SectionHeading
            level={3}
            id={id}
            onCopyAll={handleCopyAll}
            onCopyParagraphs={handleCopyParagraphs}
            isDropdownOpen={openCopySectionId === id}
            onDropdownToggle={() => toggleCopyDropdown(id ?? null)}
          >
            {children}
          </SectionHeading>
        );
      },
    }),
    [handleCopyAll, handleCopyParagraphs, openCopySectionId, toggleCopyDropdown]
  );

  useEffect(() => {
    if (path) addViewed(path);
  }, [path, addViewed]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate]);

  useEffect(() => {
    if (!path) {
      setError('Caminho não informado.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const url = `/${encodeURI(path)}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Arquivo não encontrado');
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setError('Não foi possível carregar o conteúdo.');
        setLoading(false);
      });
  }, [path]);

  const tocNav = (
    <nav className="content-viewer__index-nav" aria-label="Índice do documento">
      {tocSections.length > 0
        ? tocSections.map((section) => {
            const isCollapsed = collapsedTocIds.has(section.id);
            return (
              <div key={section.id} className="content-viewer__toc-section">
                <div className="content-viewer__toc-row">
                  {section.children.length > 0 && (
                    <button
                      type="button"
                      className="content-viewer__toc-chevron"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTocSection(section.id);
                      }}
                      aria-label={isCollapsed ? 'Expandir' : 'Recolher'}
                    >
                      {isCollapsed ? '▶' : '▼'}
                    </button>
                  )}
                  <button
                    type="button"
                    className={`content-viewer__index-link content-viewer__index-link--h1 ${section.id === activeSectionId ? 'content-viewer__index-link--active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.text}
                  </button>
                </div>
                {!isCollapsed &&
                  section.children.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`content-viewer__index-link content-viewer__index-link--h${item.level} ${item.id === activeSectionId ? 'content-viewer__index-link--active' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.text}
                    </button>
                  ))}
              </div>
            );
          })
        : toc.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`content-viewer__index-link content-viewer__index-link--h${item.level} ${item.id === activeSectionId ? 'content-viewer__index-link--active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.text}
            </button>
          ))}
    </nav>
  );

  return (
    <div className={`content-viewer ${content && !loading && toc.length > 0 ? 'content-viewer--has-index' : ''}`}>
      {content && !loading && toc.length > 0 && (
        <>
          <button
            type="button"
            className="content-viewer__hamburger"
            onClick={() => setIndexOpen(true)}
            aria-label="Abrir índice"
          >
            <span className="content-viewer__hamburger-line" />
            <span className="content-viewer__hamburger-line" />
            <span className="content-viewer__hamburger-line" />
          </button>
          <Drawer isOpen={indexOpen} onClose={() => setIndexOpen(false)} title="Índice do documento">
            {tocNav}
          </Drawer>
        </>
      )}
      <main className="content-viewer__main">
        <div className="content-viewer__body">
          <div className="content-viewer__content-column">
            <Header />
            <header className="content-viewer__toolbar">
              <div className="content-viewer__toolbar-left">
                <button
                  type="button"
                  className="content-viewer__back"
                  onClick={() => navigate('/')}
                  aria-label="Voltar"
                >
                  <span className="content-viewer__back-icon">←</span>
                  Voltar
                </button>
                <span className="content-viewer__filename" title={filename}>
                  {filename}
                </span>
              </div>
              <div className="content-viewer__toolbar-actions">
                <div
                  className="content-viewer__search-bar"
                  onClick={openSearch}
                  onKeyDown={(e) => e.key === 'Enter' && openSearch()}
                  role="button"
                  tabIndex={0}
                  aria-label="Buscar documentos (⌘K ou /)"
                >
                  <span className="content-viewer__search-icon">⌘</span>
                  <span className="content-viewer__search-placeholder">Buscar</span>
                  <span className="content-viewer__search-shortcut">/</span>
                </div>
                {content && (
                  <div className="content-viewer__toolbar-btns">
                    <button
                      type="button"
                      className="content-viewer__btn content-viewer__share"
                      onClick={handleShare}
                      aria-label="Compartilhar link"
                      title="Copiar link"
                    >
                      {shareFeedback ? '✓ Copiado' : '⎘ Compartilhar'}
                    </button>
                    <button
                      type="button"
                      className="content-viewer__btn content-viewer__pdf"
                      onClick={handleExportPdf}
                      disabled={exportingPdf}
                      aria-label="Exportar PDF"
                      title="Exportar como PDF"
                    >
                      {exportingPdf ? '… PDF' : 'PDF'}
                    </button>
                    <button
                      type="button"
                      className="content-viewer__download"
                      onClick={handleDownload}
                      aria-label="Baixar arquivo"
                      title="Baixar arquivo"
                    >
                      <span className="content-viewer__download-icon">↓</span>
                      Baixar
                    </button>
                  </div>
                )}
              </div>
            </header>

            {loading && (
              <div className="content-viewer__loading">
                <div className="content-viewer__loading-spinner" aria-hidden />
                <p>Carregando documento...</p>
              </div>
            )}

            {error && (
              <div className="content-viewer__error">
                <span className="content-viewer__error-icon" aria-hidden>⚠</span>
                <p>{error}</p>
                <button type="button" className="content-viewer__error-btn" onClick={() => navigate('/')}>
                  Voltar ao início
                </button>
              </div>
            )}

            {content && !loading && (
              <div className="content-viewer__card">
                <article className="content-viewer__article">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSlug]}
                  components={markdownComponents}
                >
                  {content}
                </ReactMarkdown>
                </article>
              </div>
            )}
          </div>

          {content && !loading && toc.length > 0 && (
            <aside className="content-viewer__index content-viewer__index--desktop">
              <div className="content-viewer__index-header">
                <span className="content-viewer__index-title">Índice</span>
              </div>
              {tocNav}
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}
