import { ArrowDownRight, ArrowRight, Search } from 'lucide-react';
import HeroBackdrop from './HeroBackdrop.jsx';
import CodeWindow from './CodeWindow.jsx';
import SplitWords from './ui/SplitWords.jsx';
import RotatingText from './ui/RotatingText.jsx';
import CountUp from './ui/CountUp.jsx';
import { openPalette, shortcutLabel, showProject } from '../lib/events.js';
import { projects, skills, toolkit } from '../data/portfolio.js';

const skillCount = new Set([...skills.flatMap((group) => group.detail), ...toolkit]).size;

const stats = [
  { count: projects.length, label: 'Projects built' },
  { count: skillCount, label: 'Skills & tools' },
  { text: 'Summer ’26', label: 'Internship completed' },
  { text: '2027', label: 'Graduating' },
];

export default function Hero() {
  const followPointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--hx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--hy', `${event.clientY - rect.top}px`);
  };

  return (
    <section className="hero" id="home" onPointerMove={followPointer}>
      <HeroBackdrop />
      <div className="container hero-grid">
        <div className="hero-copy">
          <a
            className="hero-badge"
            href="#project-slidecraft"
            onClick={(event) => {
              event.preventDefault();
              showProject('slidecraft');
            }}
          >
            <span className="badge-new">New</span>
            <span className="shiny-text">Slidecraft: my first vibe-coded project</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>

          <h1>
            <SplitWords text="Building useful software," />
            <SplitWords className="gradient-words" text="thoughtfully." start={280} />
          </h1>

          <p className="hero-intro">
            I’m Garv, a Computer Science student at Kingston University London and a full-stack developer who builds{' '}
            <RotatingText words={['clear interfaces', 'REST APIs', 'relational databases', 'AI-powered tools']} />
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a className="button button-ghost" href="#contact">
              Get in touch
            </a>
            <button type="button" className="hero-shortcut" onClick={openPalette}>
              <Search size={15} aria-hidden="true" /> Press <kbd>{shortcutLabel}</kbd> to jump anywhere
            </button>
          </div>

          <dl className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.count ? <CountUp to={stat.count} /> : stat.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <CodeWindow />
      </div>
    </section>
  );
}
