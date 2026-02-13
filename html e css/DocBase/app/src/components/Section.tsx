import type { DocumentType, DocumentCategory } from '../types/document';
import type { DocumentItem } from '../types/document';
import { DOCUMENT_TYPE_LABELS } from '../types/document';
import { DocumentCard } from './DocumentCard';
import './Section.css';

interface SectionProps {
  type: DocumentType;
  documents: DocumentItem[];
  typeFilter: DocumentType | 'all';
  categoryFilter: DocumentCategory | 'all';
}

export function Section({ type, documents, typeFilter, categoryFilter }: SectionProps) {
  const visible = documents.filter(
    (d) =>
      (categoryFilter === 'all' || d.category === categoryFilter)
  );
  const hidden = typeFilter !== 'all' && typeFilter !== type;

  return (
    <section
      className="section"
      data-type={type}
      style={{ display: hidden ? 'none' : undefined }}
    >
      <h2 className="section__title">
        <span className="section__dot" data-type={type} />
        {DOCUMENT_TYPE_LABELS[type]}
      </h2>
      <div className="section__grid">
        {visible.length === 0 ? (
          <p className="section__empty">Nenhum documento encontrado com esses filtros.</p>
        ) : (
          visible.map((doc) => <DocumentCard key={doc.path} document={doc} />)
        )}
      </div>
    </section>
  );
}
