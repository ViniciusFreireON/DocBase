import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './NoteMarkdownPreview.css';

interface NoteMarkdownPreviewProps {
  content: string;
  className?: string;
}

export function NoteMarkdownPreview({ content, className = '' }: NoteMarkdownPreviewProps) {
  return (
    <div className={`note-md-preview ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || '(vazio)'}</ReactMarkdown>
    </div>
  );
}
