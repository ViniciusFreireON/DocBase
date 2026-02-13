import path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Servir .md das pastas "html e css" e "js" da raiz do repo em dev
    {
      name: 'serve-docs',
      configureServer(server) {
        const serveDocs = (req: any, res: any, next: () => void) => {
          const raw = (req.url ?? '').split('?')[0]
          const decoded = decodeURIComponent(raw)
          const isHtmlCss = decoded.startsWith('/html%20e%20css/') || decoded.startsWith('/html e css/')
          const isJs = decoded.startsWith('/js/')
          if (!isHtmlCss && !isJs) return next()
          const rel = decoded.slice(1)
          const file = path.resolve(server.config.root, '..', rel)
          try {
            if (fs.existsSync(file) && fs.statSync(file).isFile()) {
              res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
              res.setHeader('Cache-Control', 'no-cache')
              fs.createReadStream(file).pipe(res)
              return
            }
          } catch {
            /* ignore */
          }
          next()
        }
        // Inserir no início para rodar ANTES do fallback do SPA (index.html)
        server.middlewares.stack.unshift({ route: '', handle: serveDocs })
      },
    },
  ],
  server: {
    fs: { allow: ['..'] },
  },
})
