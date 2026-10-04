import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Sparkles } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01', title: 'FacilityHub', kind: 'FULL-STACK · INDUSTRY INTERNSHIP',
    description: 'A shared workspace for facilities teams to turn incoming maintenance requests into clearly assigned jobs. Built across clients, dispatchers and tradespeople.',
    stack: ['React', 'Node.js', 'Express', 'MySQL'], tone: 'mint', mark: 'FH',
  },
  {
    number: '02', title: 'Travel Jabs', kind: 'FULL-STACK · UNIVERSITY PROJECT',
    description: 'A patient journey application connecting a React interface to a relational database through a REST API, with authentication and role-aware experiences.',
    stack: ['React', 'Express', 'MySQL', 'Auth'], tone: 'lilac', mark: 'TJ',
  },
  {
    number: '03', title: 'Fitness & Diet Tracker', kind: 'PRODUCT DESIGN · COURSEWORK',
    description: 'A Figma concept for making everyday fitness and food tracking feel approachable, with considered screens, user flows and a clear visual hierarchy.',
    stack: ['Figma', 'UX flows', 'Prototyping'], tone: 'peach', mark: '↗',
  },
  {
    number: '04', title: 'Java applications', kind: 'OBJECT-ORIENTED PROGRAMMING',
    description: 'A collection of small desktop and interactive programs—from a CV builder to Blackjack—developed to practise object-oriented design and application logic.',
    stack: ['Java', 'OOP', 'Swing'], tone: 'blue', mark: '{ }',
  },
];

const skills = [
  ['01', 'Interfaces', 'React · JavaScript · HTML · CSS'],
  ['02', 'Application logic', 'Node.js · Express · REST APIs'],
  ['03', 'Data & persistence', 'MySQL · SQL · relational design'],
  ['04', 'Engineering practice', 'Git · Agile · testing · collaboration'],
];

function SectionLabel({ children }) { return <span className="section-label"><span className="label-dot" />{children}</span>; }

function Header() {
  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label="Garv Nagar, home"><span className="wordmark-icon">g.</span><span>Garv Nagar</span></a>
    <nav className="desktop-nav" aria-label="Main navigation">
      <a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a>
    </nav>
    <a className="header-cta" href="mailto:k2427057@kingston.ac.uk">Let’s talk <ArrowUpRight size={15} /></a>
    <button className="mobile-menu" aria-label="Open navigation menu" onClick={() => document.querySelector('.mobile-nav')?.classList.toggle('open')}><Menu size={21} /></button>
    <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="mailto:k2427057@kingston.ac.uk">Contact</a></nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <SectionLabel>COMPUTER SCIENCE · KINGSTON, LONDON</SectionLabel>
      <h1>Building useful<br />software, <span>thoughtfully.</span></h1>
      <p className="hero-intro">I’m Garv, a full-stack developer in the making. I turn ideas into considered digital experiences—from the first interface to the data and systems behind it.</p>
      <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href="mailto:k2427057@kingston.ac.uk">Get in touch <ArrowUpRight size={15} /></a></div>
      <div className="hero-meta"><span><i className="availability-dot" /> OPEN TO OPPORTUNITIES</span><span>2027 GRADUATE</span></div>
    </div>
    <div className="hero-art" aria-label="Abstract green and cream geometric artwork">
      <div className="art-topline"><span>PORTFOLIO / 2026</span><span>51°24' N&nbsp; 0°18' W</span></div>
      <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
      <div className="art-sun" /><div className="art-arch"><div className="arch-inner" /></div>
      <div className="art-card"><Sparkles size={17} /><span>DESIGN<br />MEETS LOGIC</span></div>
      <span className="art-coordinate">G—01</span><span className="art-bottomline">CURIOUS BY NATURE. BUILT WITH INTENTION.</span>
    </div>
    <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
  </section>;
}

