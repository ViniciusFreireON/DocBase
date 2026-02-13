import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { DocumentItem, DocumentType, DocumentCategory } from '../types/document';
import { DOCUMENT_TYPE_LABELS, CATEGORY_LABELS } from '../types/document';
import './HomeIndex.css';

interface HomeIndexProps {
  documents: DocumentItem[];
  typeFilter: DocumentType | 'all';
  categoryFilter: DocumentCategory | 'all';
  onNavigate?: () => void;
}

const CATEGORY_ORDER: DocumentCategory[] = ['slide', 'readme', 'relatorio'];

export function HomeIndex({ documents, typeFilter, categoryFilter, onNavigate }: HomeIndexProps) {
  const [collapsedTypes, setCollapsedTypes] = useState<Set<string>>(new Set());
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());

  const toggleType = (type: string) => {
    setCollapsedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  const toggleCategory = (key: string) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filtered = documents.filter(
    (d) =>
      (typeFilter === 'all' || d.type === typeFilter) &&
      (categoryFilter === 'all' || d.category === categoryFilter)
  );

  const htmlCss = filtered.filter((d) => d.type === 'html-css');
  const js = filtered.filter((d) => d.type === 'js');

  const renderTypeGroup = (items: DocumentItem[], type: DocumentType) => {
    if (items.length === 0) return null;

    const byCategory = CATEGORY_ORDER.map((cat) => ({
      category: cat,
      docs: items.filter((d) => d.category === cat),
    })).filter((g) => g.docs.length > 0);

    const typeCollapsed = collapsedTypes.has(type);
    return (
      <div key={type} className="home-index__type-group">
        <button
          type="button"
          className="home-index__type-title"
          data-type={type}
          onClick={() => toggleType(type)}
          aria-expanded={!typeCollapsed}
        >
          <span className="home-index__type-chevron">{typeCollapsed ? '▶' : '▼'}</span>
          {DOCUMENT_TYPE_LABELS[type]}
        </button>
        {!typeCollapsed && (
          <div className="home-index__categories">
            {byCategory.map(({ category, docs: docsInCat }) => {
              const catKey = `${type}-${category}`;
              const catCollapsed = collapsedCategories.has(catKey);
              return (
                <div key={catKey} className="home-index__category">
                  <button
                    type="button"
                    className={`home-index__category-title home-index__category-title--${category}`}
                    onClick={() => toggleCategory(catKey)}
                    aria-expanded={!catCollapsed}
                  >
                    <span className="home-index__cat-chevron">{catCollapsed ? '▶' : '▼'}</span>
                    {CATEGORY_LABELS[category]}
                  </button>
                  {!catCollapsed && (
                    <ul className="home-index__list">
                      {docsInCat.map((doc) => (
                        <li key={doc.path} className="home-index__item">
                          <Link
                            to={`/content/${doc.path}`}
                            className={`home-index__link home-index__link--${doc.category}`}
                            onClick={onNavigate}
                          >
                            {doc.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="home-index">
      <div className="home-index__header">
        <span className="home-index__title">Índice</span>
      </div>
      <nav className="home-index__nav" aria-label="Índice de documentos">
        {filtered.length === 0 ? (
          <p className="home-index__empty">Nenhum documento com esses filtros.</p>
        ) : (
          <>
            {renderTypeGroup(htmlCss, 'html-css')}
            {renderTypeGroup(js, 'js')}
          </>
        )}
      </nav>
    </aside>
  );
}
