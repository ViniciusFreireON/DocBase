import type { DocumentType, DocumentCategory } from '../types/document';
import { CATEGORY_LABELS } from '../types/document';
import './Filters.css';

interface FiltersProps {
  typeFilter: DocumentType | 'all';
  categoryFilter: DocumentCategory | 'all';
  onTypeChange: (value: DocumentType | 'all') => void;
  onCategoryChange: (value: DocumentCategory | 'all') => void;
}

export function Filters({
  typeFilter,
  categoryFilter,
  onTypeChange,
  onCategoryChange,
}: FiltersProps) {
  return (
    <div className="filters">
      <div className="filters__group">
        <label htmlFor="filter-type" className="filters__label">Tipo</label>
        <select
          id="filter-type"
          className="filters__select"
          value={typeFilter}
          onChange={(e) => onTypeChange(e.target.value as DocumentType | 'all')}
        >
          <option value="all">Todos</option>
          <option value="html-css">Front-end</option>
          <option value="js">JavaScript</option>
        </select>
      </div>
      <div className="filters__group">
        <label htmlFor="filter-category" className="filters__label">Categoria</label>
        <select
          id="filter-category"
          className="filters__select"
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value as DocumentCategory | 'all')}
        >
          <option value="all">Todos</option>
          <option value="slide">Slides</option>
          <option value="readme">README</option>
          <option value="relatorio">{CATEGORY_LABELS.relatorio}</option>
        </select>
      </div>
    </div>
  );
}
