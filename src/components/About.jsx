import { useCallback, useRef } from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import Reveal from './ui/Reveal.jsx';
import { useScrollFrame } from '../hooks/useScrollPosition.js';
import { timeline } from '../data/portfolio.js';

/** A vertical timeline whose sky line fills in as it scrolls past the middle of the screen. */
function Timeline() {
  const ref = useRef(null);
  const onScroll = useCallback(() => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const fill = Math.min(Math.max((window.innerHeight * 0.6 - rect.top) / rect.height, 0), 1);
    element.style.setProperty('--fill', fill.toFixed(3));
  }, []);
  useScrollFrame(onScroll);

  return (
    <ol className="timeline" ref={ref}>
      {timeline.map((item, index) => (
        <Reveal as="li" className="timeline-item" key={item.title} delay={index * 90}>
          <span className="timeline-dot" aria-hidden="true" />
          <span className="timeline-period">{item.period}</span>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-left">
          <Reveal>
            <SectionLabel>A little about me</SectionLabel>
            <h2 className="about-title">
              Curious about how things <span className="gradient-text">work.</span>
            </h2>
          </Reveal>
          <Reveal className="about-facts" delay={120}>
            <span><MapPin size={18} aria-hidden="true" /> Kingston, London</span>
            <span><GraduationCap size={18} aria-hidden="true" /> BSc Computer Science, 2027</span>
            <span><Sparkles size={18} aria-hidden="true" /> Exploring AI-assisted development</span>
          </Reveal>
        </div>

        <div className="about-right">
          <Reveal>
            <p className="about-lead">
              I’m studying Computer Science at Kingston University London, where I’ve grown from learning the fundamentals into building complete, database-driven applications.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              That journey has taken me through Java and object-oriented design, relational database modelling and modern web development. I enjoy seeing the whole picture: how a clear interface, a thoughtful API and a well-shaped data model come together to make something genuinely useful.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              During my summer internship with CSE Connect, I brought that approach into a collaborative product team, working on FacilityHub, learning from code reviews and shaping features alongside a Product Owner. More recently I tried vibe coding for the first time and built Slidecraft with an AI coding assistant.
            </p>
          </Reveal>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
