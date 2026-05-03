import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { Menu, X, Sun, Moon, Award } from 'lucide-react';

export default function Navigation({ onToggleSidebar }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useProgress();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/timeline', label: 'Timeline' },
    { to: '/learn', label: 'Learn' },
    { to: '/quiz', label: 'Quiz' },
    { to: '/glossary', label: 'Glossary' },
    { to: '/faq', label: 'FAQ' },
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
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="theme-toggle" onClick={onToggleSidebar} aria-label="Toggle progress dashboard">
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
