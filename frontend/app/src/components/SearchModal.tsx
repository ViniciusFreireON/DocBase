import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';
import type { DocumentItem } from '../types/document';
import { DOCUMENT_TYPE_LABELS, CATEGORY_LABELS } from '../types/document';
import './SearchModal.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: DocumentItem[];
}

export function SearchModal({ isOpen, onClose, documents }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = query.trim()
    ? documents.filter(
        (d) =>
          d.title.toLowerCase().includes(query.toLowerCase()) ||
          d.desc.toLowerCase().includes(query.toLowerCase())
      )
    : documents;

  const selectDoc = useCallback(
    (doc: DocumentItem) => {
      navigate(`/content/${doc.path}`);
      onClose();
      setQuery('');
      setSelected(0);
    },
    [navigate, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${selected}"]`)?.scrollIntoView({
      block: 'nearest',
    });
  }, [selected, results.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, results.length - 1));
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
        return;
      }
      if (e.key === 'Enter' && results[selected]) {
        e.preventDefault();
        selectDoc(results[selected]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, results, selected, onClose, selectDoc]);

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="search-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Buscar documentos"
      >
        <div className="search-modal__input-wrap">
          <Icon name="search" className="search-modal__icon" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            className="search-modal__input"
            placeholder="Buscar por título ou descrição..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div ref={listRef} className="search-modal__results">
          {results.length === 0 ? (
            <p className="search-modal__empty">Nenhum documento encontrado.</p>
          ) : (
            results.map((doc, i) => (
              <button
                key={doc.path}
                type="button"
                className={`search-modal__item ${i === selected ? 'search-modal__item--selected' : ''}`}
                data-index={i}
                onClick={() => selectDoc(doc)}
                onMouseEnter={() => setSelected(i)}
              >
                <span className="search-modal__item-title">{doc.title}</span>
                <span className={`search-modal__item-badge search-modal__item-badge--${doc.category}`}>
                  {CATEGORY_LABELS[doc.category]}
                </span>
                <span className="search-modal__item-type">{DOCUMENT_TYPE_LABELS[doc.type]}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
