import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Sun, Moon, Award, Type, LogIn, LogOut, User } from 'lucide-react';

export default function Navigation({ onToggleSidebar }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme, simpleLanguage, toggleSimpleLanguage } = useProgress();
  const { currentUser, loginWithGoogle, logout } = useAuth();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/timeline', label: 'Timeline' },
    { to: '/learn', label: 'Learn' },
    { to: '/quiz', label: 'Quiz' },
    { to: '/glossary', label: 'Glossary' },
    { to: '/modes', label: 'Modes 🚀' },
    { to: '/chatbot', label: 'ElectoBot' }
  ];

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" aria-label="Election Education Home">
          🗳️ EPE Assistant
        </NavLink>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <button className="theme-toggle" onClick={toggleSimpleLanguage} title={simpleLanguage ? 'Use Standard Language' : 'Use Simple Language'} aria-label="Toggle language complexity">
            <Type size={18} color={simpleLanguage ? 'var(--primary)' : 'currentColor'} />
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <div style={{ width: '1px', height: '24px', background: 'var(--border)', margin: '0 8px' }} />
          
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
                {currentUser.photoURL ? (
                   <img src={currentUser.photoURL} alt="Profile" style={{ width: 24, height: 24, borderRadius: '50%' }} />
                ) : (
                   <User size={16} />
                )}
                <span className="hide-mobile">{currentUser.displayName?.split(' ')[0] || 'User'}</span>
              </span>
              <button className="theme-toggle" onClick={logout} title="Sign Out" aria-label="Sign Out">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={loginWithGoogle} style={{ padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <LogIn size={16} /> Sign In
            </button>
          )}

          <button className="theme-toggle hide-mobile" onClick={onToggleSidebar} aria-label="Toggle progress dashboard">
            <Award size={18} />
          </button>
        </div>
        <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
