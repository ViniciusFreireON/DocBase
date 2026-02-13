import { useCallback } from 'react';
import { Icon } from './Icon';
import './NoteMarkdownToolbar.css';

type FormatType = 'bold' | 'italic' | 'h1' | 'h2' | 'h3' | 'list' | 'link' | 'code' | 'quote';

interface NoteMarkdownToolbarProps {
  value: string;
  onChange: (v: string) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  disabled?: boolean;
}

function insertAtCursor(
  text: string,
  before: string,
  after: string,
  start: number,
  end: number
): { newText: string; newCursor: number } {
  const selected = text.slice(start, end);
  const newText = text.slice(0, start) + before + selected + after + text.slice(end);
  const newCursor = start + before.length + selected.length;
  return { newText, newCursor };
}

export function NoteMarkdownToolbar({
  value,
  onChange,
  textareaRef,
  disabled = false,
}: NoteMarkdownToolbarProps) {
  const applyFormat = useCallback(
    (type: FormatType) => {
      const ta = textareaRef.current;
      if (!ta) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      let before = '';
      let after = '';
      switch (type) {
        case 'bold':
          before = '**';
          after = '**';
          break;
        case 'italic':
          before = '*';
          after = '*';
          break;
        case 'h1':
          before = '\n# ';
          after = '\n';
          break;
        case 'h2':
          before = '\n## ';
          after = '\n';
          break;
        case 'h3':
          before = '\n### ';
          after = '\n';
          break;
        case 'list':
          before = '\n- ';
          after = '\n';
          break;
        case 'link':
          before = '[';
          after = '](url)';
          break;
        case 'code':
          before = '`';
          after = '`';
          break;
        case 'quote':
          before = '\n> ';
          after = '\n';
          break;
      }
      const { newText, newCursor } = insertAtCursor(value, before, after, start, end);
      onChange(newText);
      setTimeout(() => {
        ta.focus();
        ta.setSelectionRange(newCursor, newCursor);
      }, 0);
    },
    [value, onChange, textareaRef]
  );

  return (
    <div className="note-md-toolbar" role="toolbar" aria-label="Formatacao">
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('bold')} disabled={disabled} title="Negrito (**)" aria-label="Negrito">
        <Icon name="format_bold" className="icon--sm" aria-hidden />
      </button>
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('italic')} disabled={disabled} title="Italico (*)" aria-label="Italico">
        <Icon name="format_italic" className="icon--sm" aria-hidden />
      </button>
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('h1')} disabled={disabled} title="Titulo 1" aria-label="Titulo 1">
        <span className="note-md-toolbar__text">H1</span>
      </button>
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('h2')} disabled={disabled} title="Titulo 2" aria-label="Titulo 2">
        <span className="note-md-toolbar__text">H2</span>
      </button>
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('h3')} disabled={disabled} title="Titulo 3" aria-label="Titulo 3">
        <span className="note-md-toolbar__text">H3</span>
      </button>
      <span className="note-md-toolbar__sep" />
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('list')} disabled={disabled} title="Lista" aria-label="Lista">
        <Icon name="format_list_bulleted" className="icon--sm" aria-hidden />
      </button>
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('quote')} disabled={disabled} title="Citacao" aria-label="Citacao">
        <Icon name="format_quote" className="icon--sm" aria-hidden />
      </button>
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('link')} disabled={disabled} title="Link" aria-label="Link">
        <Icon name="link" className="icon--sm" aria-hidden />
      </button>
      <button type="button" className="note-md-toolbar__btn" onClick={() => applyFormat('code')} disabled={disabled} title="Codigo" aria-label="Codigo">
        <Icon name="code" className="icon--sm" aria-hidden />
      </button>
    </div>
  );
}
