import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Cloud, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const headerStyle = {
    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
    color: isDarkMode ? '#E5E7EB' : '#1F2937',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'background-color 0.2s, color 0.2s',
  };

  const navStyle = {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '64px',
  };

  const linkStyle = {
    color: isDarkMode ? '#E5E7EB' : '#1F2937',
    transition: 'color 0.2s',
  };

  const buttonStyle = {
    padding: '8px',
    borderRadius: '8px',
    backgroundColor: isDarkMode ? '#374151' : '#F3F4F6',
    transition: 'background-color 0.2s',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/" style={linkStyle}>
            <Home className="w-6 h-6" />
          </Link>
          <Link to="/weather-captcha" style={linkStyle} aria-label="Météo">
            <Cloud className="w-6 h-6" />
          </Link>
        </div>
        <button
          onClick={toggleDarkMode}
          style={buttonStyle}
          aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
      </nav>
    </header>
  );
}