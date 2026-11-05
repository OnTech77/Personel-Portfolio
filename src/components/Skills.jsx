import { Database, Monitor, Server, Workflow } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import Reveal from './ui/Reveal.jsx';
import SpotlightCard from './ui/SpotlightCard.jsx';
import Marquee from './ui/Marquee.jsx';
import { skills, toolkit } from '../data/portfolio.js';

const ICONS = [Monitor, Server, Database, Workflow];
const allSkills = [...new Set([...skills.flatMap((group) => group.detail), ...toolkit])];
const half = Math.ceil(allSkills.length / 2);

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <SectionLabel>Tools I reach for</SectionLabel>
            <h2>Built across the stack.</h2>
          </div>
          <p>Grounded in fundamentals. Always learning what’s next.</p>
        </Reveal>
      </div>

      <div className="skills-marquee">
        <Marquee items={allSkills.slice(0, half)} speed={45} />
        <Marquee items={allSkills.slice(half)} speed={50} reverse />
      </div>

      <div className="container">
        <div className="skills-grid">
          {skills.map(({ title, detail }, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Reveal key={title} delay={index * 80} className="skill-cell">
                <SpotlightCard className="skill-card">
                  <div className="skill-card-heading">
                    <span className="skill-icon" aria-hidden="true"><Icon size={22} /></span>
                    <span className="skill-num">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <ul className="tag-row">
                    {detail.map((skill) => <li key={skill}><span>{skill}</span></li>)}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="toolkit">
          <span>Also in my toolkit</span>
          <ul className="tag-row">
            {toolkit.map((item) => <li key={item}><span>{item}</span></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
