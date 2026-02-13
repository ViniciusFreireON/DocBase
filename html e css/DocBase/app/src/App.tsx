import { useState, useMemo, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import type { DocumentType, DocumentCategory } from './types/document';
import { documents } from './data/documents';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { Section } from './components/Section';
import { HomeIndex } from './components/HomeIndex';
import { ContentViewer } from './components/ContentViewer';
import { Drawer } from './components/Drawer';
import { useSearch } from './contexts/SearchContext';
import { downloadAllDocuments } from './utils/downloadAll';
import { useRecentlyViewed } from './hooks/useRecentlyViewed';
import './App.css';

type TypeFilter = DocumentType | 'all';
type CategoryFilter = DocumentCategory | 'all';

function Home() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [downloading, setDownloading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openSearch } = useSearch();
  const { recentDocs } = useRecentlyViewed(documents);

  const htmlCssDocs = useMemo(
    () => documents.filter((d) => d.type === 'html-css'),
    []
  );
  const jsDocs = useMemo(
    () => documents.filter((d) => d.type === 'js'),
    []
  );

  const handleDownloadAll = useCallback(async () => {
    setDownloading(true);
    try {
      await downloadAllDocuments(documents);
    } finally {
      setDownloading(false);
    }
  }, []);

  const totalDocs = documents.length;
  const htmlCssCount = documents.filter((d) => d.type === 'html-css').length;
  const jsCount = documents.filter((d) => d.type === 'js').length;

  return (
    <div className="app">
      <button
        type="button"
        className="app__hamburger"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir índice"
      >
        <span className="app__hamburger-line" />
        <span className="app__hamburger-line" />
        <span className="app__hamburger-line" />
      </button>
      <Drawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} title="Índice">
        <HomeIndex
          documents={documents}
          typeFilter={typeFilter}
          categoryFilter={categoryFilter}
          onNavigate={() => setMenuOpen(false)}
        />
      </Drawer>
      <div className="app__body">
        <div className="app__content">
          <Header />
          <div className="app__toolbar">
            <div className="app__toolbar-filters">
              <Filters
                typeFilter={typeFilter}
                categoryFilter={categoryFilter}
                onTypeChange={setTypeFilter}
                onCategoryChange={setCategoryFilter}
              />
            </div>
            <div className="app__toolbar-actions">
              <div
                className="app__search-bar"
                onClick={openSearch}
                onKeyDown={(e) => e.key === 'Enter' && openSearch()}
                role="button"
                tabIndex={0}
                aria-label="Buscar documentos (⌘K ou /)"
              >
                <span className="app__search-icon">⌘</span>
                <span className="app__search-placeholder">Buscar documentos</span>
                <span className="app__search-shortcut">/</span>
              </div>
              <span className="app__doc-count" title={`${htmlCssCount} HTML/CSS · ${jsCount} JS`}>
                {totalDocs} docs
              </span>
              <button
                type="button"
                className="app__download-all"
                onClick={handleDownloadAll}
                disabled={downloading}
                title="Baixar todos os arquivos em ZIP"
              >
                {downloading ? 'Gerando...' : '↓ Baixar todos'}
              </button>
            </div>
          </div>
          {recentDocs.length > 0 && (
            <section className="app__recent">
              <h2 className="app__recent-title">Vistos recentemente</h2>
              <div className="app__recent-grid">
                {recentDocs.map((doc) => (
                  <Link key={doc.path} to={`/content/${doc.path}`} className="app__recent-link">
                    {doc.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
          <Section
            type="html-css"
            documents={htmlCssDocs}
            typeFilter={typeFilter}
            categoryFilter={categoryFilter}
          />
          <Section
            type="js"
            documents={jsDocs}
            typeFilter={typeFilter}
            categoryFilter={categoryFilter}
          />
        </div>
        <div className="app__index-desktop">
          <HomeIndex
            documents={documents}
            typeFilter={typeFilter}
            categoryFilter={categoryFilter}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content/*" element={<ContentViewer />} />
    </Routes>
  );
}

export default App;
