import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="wordmark" href="#home"><span className="wordmark-icon">g.</span><span>{profile.name}</span></a>
      <span>DESIGNED & BUILT WITH CURIOSITY · 2026</span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
      </div>
    </footer>
  );
}
