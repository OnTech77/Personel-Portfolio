import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Search, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';
import useActiveSection from '../hooks/useActiveSection.js';
import { useScrolledPast } from '../hooks/useScrollPosition.js';
import { openPalette, shortcutLabel } from '../lib/events.js';
import { navLinks, profile } from '../data/portfolio.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(24);
  const active = useActiveSection(navLinks.map((link) => link.id));
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="header-inner">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`} onClick={closeMenu}>
          <span className="wordmark-icon">g.</span>
          <span>{profile.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'is-active' : undefined} aria-current={active === link.id ? 'true' : undefined}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="palette-trigger" onClick={openPalette} aria-label={`Open command menu (${shortcutLabel})`}>
            <Search size={16} aria-hidden="true" />
            <span>Search</span>
            <kbd>{shortcutLabel}</kbd>
          </button>
          <ThemeToggle />
          <a className="button button-primary header-cta" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            className="icon-button mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation" hidden={!menuOpen}>
        {navLinks.map((link, index) => (
          <a key={link.id} href={`#${link.id}`} onClick={closeMenu} style={{ '--i': index }}>
            <span>0{index + 1}</span>
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="button button-ghost"
          onClick={() => {
            closeMenu();
            openPalette();
          }}
        >
          <Search size={16} /> Search the site
        </button>
      </nav>
    </header>
  );
}
