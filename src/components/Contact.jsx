import { ArrowUpRight, Copy, Mail, MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import Reveal from './ui/Reveal.jsx';
import { GithubMark, LinkedinMark } from './BrandIcons.jsx';
import { copyText } from '../lib/events.js';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <div className="contact-beams" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <div className="contact-content">
            <SectionLabel>Have a good idea in mind?</SectionLabel>
            <h2>
              Let’s build something <span className="gradient-text">that matters.</span>
            </h2>
            <p>I’m open to opportunities and always happy to talk software. The quickest way to reach me is email.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                <Mail size={18} /> Email me
              </a>
              <button type="button" className="button button-ghost" onClick={() => copyText(profile.email, 'Email address copied')}>
                <Copy size={17} /> Copy email
              </button>
              <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <GithubMark size={19} />
              </a>
              <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <LinkedinMark size={19} />
              </a>
            </div>
            <div className="contact-bottom">
              <span><MapPin size={16} aria-hidden="true" /> Based in Kingston, London</span>
              <a href="#work">Browse projects again <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
