import { ArrowRight, Database, Server, ShieldCheck, Users } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import Reveal from './ui/Reveal.jsx';
import SpotlightCard from './ui/SpotlightCard.jsx';
import { showProject } from '../lib/events.js';
import { experience } from '../data/portfolio.js';

const ICONS = [Database, Server, ShieldCheck, Users];

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <SectionLabel>Professional experience</SectionLabel>
            <h2>Learning by building.</h2>
          </div>
          <p>A summer in a real product team, working across the frontend, the API and the database.</p>
        </Reveal>

        <Reveal>
          <SpotlightCard className="experience-card">
            <div className="experience-header">
              <div>
                <span className="experience-period">{experience.period}</span>
                <h3>{experience.role}</h3>
                <p className="experience-organisation">{experience.organisation}</p>
              </div>
              <span className="status-pill"><i aria-hidden="true" /> Completed</span>
            </div>
            <p className="experience-summary">{experience.summary}</p>
            <ul className="contribution-grid">
              {experience.contributions.map((item, index) => {
                const Icon = ICONS[index % ICONS.length];
                return (
                  <li key={item}>
                    <span className="contribution-icon" aria-hidden="true"><Icon size={20} /></span>
                    {item}
                  </li>
                );
              })}
            </ul>
            <a
              className="button button-ghost experience-link"
              href="#project-facilityhub"
              onClick={(event) => {
                event.preventDefault();
                showProject('facilityhub');
              }}
            >
              See the FacilityHub project <ArrowRight size={17} />
            </a>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
