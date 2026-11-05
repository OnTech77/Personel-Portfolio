const image = (name) => `${import.meta.env.BASE_URL}images/${name}`;

const repo = (name) => `https://github.com/OnTech77/${name}`;

export const projectCategories = ['Web & full-stack', 'Java', 'Design & apps', 'Research & networks'];

export const projects = [
  {
    slug: 'slidecraft', title: 'Slidecraft', kind: 'FULL-STACK · AI · FIRST VIBE-CODED PROJECT', category: 'Web & full-stack',
    featured: true, isNew: true, date: 'October 2026',
    description: 'My first try at vibe coding: I built Slidecraft by describing features to an AI coding assistant, then testing and refining what it produced. It turns Markdown into slide decks with a live preview, five themes and a full-screen presenter, and can polish the wording or write speaker notes with the OpenAI API or a local Ollama model.',
    highlights: [
      'Slides update live as you type, with keyboard, click and swipe presenting',
      'AI edits for a whole deck or one slide, shown as a before and after to accept or undo',
      'PDF, HTML, Markdown and JSON export, with PDFs rendered by headless Chrome',
      'Sanitised uploads, rate-limited AI requests and security headers on the API',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'OpenAI API', 'Ollama', 'Puppeteer'], visual: 'slides',
    links: { code: repo('slidecraft') },
  },
  {
    slug: 'facilityhub', title: 'FacilityHub', kind: 'FULL-STACK · INTERNSHIP PROJECT', category: 'Web & full-stack', featured: true,
    description: 'A facilities-maintenance platform that brings clients, dispatchers and tradespeople into one workflow. The team built ticket and job flows backed by role-aware screens, REST APIs and a relational database.',
    stack: ['React', 'Node.js', 'Express', 'MySQL'], image: image('facilityhub-tickets.png'), imageAlt: 'FacilityHub maintenance ticket dashboard',
  },
  {
    slug: 'travel-jabs', title: 'Travel Jabs', kind: 'FULL-STACK · UNIVERSITY PROJECT', category: 'Web & full-stack',
    description: 'A patient-journey application for managing clinic patients, appointments and vaccination records. React screens connect to an Express REST API and MySQL database, with authentication and role-aware views.',
    stack: ['React', 'Express', 'MySQL', 'Authentication'], image: image('travel-jabs-patients.png'), imageAlt: 'Travel Jabs patient list screen with sample demonstration records',
    links: { code: repo('TravelJabs-Backend') },
  },
  {
    slug: 'student-expense-tracker', title: 'Student Expense Tracker', kind: 'POWER APPS · GROUP 17', category: 'Design & apps',
    description: 'A student-focused budgeting app for setting category budgets, logging income and expenses, reviewing recent transactions and understanding spending through visual summaries. Designed in Figma and developed in Power Apps with OneDrive Excel as its data source.',
    stack: ['Power Apps', 'Excel', 'Figma', 'Budgeting'], image: image('student-expense-tracker.png'), imageAlt: 'Student Expense Tracker budget screen with category budgets and a spending chart', imageFit: 'contain',
  },
  {
    slug: 'fitness-tracker', title: 'Fitness & Diet Tracker', kind: 'PRODUCT DESIGN · FIGMA', category: 'Design & apps',
    description: 'A mobile fitness concept shaped around workout plans and at-a-glance activity goals. Wireframes and linked screens explore navigation, workout details and progress summaries.',
    stack: ['Figma', 'User flows', 'Prototyping'], image: image('fitness-tracker-concept.png'), imageAlt: 'Fitness tracker mobile interface concept', imageFit: 'contain',
  },
  {
    slug: 'user-profile-builder', title: 'User Profile Builder', kind: 'JAVA · DESKTOP APPLICATION', category: 'Java',
    description: 'A Java Swing application for creating and managing user profile details. The interface separates titles, names and email information and supports displaying, editing and removing entries.',
    stack: ['Java', 'Swing', 'Object-oriented design'], image: image('user-profile-builder.png'), imageAlt: 'Java Swing User Profile Builder interface',
  },
  {
    slug: 'java-cv-builder', title: 'Java CV Builder', kind: 'JAVA · DESKTOP APPLICATION', category: 'Java',
    description: 'A Java Swing desktop app for organising a CV through separate user, contact and preview views. The interface supports maintaining names, titles and email details, then reviewing a custom CV.',
    stack: ['Java', 'Swing', 'OOP', 'Interface design'], image: image('java-cv-builder.png'), imageAlt: 'Java Swing CV Builder showing user, contact and custom CV preview sections', imageFit: 'contain',
  },
  {
    slug: 'java-blackjack', title: 'Java Blackjack', kind: 'JAVA · INTERACTIVE GAME', category: 'Java',
    description: 'A console-based Blackjack game structured around reusable Card, Deck and Player classes. It models hands and turns, applies game rules and reports outcomes through an interactive play loop.',
    stack: ['Java', 'Classes & objects', 'Collections', 'Game logic'], image: image('java-blackjack.png'), imageAlt: 'Java Blackjack project source code and console output', imageFit: 'contain',
    links: { code: repo('BlackJackGame') },
  },
  {
    slug: 'ai-in-the-workplace', title: 'AI in the Workplace', kind: 'RESEARCH · GROUP PROJECT', category: 'Research & networks',
    description: 'A team research and presentation project exploring how artificial intelligence is being used in workplace settings, combining research, coordinated delivery and clear communication.',
    stack: ['AI research', 'Teamwork', 'Presentation'], visual: 'ai',
  },
  {
    slug: 'personal-portfolio', title: 'Personal Portfolio', kind: 'WEB DEVELOPMENT · THIS SITE', category: 'Web & full-stack',
    description: 'This portfolio: a React and Vite site with a midnight and sky design system, light and dark themes, a command menu, filterable projects and motion that respects reduced-motion settings. It deploys to GitHub Pages on every push.',
    stack: ['React', 'Vite', 'CSS', 'GitHub Actions'], visual: 'portfolio',
    links: { code: repo('Personel-Portfolio'), live: 'https://ontech77.github.io/Personel-Portfolio/' },
  },
  {
    slug: 'network-simulations', title: 'Network simulations', kind: 'CISCO PACKET TRACER · COURSEWORK', category: 'Research & networks',
    description: 'Designed and tested a four-subnet network in Cisco Packet Tracer, configuring DHCP pools, DNS and connectivity between devices. Extended the topology with a smart-home IoT gateway and thermostat automation, then set up an email server and verified message exchange between laptops.',
    stack: ['Packet Tracer', 'IPv4 subnetting', 'DHCP & DNS', 'IoT', 'Email services'], image: image('cisco-packet-tracer.png'), imageAlt: 'Cisco Packet Tracer topology with routers, servers, client devices and smart-home IoT equipment', imageFit: 'contain',
  },
].map((project, index) => ({ ...project, number: String(index + 1).padStart(2, '0') }));

