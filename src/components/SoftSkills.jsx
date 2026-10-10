import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import { softSkills } from '../data/portfolio.js';

export default function SoftSkills() {
  return (
    <section className="soft-skills section-wrap" id="strengths">
      <div className="section-heading">
        <div><SectionLabel>HOW I WORK WITH PEOPLE</SectionLabel><h2>More than the technical<span className="heading-period">.</span></h2></div>
        <p>Built through collaboration,<br className="desktop-only" /> coursework and real delivery.</p>
      </div>
      <div className="soft-skills-grid">
        {softSkills.map(({ title, detail, evidence }, index) => (
          <article className="soft-skill-card" key={title}>
            <div className="soft-skill-heading"><span className="skill-num">0{index + 1}</span><ArrowUpRight size={18} aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{detail}</p>
            <div className="soft-skill-evidence">{evidence.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
