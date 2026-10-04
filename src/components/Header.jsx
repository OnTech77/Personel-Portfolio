import { ArrowUpRight, Menu } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Header() {
  function toggleNavigation() {
    document.querySelector('.mobile-nav')?.classList.toggle('open');
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
        <span className="wordmark-icon">g.</span>
        <span>{profile.name}</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="header-cta" href={`mailto:${profile.email}`}>
        Let’s talk <ArrowUpRight size={15} />
      </a>
      <button className="mobile-menu" aria-label="Toggle navigation menu" aria-expanded="false" onClick={toggleNavigation}>
        <Menu size={21} />
      </button>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href={`mailto:${profile.email}`}>Contact</a>
      </nav>
    </header>
  );
}
