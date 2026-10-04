import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-card">
        <div className="contact-top"><SectionLabel>HAVE A GOOD ONE IN MIND?</SectionLabel><span className="contact-symbol">↗</span></div>
        <h2>Let’s make<br /><span>something matter.</span></h2>
        <a className="contact-link" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={19} /></a>
        <div className="contact-bottom"><span>BASED IN KINGSTON, LONDON</span><span>ALWAYS HAPPY TO TALK SOFTWARE</span></div>
      </div>
    </section>
  );
}
