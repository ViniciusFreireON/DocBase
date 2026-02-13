import { useState, useCallback, useEffect, useMemo } from 'react';
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

type SortBy = 'date' | 'name' | 'type' | 'size';

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
    if (files.length > 0) {
      const input = document.querySelector('.upload-page__input') as HTMLInputElement;
      if (input) {
        const dt = new DataTransfer();
        files.forEach((f) => dt.items.add(f));
        input.files = dt.files;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro('');
    setSucesso(false);
    const input = (e.target as HTMLFormElement).querySelector('input[type="file"]') as HTMLInputElement;
    const files = input?.files ? Array.from(input.files) : [];
    if (files.length === 0) {
      setErro('Selecione um ou mais arquivos.');
      return;
    }
    let okCount = 0;
    for (const file of files) {
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!ACCEPTED_TYPES.includes(ext)) continue;
      if (file.size > MAX_SIZE_MB * 1024 * 1024) continue;
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
        /* skip */
      }
    }
    loadUploads();
    if (okCount > 0) setSucesso(true);
    if (okCount < files.length) {
      setErro(okCount > 0
        ? `${files.length - okCount} arquivo(s) ignorado(s) (tipo ou tamanho inválido).`
        : 'Nenhum arquivo válido. Use .md, .txt ou .pdf até 5 MB.');
    }
    if (input) input.value = '';
  };

  const handleDelete = (id: string) => {
    if (confirm('Excluir este arquivo?')) {
      deleteUpload(id);
      loadUploads();
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-page__inner">
        <nav className="upload-page__breadcrumb" aria-label="Navegação">
          <Link to="/">Início</Link>
          <span className="upload-page__breadcrumb-sep">›</span>
          <span>Enviar arquivos</span>
        </nav>
        <header className="upload-page__header">
          <h1 className="upload-page__title">Enviar arquivos</h1>
          <p className="upload-page__subtitle">
            Envie arquivos .md, .txt ou .pdf para salvar na plataforma.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="upload-page__form">
          <div
            className={`upload-page__drop ${isDragging ? 'upload-page__drop--active' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".md,.txt,.pdf"
              className="upload-page__input"
              onChange={() => setErro('')}
              multiple
            />
            <span className="upload-page__drop-text">
              {isDragging ? 'Solte os arquivos aqui' : 'Arraste arquivos aqui ou clique para selecionar'}
            </span>
            <span className="upload-page__drop-hint">.md, .txt ou .pdf (até {MAX_SIZE_MB} MB cada)</span>
          </div>
          {erro && <p className="upload-page__erro">{erro}</p>}
          {sucesso && <p className="upload-page__sucesso">Arquivo enviado com sucesso!</p>}
          <button type="submit" className="upload-page__btn">
            Salvar arquivo
          </button>
        </form>

        <section className="upload-page__list">
          <div className="upload-page__list-header">
            <h2 className="upload-page__list-title">Meus arquivos ({uploads.length})</h2>
            <div className="upload-page__list-controls">
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
          </div>
          {filteredAndSorted.length === 0 ? (
            <p className="upload-page__empty">
              {uploads.length === 0
                ? 'Nenhum arquivo enviado ainda.'
                : 'Nenhum arquivo corresponde à busca.'}
            </p>
          ) : (
            <ul className="upload-page__items">
              {filteredAndSorted.map((u) => (
                <li key={u.id} className="upload-page__item">
                  <Link to={`/upload/${u.id}`} className="upload-page__item-link">
                    <span className="upload-page__item-name">{u.name}</span>
                    <span className="upload-page__item-meta">
                      {u.type} · {(u.size / 1024).toFixed(1)} KB
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="upload-page__item-del"
                    onClick={() => handleDelete(u.id)}
                    aria-label="Excluir"
                  >
                    <Icon name="close" className="icon--sm" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>
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
