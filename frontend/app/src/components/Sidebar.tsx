import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getUploads } from '../utils/storage';
import { getNotes } from '../utils/storage';
import { Icon } from './Icon';
import { useAuth } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';
import './Sidebar.css';

export function Sidebar() {
  const { user, logout } = useAuth();
  const sidebarCtx = useSidebar();
  const collapsed = sidebarCtx?.collapsed ?? false;
  const toggleCollapsed = sidebarCtx?.toggleCollapsed ?? (() => {});
  const mobileOpen = sidebarCtx?.mobileOpen ?? false;
  const setMobileOpen = sidebarCtx?.setMobileOpen ?? (() => {});
  const toggleMobileOpen = sidebarCtx?.toggleMobileOpen ?? (() => {});
  const [recentUploads, setRecentUploads] = useState<{ id: string; name: string }[]>([]);
  const [recentNotes, setRecentNotes] = useState<{ id: string; title: string }[]>([]);
  const location = useLocation();

  useEffect(() => {
    setRecentUploads(
      getUploads()
        .slice(0, 3)
        .map((u) => ({ id: u.id, name: u.name }))
    );
    setRecentNotes(
      getNotes()
        .slice(0, 3)
        .map((n) => ({ id: n.id, title: n.title || '(Sem titulo)' }))
    );
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, setMobileOpen]);

  return (
    <>
      <button
        type="button"
        className="sidebar__toggle sidebar__toggle--mobile"
        onClick={toggleMobileOpen}
        aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <aside
        className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''} ${mobileOpen ? 'sidebar--mobile-open' : ''}`}
        aria-label="Navegação rápida"
      >
        <div className="sidebar__inner">
          <div className="sidebar__header">
            <Link to="/" className="sidebar__logo">
              DocBase
            </Link>
            <div className="sidebar__header-actions">
              <button
                type="button"
                className="sidebar__toggle sidebar__toggle--collapse"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleCollapsed();
                }}
                aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
                title={collapsed ? 'Expandir' : 'Recolher'}
              >
                <Icon name={collapsed ? 'chevron_right' : 'chevron_left'} className="sidebar__chevron icon--sm" />
              </button>
            </div>
          </div>

          <nav className="sidebar__nav">
            <ul className="sidebar__list">
              <li>
                <NavLink to="/" className="sidebar__link" end>
                  <Icon name="home" className="sidebar__icon" />
                  {!collapsed && <span>Início</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs" className="sidebar__link">
                  <Icon name="folder" className="sidebar__icon" />
                  {!collapsed && <span>Documentos</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/upload" className="sidebar__link">
                  <Icon name="upload" className="sidebar__icon" />
                  {!collapsed && <span>Enviar arquivos</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/notas" className="sidebar__link">
                  <Icon name="edit_note" className="sidebar__icon" />
                  {!collapsed && <span>Notas</span>}
                </NavLink>
              </li>
            </ul>

            {(recentUploads.length > 0 || recentNotes.length > 0) && !collapsed && (
              <div className="sidebar__quick">
                <span className="sidebar__quick-title">Acesso rápido</span>
                {recentUploads.length > 0 && (
                  <div className="sidebar__quick-group">
                    <span className="sidebar__quick-label">Arquivos</span>
                    <ul className="sidebar__quick-list">
                      {recentUploads.map((u) => (
                        <li key={u.id}>
                          <Link to={`/upload/${u.id}`} className="sidebar__quick-link">
                            {u.name.length > 20 ? u.name.slice(0, 20) + '…' : u.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {recentNotes.length > 0 && (
                  <div className="sidebar__quick-group">
                    <span className="sidebar__quick-label">Notas</span>
                    <ul className="sidebar__quick-list">
                      {recentNotes.map((n) => (
                        <li key={n.id}>
                          <Link to={`/notas/${n.id}`} className="sidebar__quick-link">
                            {(n.title.length > 20 ? n.title.slice(0, 20) + '…' : n.title)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </nav>

          <div className="sidebar__footer">
            {user ? (
              <button
                type="button"
                className="sidebar__link sidebar__link--muted"
                onClick={() => logout()}
                title="Sair"
              >
                <Icon name="logout" className="sidebar__icon" />
                {!collapsed && <span>Sair</span>}
              </button>
            ) : null}
          </div>
        </div>

        {mobileOpen && (
          <div
            className="sidebar__overlay"
            onClick={() => setMobileOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setMobileOpen(false);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Fechar menu (clique fora ou pressione Esc)"
          />
        )}
      </aside>
    </>
  );
}
