import type { DocumentType, DocumentCategory } from '../types/document';
import type { DocumentItem } from '../types/document';
import { DOCUMENT_TYPE_LABELS, CATEGORY_LABELS } from '../types/document';
import { DocumentCard } from './DocumentCard';
import { Icon } from './Icon';
import './Section.css';

const CATEGORY_ORDER: DocumentCategory[] = ['slide', 'readme', 'relatorio'];

interface SectionProps {
  type: DocumentType;
  documents: DocumentItem[];
  typeFilter: DocumentType | 'all';
  categoryFilter: DocumentCategory | 'all';
}

export function Section({ type, documents, typeFilter, categoryFilter }: SectionProps) {
  const visible = documents.filter(
    (d) => categoryFilter === 'all' || d.category === categoryFilter
  );
  const hidden = typeFilter !== 'all' && typeFilter !== type;

  const byCategory = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    docs: visible.filter((d) => d.category === cat),
  })).filter((g) => g.docs.length > 0);

  return (
    <section
      className="section section--folder"
      data-type={type}
      style={{ display: hidden ? 'none' : undefined }}
    >
      <header className="section__folder-header">
        <Icon name="folder" className="section__folder-icon" aria-hidden />
        <h2 className="section__title">
          <span className="section__dot" data-type={type} />
          {DOCUMENT_TYPE_LABELS[type]}
        </h2>
      </header>
      <div className="section__folder-body">
        {visible.length === 0 ? (
          <p className="section__empty">Nenhum documento encontrado com esses filtros.</p>
        ) : (
          byCategory.map(({ category, docs: docsInCat }) => (
            <div key={category} className="section__category">
              <h3 className="section__category-title" data-category={category}>
                {CATEGORY_LABELS[category]}
              </h3>
              <div className="section__grid">
                {docsInCat.map((doc) => (
                  <DocumentCard key={doc.path} document={doc} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
