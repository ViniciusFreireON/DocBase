import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from './Icon';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  getUploads,
  saveUpload,
  deleteUpload,
  getUploadById,
  type UploadedFile,
} from '../utils/storage';
import './UploadPage.css';

const ACCEPTED_TYPES = ['.md', '.txt', '.pdf'];
const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

type SortBy = 'date' | 'name' | 'type' | 'size';

function getFileExt(file: File): string {
  const parts = file.name.split('.');
  return parts.length > 1 ? '.' + parts.pop()!.toLowerCase() : '';
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1] ?? '');
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function UploadPage() {
  const [uploads, setUploads] = useState<UploadedFile[]>([]);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const [busca, setBusca] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('date');
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadUploads = useCallback(() => {
    setUploads(getUploads());
  }, []);

  useEffect(() => {
    loadUploads();
  }, [loadUploads]);

  const filteredAndSorted = useMemo(() => {
    let list = uploads.filter((u) =>
      u.name.toLowerCase().includes(busca.toLowerCase())
    );
    list = [...list].sort((a, b) => {
      if (sortBy === 'date') return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'type') return a.type.localeCompare(b.type);
      if (sortBy === 'size') return b.size - a.size;
      return 0;
    });
    return list;
  }, [uploads, busca, sortBy]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && inputRef.current) {
      const dt = new DataTransfer();
      files.forEach((f) => dt.items.add(f));
      inputRef.current.files = dt.files;
      setSelectedCount(files.length);
      setErro('');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setSelectedCount(files.length);
    setErro('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro('');
    setSucesso(false);
    const files = inputRef.current?.files ? Array.from(inputRef.current.files) : [];
    if (files.length === 0) {
      setErro('Selecione um ou mais arquivos.');
      return;
    }
    setIsUploading(true);
    let okCount = 0;
    const rejected: string[] = [];
    for (const file of files) {
      const ext = getFileExt(file);
      if (!ACCEPTED_TYPES.includes(ext)) {
        rejected.push(`${file.name}: tipo não suportado`);
        continue;
      }
      if (file.size > MAX_SIZE_BYTES) {
        rejected.push(`${file.name}: excede ${MAX_SIZE_MB} MB`);
        continue;
      }
      try {
        const content =
          ext === '.pdf'
            ? await readFileAsBase64(file)
            : await readFileAsText(file);
        const uploaded: UploadedFile = {
          id: crypto.randomUUID(),
          name: file.name,
          type: ext,
          content,
          size: file.size,
          uploadedAt: new Date().toISOString(),
        };
        saveUpload(uploaded);
        okCount++;
      } catch {
        rejected.push(`${file.name}: erro ao ler`);
      }
    }
    setIsUploading(false);
    loadUploads();
    setSelectedCount(0);
    if (inputRef.current) inputRef.current.value = '';
    if (okCount > 0) setSucesso(true);
    if (rejected.length > 0) {
      setErro(okCount > 0
        ? `${rejected.length} ignorado(s): ${rejected.slice(0, 3).join('; ')}${rejected.length > 3 ? '...' : ''}`
        : rejected.length <= 2
          ? rejected.join('. ')
          : `${rejected.length} arquivos inválidos. Use .md, .txt ou .pdf até ${MAX_SIZE_MB} MB.`);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Excluir este arquivo?')) {
      deleteUpload(id);
      loadUploads();
    }
  };

  const totalSize = useMemo(() =>
    uploads.reduce((acc, u) => acc + u.size, 0),
    [uploads]
  );

  const getTypeBadgeClass = (type: string) => {
    if (type === '.pdf') return 'upload-page__card-badge--pdf';
    if (type === '.md') return 'upload-page__card-badge--md';
    return '';
  };

  return (
    <div className="upload-page app">
      <div className="upload-page__inner">
        <nav className="upload-page__breadcrumb" aria-label="Navegação">
          <Link to="/">Início</Link>
          <span className="upload-page__breadcrumb-sep">›</span>
          <span>Enviar arquivos</span>
        </nav>
        <div className="upload-page__stats">
          <div className="upload-page__stat">
            <span className="upload-page__stat-value">{uploads.length}</span>
            <span className="upload-page__stat-label">Arquivos</span>
          </div>
          <div className="upload-page__stat">
            <span className="upload-page__stat-value">{formatSize(totalSize)}</span>
            <span className="upload-page__stat-label">Total</span>
          </div>
        </div>
        <header className="upload-page__header">
          <h1 className="upload-page__title">Enviar arquivos</h1>
          <p className="upload-page__subtitle">
            Arraste ou selecione arquivos .md, .txt ou .pdf para salvar no navegador.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="upload-page__form">
          <div
            className={`upload-page__drop ${isDragging ? 'upload-page__drop--active' : ''} ${selectedCount > 0 ? 'upload-page__drop--has-files' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".md,.txt,.pdf"
              className="upload-page__input"
              onChange={handleFileSelect}
              multiple
              aria-label="Selecionar arquivos"
            />
            <div className="upload-page__drop-icon">
              <Icon name="cloud_upload" className="upload-page__drop-icon-svg" aria-hidden />
            </div>
            <span className="upload-page__drop-text">
              {isDragging
                ? 'Solte os arquivos aqui'
                : selectedCount > 0
                  ? `${selectedCount} arquivo(s) selecionado(s)`
                  : 'Arraste arquivos ou clique para selecionar'}
            </span>
            <span className="upload-page__drop-hint">
              .md, .txt ou .pdf · até {MAX_SIZE_MB} MB por arquivo
            </span>
          </div>
          {erro && (
            <div className="upload-page__message upload-page__message--erro" role="alert">
              <Icon name="error" className="icon--sm" aria-hidden />
              {erro}
            </div>
          )}
          {sucesso && (
            <div className="upload-page__message upload-page__message--sucesso" role="status">
              <Icon name="check_circle" className="icon--sm" aria-hidden />
              Arquivo(s) enviado(s) com sucesso!
            </div>
          )}
          <button
            type="submit"
            className="upload-page__btn"
            disabled={isUploading || selectedCount === 0}
          >
            {isUploading ? (
              <>
                <span className="upload-page__btn-spinner" aria-hidden />
                Enviando...
              </>
            ) : (
              <>
                <Icon name="upload_file" className="icon--sm" aria-hidden />
                Enviar arquivo{selectedCount !== 1 ? 's' : ''}
              </>
            )}
          </button>
        </form>

        <section className="upload-page__list">
          <div className="upload-page__toolbar">
            <div className="upload-page__toolbar-filters">
              <input
                type="search"
                placeholder="Buscar por nome..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="upload-page__search"
                aria-label="Buscar arquivos"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="upload-page__sort"
                aria-label="Ordenar por"
              >
                <option value="date">Mais recentes</option>
                <option value="name">Nome (A-Z)</option>
                <option value="type">Tipo</option>
                <option value="size">Tamanho</option>
              </select>
            </div>
            <span className="upload-page__count">{uploads.length} arquivos</span>
          </div>
          {filteredAndSorted.length === 0 ? (
            <div className="upload-page__empty">
              <Icon name="folder_open" className="upload-page__empty-icon" aria-hidden />
              <p>
                {uploads.length === 0
                  ? 'Nenhum arquivo enviado ainda.'
                  : 'Nenhum arquivo corresponde à busca.'}
              </p>
            </div>
          ) : (
            <div className="upload-page__grid">
              {filteredAndSorted.map((u) => (
                <article key={u.id} className="upload-page__card">
                  <Link to={`/upload/${u.id}`} className="upload-page__card-link">
                    <div className="upload-page__card-header">
                      <span className="upload-page__card-icon">
                        <Icon
                          name={u.type === '.pdf' ? 'picture_as_pdf' : u.type === '.md' ? 'description' : 'text_snippet'}
                          className="icon--sm"
                          aria-hidden
                        />
                      </span>
                      <h3 className="upload-page__card-title">{u.name}</h3>
                      <span className={`upload-page__card-badge ${getTypeBadgeClass(u.type)}`}>
                        {u.type.toUpperCase().slice(1)}
                      </span>
                    </div>
                    <span className="upload-page__card-meta">
                      {formatSize(u.size)} · {new Date(u.uploadedAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="upload-page__card-del"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(u.id);
                    }}
                    title="Excluir"
                    aria-label="Excluir"
                  >
                    <Icon name="delete" className="icon--sm" aria-hidden />
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export function UploadViewerPage() {
  const { id } = useParams<{ id: string }>();
  const [file, setFile] = useState<UploadedFile | null>(null);

  useEffect(() => {
    if (id) setFile(getUploadById(id));
  }, [id]);

  if (!file) {
    return (
      <div className="upload-page">
        <div className="upload-page__inner">
          <p>Arquivo não encontrado.</p>
          <Link to="/upload">Voltar</Link>
        </div>
      </div>
    );
  }

  const isPdf = file.type === '.pdf';
  const isMd = file.type === '.md';

  return (
    <div className="upload-page upload-page--viewer">
      <div className="upload-page__inner">
        <header className="upload-page__header upload-page__header--row">
          <Link to="/upload" className="upload-page__back"><Icon name="arrow_back" className="icon--sm" aria-hidden /> Voltar</Link>
          <h1 className="upload-page__title">{file.name}</h1>
          <button
            type="button"
            className="upload-page__download"
            onClick={() => {
              let blob: Blob;
              if (file.type === '.pdf') {
                const binary = atob(file.content);
                const bytes = new Uint8Array(binary.length);
                for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
                blob = new Blob([bytes], { type: 'application/pdf' });
              } else {
                blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
              }
              const a = document.createElement('a');
              a.href = URL.createObjectURL(blob);
              a.download = file.name;
              a.click();
              URL.revokeObjectURL(a.href);
            }}
            title="Baixar arquivo"
          >
            <Icon name="download" className="icon--sm" aria-hidden /> Baixar
          </button>
        </header>
        <div className="upload-page__content">
          {isPdf && (
            <iframe
              title={file.name}
              src={`data:application/pdf;base64,${file.content}`}
              className="upload-page__pdf"
            />
          )}
          {isMd && (
            <div className="upload-page__md">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{file.content}</ReactMarkdown>
            </div>
          )}
          {file.type === '.txt' && (
            <pre className="upload-page__txt">{file.content}</pre>
          )}
        </div>
      </div>
    </div>
  );
}
