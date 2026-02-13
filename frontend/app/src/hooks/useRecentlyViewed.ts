import { useState, useEffect, useCallback } from 'react';
import type { DocumentItem } from '../types/document';

const STORAGE_KEY = 'correcaoslide-recently-viewed';
const MAX_ITEMS = 8;

export function useRecentlyViewed(documents: DocumentItem[]) {
  const [recentPaths, setRecentPaths] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as string[];
        setRecentPaths(Array.isArray(parsed) ? parsed.slice(0, MAX_ITEMS) : []);
      }
    } catch {
      setRecentPaths([]);
    }
  }, []);

  const addViewed = useCallback((path: string) => {
    setRecentPaths((prev) => {
      const next = [path, ...prev.filter((p) => p !== path)].slice(0, MAX_ITEMS);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const recentDocs = recentPaths
    .map((p) => documents.find((d) => d.path === p || d.path.endsWith(p)))
    .filter((d): d is DocumentItem => d != null);

  return { recentDocs, addViewed };
}
