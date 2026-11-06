import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import ProjectArtwork from './ProjectArtwork.jsx';
import ProjectGallery from './ProjectGallery.jsx';
import Reveal from './ui/Reveal.jsx';
import SpotlightCard from './ui/SpotlightCard.jsx';
import { SHOW_PROJECT } from '../lib/events.js';
import { profile, projectCategories, projects } from '../data/portfolio.js';

const FILTERS = ['All', ...projectCategories];
const countFor = (filter) => (filter === 'All' ? projects.length : projects.filter((project) => project.category === filter).length);

function ProjectCard({ project }) {
  const { slug, number, title, kind, date, description, highlights, stack, image, imageAlt, imageFit, visual, gallery, isNew, links } = project;

  return (
    <SpotlightCard className={`project-card${gallery ? ' has-gallery' : ''}`} id={`project-${slug}`}>
      <div className={`project-visual${imageFit === 'contain' ? ' is-contained' : ''}`}>
        {gallery ? (
          <ProjectGallery title={title} images={gallery} />
        ) : image ? (
          <img src={image} alt={imageAlt} loading="lazy" />
        ) : (
          <ProjectArtwork type={visual} />
        )}
        <span className="project-index">/{number}</span>
        {isNew && <span className="project-new">New</span>}
      </div>
      <div className="project-info">
        <span className="project-kind">{kind}</span>
        <h3>{title}</h3>
        {date && <span className="project-date">{date}</span>}
        <p>{description}</p>
        {highlights && (
          <ul className="project-highlights">
            {highlights.map((item) => (
              <li key={item}><Check size={16} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        )}
        <div className="tag-row">{stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {links && (
          <div className="project-links">
            {links.code && (
              <a href={links.code} target="_blank" rel="noreferrer" aria-label={`${title} code on GitHub`}>
                View code <ArrowUpRight size={16} />
              </a>
            )}
            {links.live && (
              <a href={links.live} target="_blank" rel="noreferrer" aria-label={`${title} live site`}>
                Live site <ExternalLink size={15} />
              </a>
            )}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}

export default function SelectedWork() {
  const [filter, setFilter] = useState('All');
  const [pending, setPending] = useState(null);
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  // Other parts of the page can ask to show a project; clear the filter first so it exists.
  useEffect(() => {
    const onShow = (event) => {
      setFilter('All');
      setPending(event.detail);
    };
    window.addEventListener(SHOW_PROJECT, onShow);
    return () => window.removeEventListener(SHOW_PROJECT, onShow);
  }, []);

  useEffect(() => {
    if (!pending) return undefined;
    const card = document.getElementById(`project-${pending}`);
    setPending(null);
    if (!card) return undefined;
    card.scrollIntoView({ block: 'center' });
    history.replaceState(null, '', `#project-${pending}`);
    card.classList.add('is-highlighted');
    const timer = setTimeout(() => card.classList.remove('is-highlighted'), 2000);
    return () => clearTimeout(timer);
  }, [pending, filter]);

  return (
    <section className="section work" id="work">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <SectionLabel>A few things I’ve made</SectionLabel>
            <h2>Selected work.</h2>
          </div>
          <p>Real problems, thoughtful details and a little bit of curiosity, from internship software to my first vibe-coded app.</p>
        </Reveal>

        <div className="filter-bar" role="group" aria-label="Filter projects by category">
          {FILTERS.map((item) => (
            <button type="button" key={item} className="filter-button" aria-pressed={filter === item} onClick={() => setFilter(item)}>
              {item}
              <span>{countFor(item)}</span>
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>

        <div className="project-grid">
          {visible.map((project, index) => (
            <Reveal key={project.slug} className={`project-cell${project.featured ? ' is-featured' : ''}`} delay={(index % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="work-note">
          <span className="note-star" aria-hidden="true">✳</span>
          <p>More experiments, coursework and side projects live on GitHub.</p>
          <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
