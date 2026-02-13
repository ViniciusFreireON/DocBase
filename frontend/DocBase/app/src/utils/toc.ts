/**
 * Extrai o índice (TOC) do conteúdo Markdown.
 * Usa github-slugger para IDs compatíveis com rehype-slug.
 */

import GithubSlugger from 'github-slugger';

export interface TocItem {
  level: number;
  text: string;
  id: string;
}

export function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  const slugger = new GithubSlugger();

  const regex = /^(#{1,6})\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    const text = rawText
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    const id = slugger.slug(text);

    items.push({ level, text, id });
  }

  return items;
}
