import { ArrowDown, ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import { profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <SectionLabel>COMPUTER SCIENCE · KINGSTON, LONDON</SectionLabel>
        <h1>Building useful<br />software, <span>thoughtfully.</span></h1>
        <p className="hero-intro">I’m Garv, a full-stack developer in the making. I turn ideas into considered digital experiences—from the first interface to the data and systems behind it.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
          <a className="text-link" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={15} /></a>
        </div>
        <div className="hero-meta"><span><i className="availability-dot" /> OPEN TO OPPORTUNITIES</span><span>2027 GRADUATE</span></div>
      </div>
      <div className="hero-art" role="img" aria-label="Abstract green and cream geometric artwork">
        <div className="art-topline"><span>PORTFOLIO / 2026</span><span>51°24' N&nbsp; 0°18' W</span></div>
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="art-sun" /><div className="art-arch"><div className="arch-inner" /></div>
        <div className="art-card"><Sparkles size={17} /><span>DESIGN<br />MEETS LOGIC</span></div>
        <span className="art-coordinate">G—01</span><span className="art-bottomline">CURIOUS BY NATURE. BUILT WITH INTENTION.</span>
      </div>
      <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  );
}
