import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import { projects, profile } from '../data/portfolio.js';

export default function SelectedWork() {
  return (
    <section className="work section-wrap" id="work">
      <div className="section-heading">
        <div><SectionLabel>A FEW THINGS I’VE MADE</SectionLabel><h2>Selected work<span className="heading-period">.</span></h2></div>
        <p>Real problems, thoughtful details<br className="desktop-only" /> and a little bit of curiosity.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.tone}`} key={project.number}>
            <div className="project-visual">
              <span className="project-index">/{project.number}</span>
              <span className="project-mark">{project.mark}</span>
              <span className="visual-caption">{project.kind.split(' · ')[0]}</span>
              <ArrowUpRight className="project-arrow" size={19} />
            </div>
            <div className="project-info">
              <span className="project-kind">{project.kind}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="work-note">
        <span className="note-star">✳</span>
        <p>Also explored: AI at work, expense tracking with Power Apps, network topologies and more.</p>
        <a href={profile.github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