function SelectedWork() {
  return <section className="work section-wrap" id="work">
    <div className="section-heading"><div><SectionLabel>A FEW THINGS I’VE MADE</SectionLabel><h2>Selected work<span className="heading-period">.</span></h2></div><p>Real problems, thoughtful details<br className="desktop-only" /> and a little bit of curiosity.</p></div>
    <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}>
      <div className="project-visual"><span className="project-index">/{project.number}</span><span className="project-mark">{project.mark}</span><span className="visual-caption">{project.kind.split(' · ')[0]}</span><ArrowUpRight className="project-arrow" size={19} /></div>
      <div className="project-info"><span className="project-kind">{project.kind}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
    </article>)}</div>
    <div className="work-note"><span className="note-star">✳</span><p>Also explored: AI at work, expense tracking with Power Apps, network topologies and more.</p><a href="https://github.com/OnTech77" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a></div>
  </section>;
}

function About() {
  return <section className="about section-wrap" id="about">
    <div className="about-left"><SectionLabel>A LITTLE ABOUT ME</SectionLabel><h2>Curious about how<br />things <span>work.</span></h2><div className="about-stamp"><span>KEEP<br />MAKING<br />THINGS</span><ArrowDownRight size={19} /></div></div>
    <div className="about-right"><p className="about-lead">I’m studying Computer Science at Kingston University London, where I’ve grown from learning the fundamentals into building complete, database-driven applications.</p><p>That journey has taken me through Java and object-oriented design, relational database modelling and modern web development. I enjoy seeing the whole picture: how a clear interface, a thoughtful API and a well-shaped data model come together to make something genuinely useful.</p><p>During my summer internship with CSE Connect, I brought that approach into a collaborative product team—working on FacilityHub, learning from code reviews and shaping features alongside a Product Owner.</p>
      <div className="timeline"><div className="timeline-line" /><div className="timeline-item"><span className="timeline-year">2026 — NOW</span><div><h3>Full-stack Developer Intern</h3><p>CSE Connect · Kingston University</p></div><span className="timeline-current">●</span></div><div className="timeline-item"><span className="timeline-year">2024 — 2027</span><div><h3>BSc (Hons) Computer Science</h3><p>Kingston University London</p></div></div><div className="timeline-item"><span className="timeline-year">UP NEXT</span><div><h3>Individual Project · CI6600</h3><p>Exploring a practical final-year challenge</p></div></div></div>
    </div>
  </section>;
}

function Skills() {
  return <section className="skills section-wrap" id="skills"><div className="section-heading"><div><SectionLabel>TOOLS I REACH FOR</SectionLabel><h2>Built across the stack<span className="heading-period">.</span></h2></div><p>Grounded in fundamentals.<br className="desktop-only" /> Always learning what’s next.</p></div>
    <div className="skills-list">{skills.map(([num, title, detail]) => <div className="skill-row" key={num}><span className="skill-num">{num}</span><h3>{title}</h3><p>{detail}</p><ArrowUpRight size={17} /></div>)}</div>
    <div className="toolkit"><span>ALSO IN MY TOOLKIT</span><div>{['Java', 'Python', 'Oracle APEX', 'Figma', 'Postman', 'Git & GitHub', 'Power Apps', 'Cisco Packet Tracer'].map(item => <span key={item}>{item}</span>)}</div></div>
  </section>;
}

function Contact() {
  return <section className="contact section-wrap" id="contact"><div className="contact-card"><div className="contact-top"><SectionLabel>HAVE A GOOD ONE IN MIND?</SectionLabel><span className="contact-symbol">↗</span></div><h2>Let’s make<br /><span>something matter.</span></h2><a className="contact-link" href="mailto:k2427057@kingston.ac.uk">k2427057@kingston.ac.uk <ArrowUpRight size={19} /></a><div className="contact-bottom"><span>BASED IN KINGSTON, LONDON</span><span>ALWAYS HAPPY TO TALK SOFTWARE</span></div></div></section>;
}

function Footer() { return <footer className="footer section-wrap"><a className="wordmark" href="#home"><span className="wordmark-icon">g.</span><span>Garv Nagar</span></a><span>DESIGNED & BUILT WITH CURIOSITY · 2026</span><div><a href="https://github.com/OnTech77" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com/in/garv-nagar-900878347" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:k2427057@kingston.ac.uk" aria-label="Email"><Mail size={17} /></a></div></footer>; }

function App() { return <><Header /><main><Hero /><SelectedWork /><About /><Skills /><Contact /></main><Footer /></>; }

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
