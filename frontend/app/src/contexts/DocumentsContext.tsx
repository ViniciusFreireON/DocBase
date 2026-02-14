import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { fetchDocuments, apiDocumentToItem } from '../api/documents';
import type { DocumentItem } from '../types/document';

interface DocumentsContextValue {
  documents: DocumentItem[];
  loading: boolean;
  refresh: () => Promise<void>;
}

const DocumentsContext = createContext<DocumentsContextValue | null>(null);

export function DocumentsProvider({ children }: { children: React.ReactNode }) {
  const { fetchWithAuth } = useAuth();
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const list = await fetchDocuments(fetchWithAuth);
      setDocuments(list.map(apiDocumentToItem));
    } catch {
      setDocuments([]);
    } finally {
      setLoading(false);
    }
  }, [fetchWithAuth]);

  useEffect(() => {
    setLoading(true);
    load();
  }, [load]);

  const value: DocumentsContextValue = {
    documents,
    loading,
    refresh: load,
  };

  return (
    <DocumentsContext.Provider value={value}>
      {children}
    </DocumentsContext.Provider>
  );
}

export function useDocuments() {
  const ctx = useContext(DocumentsContext);
  if (!ctx) throw new Error('useDocuments must be used within DocumentsProvider');
  return ctx;
}
