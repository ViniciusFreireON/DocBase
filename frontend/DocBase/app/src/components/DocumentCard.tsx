import { Link } from 'react-router-dom';
import type { DocumentItem, DocumentCategory } from '../types/document';
import { CATEGORY_LABELS } from '../types/document';
import './DocumentCard.css';

interface DocumentCardProps {
  document: DocumentItem;
}

const categoryClass: Record<DocumentCategory, string> = {
  slide: 'document-card__badge--slide',
  readme: 'document-card__badge--readme',
  relatorio: 'document-card__badge--relatorio',
};

export function DocumentCard({ document: doc }: DocumentCardProps) {
  return (
    <Link
      to={`/content/${doc.path}`}
      className="document-card"
      data-type={doc.type}
      data-category={doc.category}
    >
      <div className="document-card__header">
        <h3 className="document-card__title">{doc.title}</h3>
        <span className={`document-card__badge ${categoryClass[doc.category]}`}>
          {CATEGORY_LABELS[doc.category]}
        </span>
      </div>
      <p className="document-card__desc">{doc.desc}</p>
      <p className="document-card__path">{doc.path}</p>
    </Link>
  );
}
