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

const folders = ['frontend', 'js'];
for (const folder of folders) {
  const src = path.join(root, '..', folder);
  const dest = path.join(publicDir, folder);
  if (!fs.existsSync(src)) {
    console.warn(`Pasta não encontrada: ${src}`);
    continue;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const srcPath = path.join(src, name);
    const destPath = path.join(dest, name);
    if (fs.statSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  console.log(`Copiado: ${folder}/ → public/${folder}/`);
}
