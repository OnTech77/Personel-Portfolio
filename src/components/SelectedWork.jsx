import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import { projects, profile } from '../data/portfolio.js';

function ProjectArtwork({ type }) {
  if (type === 'resume') {
    return <div className="project-art art-resume" aria-hidden="true"><div className="resume-sheet"><b>CV</b><i /><i /><i /><i /><span>EXPERIENCE&nbsp; · &nbsp;EDUCATION</span><i /><i /><i /></div><div className="resume-badge">01 / PROFILE</div></div>;
  }
  if (type === 'blackjack') {
    return <div className="project-art art-blackjack" aria-hidden="true"><div className="playing-card card-one"><b>A</b><span>♠</span></div><div className="playing-card card-two"><b>K</b><span>♥</span></div><span className="card-caption">YOUR MOVE</span></div>;
  }
  if (type === 'ai') {
    return <div className="project-art art-ai" aria-hidden="true"><div className="ai-orbit orbit-a" /><div className="ai-orbit orbit-b" /><div className="ai-core">AI</div><span className="ai-note note-a">PEOPLE</span><span className="ai-note note-b">WORK</span><span className="ai-note note-c">IDEAS</span></div>;
  }
  if (type === 'portfolio') {
    return <div className="project-art art-portfolio" aria-hidden="true"><div className="browser-mock"><div className="browser-dots">● ● ●</div><div className="browser-layout"><b>G.</b><span /><span /><div /><i /><i /></div></div><span className="portfolio-caption">A PERSONAL SPACE ON THE WEB</span></div>;
  }
  return <div className="project-art art-network" aria-hidden="true"><div className="network-lines" /><span className="network-node node-one">R</span><span className="network-node node-two">S1</span><span className="network-node node-three">S2</span><span className="network-node node-four">PC</span><span className="network-node node-five">PC</span><span className="network-caption">A SMALL NETWORK, MAPPED</span></div>;
}

export default function SelectedWork() {
  return (
    <section className="work section-wrap" id="work">
      <div className="section-heading">
        <div><SectionLabel>A FEW THINGS I’VE MADE</SectionLabel><h2>Selected work<span className="heading-period">.</span></h2></div>
        <p>Real problems, thoughtful details<br className="desktop-only" /> and a little bit of curiosity.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.tone}`} id={`project-${project.number}`} key={project.number}>
            <div className={`project-visual${project.imageFit === 'contain' ? ' project-visual-contain' : ''}`}>
              {project.image ? (
                <>
                  <img className="project-screenshot" src={project.image} alt={project.imageAlt} loading="lazy" />
                  {project.imageNote && <span className="image-privacy-note">{project.imageNote}</span>}
                </>
              ) : (
                <ProjectArtwork type={project.visual} />
              )}
              <span className="project-index">/{project.number}</span>
              <span className="visual-caption">{project.kind.split(' · ')[0]}</span>
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
        <p>A broader collection spans desktop applications, product design, budgeting and network systems.</p>
        <a href={profile.github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
