import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { SearchProvider } from './contexts/SearchContext'
import { SidebarProvider } from './contexts/SidebarContext'
import { NoteMiniPlayerProvider } from './contexts/NoteMiniPlayerContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SidebarProvider>
        <SearchProvider>
          <NoteMiniPlayerProvider>
            <App />
          </NoteMiniPlayerProvider>
        </SearchProvider>
        </SidebarProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
