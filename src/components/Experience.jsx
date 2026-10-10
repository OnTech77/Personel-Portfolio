import SectionLabel from './SectionLabel.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section className="experience section-wrap" id="experience">
      <div className="experience-heading">
        <SectionLabel>PROFESSIONAL EXPERIENCE</SectionLabel>
        <h2>Learning by building<span className="heading-period">.</span></h2>
      </div>
      <article className="experience-card">
        <div className="experience-meta"><span>{experience.period}</span><span>COMPLETED</span></div>
        <div className="experience-main">
          <h3>{experience.role}</h3>
          <p className="experience-organisation">{experience.organisation}</p>
          <p className="experience-summary">{experience.summary}</p>
          <ul>{experience.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <a className="experience-project-link" href="#project-01">FEATURED PROJECT <span>FACILITYHUB ↗</span></a>
      </article>
    </section>
  );
}
