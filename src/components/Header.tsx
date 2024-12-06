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

  const imageSrc = isDarkMode ? "https://cdn.discordapp.com/attachments/1308429892664299560/1314402265829871666/blanc.png?ex=6753a400&is=67525280&hm=f05cc2899f9bb61b58045ce8649a4975f4bc8a9408be229d05319905d27caeb3&" : "https://cdn.discordapp.com/attachments/1308429892664299560/1314398113355796491/confusion-chaos-icon-outline-vector-31105019-removebg-preview.png?ex=6753a022&is=67524ea2&hm=fc4dbfcf3884dc8078fab52700c6be10cbea1b804054365bd6acb0eeb55621f3&";

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
          <Link to="/choas" style={linkStyle} aria-label="Chaos">
            <img src={imageSrc} alt="Chaos Icon" className="w-6 h-6 scale-up" />
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