export const skills = [
  { title: 'Frontend', detail: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive interfaces'] },
  { title: 'Backend & APIs', detail: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'API integration'] },
  { title: 'Databases', detail: ['MySQL', 'SQL', 'Oracle SQL', 'Relational design', 'ERDs'] },
  { title: 'How I work', detail: ['Java & OOP', 'Git & GitHub', 'Agile sprints', 'Code review', 'Figma', 'Postman'] },
];

export const softSkills = [
  {
    title: 'Team collaboration',
    detail: 'Worked in university project groups and an internship development team, coordinating shared tasks and contributing to sprint goals.',
    evidence: ['Group projects', 'Agile sprints', 'Code reviews'],
  },
  {
    title: 'Communication',
    detail: 'Shared progress in Product Owner discussions, explained implementation choices with teammates, and presented project work clearly.',
    evidence: ['Product Owner meetings', 'Presentations', 'Technical discussions'],
  },
  {
    title: 'Problem solving',
    detail: 'Investigated integration and data issues across interfaces, APIs and databases, then refined solutions through testing and debugging.',
    evidence: ['API integration', 'Debugging', 'Network testing'],
  },
  {
    title: 'Planning & organisation',
    detail: 'Turned project requirements into manageable tasks and kept implementation, testing and documentation aligned with delivery needs.',
    evidence: ['Sprint planning', 'Project documentation', 'Delivery'],
  },
  {
    title: 'Adaptability',
    detail: 'Moved between frontend, backend and database work during the internship, learning the existing codebase and adjusting to team feedback.',
    evidence: ['Full-stack work', 'Feedback', 'Continuous learning'],
  },
  {
    title: 'Attention to detail',
    detail: 'Checked behaviour against requirements, verified network configurations and used reviews and testing to catch issues before delivery.',
    evidence: ['Requirement checks', 'Configuration testing', 'Quality focus'],
  },
];

export const toolkit = ['Python', 'Oracle APEX', 'Power Apps', 'OneDrive Excel', 'Cisco Packet Tracer'];

export const experience = {
  role: 'Full-Stack Developer Intern',
  organisation: 'CSE Connect · Kingston University',
  period: 'Summer 2026',
  summary: 'Worked with a development team on FacilityHub, a facilities-maintenance platform, contributing across its React frontend, Express APIs and MySQL data model.',
  contributions: [
    'Designed and refined relational data structures, including ticket, job, user and tradesperson skill relationships.',
    'Built and connected REST API endpoints for users, tickets, jobs and ticket skills, with filtering and shared controller patterns.',
    'Worked on authentication, role-aware views and frontend-to-backend integration.',
    'Contributed through sprint planning, product-owner discussions, code reviews, API testing, debugging and refactoring.',
  ],
};

export const timeline = [
  { period: 'Up next', title: 'Individual Project · CI6600', detail: 'Exploring a practical final-year challenge' },
  { period: 'October 2026', title: 'Built Slidecraft', detail: 'My first vibe-coded project, made with an AI coding assistant' },
  { period: 'Summer 2026', title: 'Full-stack Developer Intern', detail: 'CSE Connect · Kingston University' },
  { period: '2024 — 2027', title: 'BSc (Hons) Computer Science', detail: 'Kingston University London' },
];

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const profile = {
  name: 'Garv Nagar',
  email: 'garvnagar0101@gmail.com',
  github: 'https://github.com/OnTech77',
  linkedin: 'https://linkedin.com/in/garv-nagar-900878347',
};
