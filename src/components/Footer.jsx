import { Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

function GithubMark() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.7 2.32 3.7 1.66.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.23-5.07-5.48 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.04-1.14 3.04-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.2-5.08 5.48.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>;
}

function LinkedinMark() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.73H4.96V9.16h2.97v9.57ZM6.44 7.85a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.88h-2.97v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H9.47V9.16h2.85v1.31h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.56 1.98 3.56 4.55v5.25Z" /></svg>;
}

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="wordmark" href="#home"><span className="wordmark-icon">g.</span><span>{profile.name}</span></a>
      <span>DESIGNED & BUILT WITH CURIOSITY · 2026</span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubMark /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinMark /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
      </div>
    </footer>
  );
}
