import JSZip from 'jszip';
import type { DocumentItem } from '../types/document';

export async function downloadAllDocuments(documents: DocumentItem[]): Promise<void> {
  const zip = new JSZip();

  const fetchPromises = documents.map(async (doc) => {
    try {
      const url = `/${encodeURI(doc.path)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Falha ao buscar ${doc.path}`);
      const text = await res.text();
      zip.file(doc.path, text);
    } catch {
      // Ignora erros individuais
    }
  });

  await Promise.all(fetchPromises);

  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'documentos-slides.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
