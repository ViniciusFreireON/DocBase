# Deploy na Vercel

## Passos

1. **Conecte o repositório** no dashboard da Vercel.
2. **Configure o Root Directory**: se o app está em `frontend/app`, defina em *Settings → General → Root Directory* o valor `frontend/app` (ou o caminho correto).
3. A Vercel detecta Vite e usa o `vercel.json` com:
   - `buildCommand`: `npm run build`
   - `outputDirectory`: `dist`
   - `rewrites`: SPA (todas as rotas → `/index.html`)

## Build

O script `scripts/copy-docs.js` copia as pastas `documentos/` (html-css, js) e `notas/` para `public/` antes do build, para que fiquem disponíveis na raiz do deploy.
