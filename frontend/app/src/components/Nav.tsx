import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { useSearch } from '../contexts/SearchContext';
import { useAuth } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';
import './Nav.css';

export function Nav() {
  const { open: openSearch } = useSearch();
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const sidebar = useSidebar();
  const toggleMobileOpen = sidebar?.toggleMobileOpen;
  const mobileOpen = sidebar?.mobileOpen ?? false;
  const withSidebar = pathname !== '/login' && user;
  const sidebarCollapsed = sidebar?.collapsed ?? false;

  return (
    <nav
      className={`nav ${withSidebar ? 'nav--with-sidebar' : ''} ${withSidebar && sidebarCollapsed ? 'nav--sidebar-collapsed' : ''} ${withSidebar && mobileOpen ? 'nav--sidebar-mobile-open' : ''}`}
      aria-label="Navegação principal"
    >
      <div className="nav__inner">
        {withSidebar && toggleMobileOpen && (
          <button
            type="button"
            className="nav__menu-toggle"
            onClick={toggleMobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            title={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            <Icon name="menu" className="nav__menu-icon" aria-hidden />
          </button>
        )}
        <Link to="/" className="nav__home" title="Início">
          <Icon name="home" className="nav__home-icon" aria-hidden />
          <span>Início</span>
        </Link>

        <button
          type="button"
          className="nav__search"
          onClick={openSearch}
          onKeyDown={(e) => e.key === 'Enter' && openSearch()}
          aria-label="Buscar (⌘K ou /)"
        >
          <Icon name="search" className="nav__search-icon" aria-hidden />
          <span className="nav__search-placeholder">Buscar...</span>
          <span className="nav__search-shortcut">/</span>
        </button>

        <div className="nav__profile">
          {user ? (
            <button
              type="button"
              className="nav__avatar"
              onClick={() => logout()}
              title={`Sair (${user.email})`}
              aria-label="Sair"
            >
              <span className="nav__avatar-img" aria-hidden>
                {user.email.charAt(0).toUpperCase()}
              </span>
            </button>
          ) : (
            <Link to="/login" className="nav__avatar nav__avatar--guest" title="Entrar">
              <span className="nav__avatar-img nav__avatar-img--guest" aria-hidden>
                <Icon name="person" style={{ fontSize: 18 }} />
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
