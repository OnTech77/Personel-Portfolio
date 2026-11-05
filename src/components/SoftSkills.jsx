import { Lightbulb, ListChecks, MessagesSquare, ScanSearch, Shuffle, Users } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import Reveal from './ui/Reveal.jsx';
import SpotlightCard from './ui/SpotlightCard.jsx';
import { softSkills } from '../data/portfolio.js';

const ICONS = [Users, MessagesSquare, Lightbulb, ListChecks, Shuffle, ScanSearch];

export default function SoftSkills() {
  return (
    <section className="section soft-skills" id="strengths">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <SectionLabel>How I work with people</SectionLabel>
            <h2>More than the technical.</h2>
          </div>
          <p>Built through collaboration, coursework and real delivery.</p>
        </Reveal>

        <div className="soft-skills-grid">
          {softSkills.map(({ title, detail, evidence }, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Reveal key={title} delay={(index % 3) * 80} className="skill-cell">
                <SpotlightCard className="soft-skill-card">
                  <span className="skill-icon" aria-hidden="true"><Icon size={22} /></span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                  <ul className="soft-skill-evidence">
                    {evidence.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
