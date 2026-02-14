import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { ContentViewer } from './components/ContentViewer';
import { DocsPage } from './components/DocsPage';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { UploadPage, UploadViewerPage } from './components/UploadPage';
import { NotesPage, NoteEditorPage } from './components/NotesPage';
import { NoteMiniPlayer } from './components/NoteMiniPlayer';
import { Sidebar } from './components/Sidebar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Nav } from './components/Nav';
import './App.css';

function AppLayout() {
  return (
    <>
      <NoteMiniPlayer />
      <Sidebar />
      <main className="main-with-sidebar">
        <Outlet />
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/upload/:id" element={<UploadViewerPage />} />
        <Route path="/notas" element={<NotesPage />} />
        <Route path="/notas/:id" element={<NoteEditorPage />} />
        <Route path="/content/*" element={<ContentViewer />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
