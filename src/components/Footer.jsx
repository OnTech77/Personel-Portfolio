import { Mail } from 'lucide-react';
import { GithubMark, LinkedinMark } from './BrandIcons.jsx';
import { openPalette, shortcutLabel } from '../lib/events.js';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="wordmark" href="#home">
          <span className="wordmark-icon">g.</span>
          <span>{profile.name}</span>
        </a>
        <p>Designed and built with curiosity · {new Date().getFullYear()}</p>
        <div className="footer-links">
          <button type="button" className="footer-shortcut" onClick={openPalette}>
            <kbd>{shortcutLabel}</kbd> Menu
          </button>
          <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubMark />
          </a>
          <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinMark />
          </a>
          <a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
