import { ArrowDownRight } from 'lucide-react';
import SectionLabel from './SectionLabel.jsx';

export default function About() {
  return (
    <section className="about section-wrap" id="about">
      <div className="about-left">
        <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
        <h2>Curious about how<br />things <span>work.</span></h2>
        <div className="about-stamp"><span>KEEP<br />MAKING<br />THINGS</span><ArrowDownRight size={19} /></div>
      </div>
      <div className="about-right">
        <p className="about-lead">I’m studying Computer Science at Kingston University London, where I’ve grown from learning the fundamentals into building complete, database-driven applications.</p>
        <p>That journey has taken me through Java and object-oriented design, relational database modelling and modern web development. I enjoy seeing the whole picture: how a clear interface, a thoughtful API and a well-shaped data model come together to make something genuinely useful.</p>
        <p>During my summer internship with CSE Connect, I brought that approach into a collaborative product team—working on FacilityHub, learning from code reviews and shaping features alongside a Product Owner.</p>
        <div className="timeline">
          <div className="timeline-line" />
          <div className="timeline-item"><span className="timeline-year">SUMMER 2026</span><div><h3>Full-stack Developer Intern</h3><p>CSE Connect · Kingston University</p></div></div>
          <div className="timeline-item"><span className="timeline-year">2024 — 2027</span><div><h3>BSc (Hons) Computer Science</h3><p>Kingston University London</p></div></div>
          <div className="timeline-item"><span className="timeline-year">UP NEXT</span><div><h3>Individual Project · CI6600</h3><p>Exploring a practical final-year challenge</p></div></div>
        </div>
      </div>
    </section>
  );
}
