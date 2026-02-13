import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './contexts/SearchContext'
import { NoteMiniPlayerProvider } from './contexts/NoteMiniPlayerContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <NoteMiniPlayerProvider>
          <App />
        </NoteMiniPlayerProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
