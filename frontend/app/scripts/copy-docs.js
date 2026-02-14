/**
 * Copia os arquivos .md para public antes do build.
 * Necessário para o deploy na Vercel.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');

// Pastas: documentos (html-css, js) e notas
const folders = ['documentos', 'notas'];
for (const folder of folders) {
  const src = path.join(root, '..', folder);
  const dest = path.join(publicDir, folder);
  if (!fs.existsSync(src)) {
    console.warn(`Pasta não encontrada: ${src}`);
    continue;
  }
  fs.cpSync(src, dest, { recursive: true });
  console.log(`Copiado: ${folder}/ → public/${folder}/`);
}
