export async function exportToPdf(articleElement: HTMLElement, filename = 'documento.pdf'): Promise<void> {
  const html2pdf = (await import('html2pdf.js')).default;

  articleElement.classList.add('content-viewer__article--pdf-export');
  const opt = {
    margin: [10, 10, 10, 10] as [number, number, number, number],
    filename: filename.endsWith('.pdf') ? filename : `${filename.replace(/\.md$/i, '')}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
  };
  try {
    await html2pdf().set(opt).from(articleElement).save();
  } finally {
    articleElement.classList.remove('content-viewer__article--pdf-export');
  }
}
