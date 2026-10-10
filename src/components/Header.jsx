import { useState } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
        <span className="wordmark-icon">g.</span>
        <span>{profile.name}</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="header-cta" href={`mailto:${profile.email}`}>
        Let’s talk <ArrowUpRight size={15} />
      </a>
      <button className="mobile-menu" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={21} />
      </button>
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href={`mailto:${profile.email}`} onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}
