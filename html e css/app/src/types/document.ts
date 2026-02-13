export type DocumentType = 'html-css' | 'js';

export type DocumentCategory = 'slide' | 'readme' | 'relatorio';

export interface DocumentItem {
  type: DocumentType;
  category: DocumentCategory;
  title: string;
  desc: string;
  path: string;
}

export const DOCUMENT_TYPE_LABELS: Record<DocumentType, string> = {
  'html-css': 'HTML e CSS',
  'js': 'JavaScript',
};

export const CATEGORY_LABELS: Record<DocumentCategory, string> = {
  slide: 'Slide',
  readme: 'README',
  relatorio: 'Relatório de correção',
};
