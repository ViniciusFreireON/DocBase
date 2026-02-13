import path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Servir .md das pastas "frontend" e "js" da raiz do repo em dev
    {
      name: 'serve-docs',
      configureServer(server) {
        const serveDocs = (req: any, res: any, next: () => void) => {
          const raw = (req.url ?? '').split('?')[0]
          const decoded = decodeURIComponent(raw)
          const isFrontend = decoded.startsWith('/frontend/')
          const isJs = decoded.startsWith('/js/')
          if (!isFrontend && !isJs) return next()
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
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
