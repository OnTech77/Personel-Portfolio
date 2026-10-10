import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import { skills, toolkit } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section className="skills section-wrap" id="skills">
      <div className="section-heading">
        <div><SectionLabel>TOOLS I REACH FOR</SectionLabel><h2>Built across the stack<span className="heading-period">.</span></h2></div>
        <p>Grounded in fundamentals.<br className="desktop-only" /> Always learning what’s next.</p>
      </div>
      <div className="skills-list">
        {skills.map(({ title, detail }, index) => (
          <article className="skill-card" key={title}>
            <div className="skill-card-heading"><span className="skill-num">0{index + 1}</span><ArrowUpRight size={18} /></div>
            <h3>{title}</h3>
            <div className="skill-tags">{detail.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="toolkit"><span>ALSO IN MY TOOLKIT</span><div>{toolkit.map((item) => <span key={item}>{item}</span>)}</div></div>
    </section>
  );
}
