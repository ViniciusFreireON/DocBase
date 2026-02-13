-- DocBase - Schema inicial
-- Banco de dados para notas e arquivos enviados

-- Tabela de notas
CREATE TABLE IF NOT EXISTS notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notes_updated_at ON notes (updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_notes_title ON notes (title);

-- Tabela de arquivos enviados (uploads)
CREATE TABLE IF NOT EXISTS uploads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(500) NOT NULL,
  type VARCHAR(20) NOT NULL,
  content TEXT NOT NULL,
  size BIGINT NOT NULL DEFAULT 0,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_uploads_uploaded_at ON uploads (uploaded_at DESC);
CREATE INDEX IF NOT EXISTS idx_uploads_name ON uploads (name);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para notes
DROP TRIGGER IF EXISTS trigger_notes_updated_at ON notes;
CREATE TRIGGER trigger_notes_updated_at
  BEFORE UPDATE ON notes
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();
