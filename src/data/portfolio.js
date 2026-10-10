const image = (name) => `${import.meta.env.BASE_URL}images/${name}`;

export const projects = [
  {
    number: '01', title: 'FacilityHub', kind: 'FULL-STACK · INTERNSHIP PROJECT',
    description: 'A facilities-maintenance platform that brings clients, dispatchers and tradespeople into one workflow. The team built ticket and job flows backed by role-aware screens, REST APIs and a relational database.',
    stack: ['React', 'Node.js', 'Express', 'MySQL'], tone: 'mint', image: image('facilityhub-tickets.png'), imageAlt: 'FacilityHub maintenance ticket dashboard',
  },
  {
    number: '02', title: 'Travel Jabs', kind: 'FULL-STACK · UNIVERSITY PROJECT',
    description: 'A patient-journey application for managing clinic patients, appointments and vaccination records. React screens connect to an Express REST API and MySQL database, with authentication and role-aware views.',
    stack: ['React', 'Express', 'MySQL', 'Authentication'], tone: 'lilac', image: image('travel-jabs-patients.png'), imageAlt: 'Travel Jabs patient list screen with sample demonstration records',
  },
  {
    number: '03', title: 'Student Expense Tracker', kind: 'POWER APPS · GROUP 17',
    description: 'A student-focused budgeting app for setting category budgets, logging income and expenses, reviewing recent transactions and understanding spending through visual summaries. Designed in Figma and developed in Power Apps with OneDrive Excel as its data source.',
    stack: ['Power Apps', 'Excel', 'Figma', 'Budgeting'], tone: 'blue', image: image('student-expense-tracker.png'), imageAlt: 'Student Expense Tracker budget screen with category budgets and a spending chart', imageFit: 'contain',
  },
  {
    number: '04', title: 'Fitness & Diet Tracker', kind: 'PRODUCT DESIGN · FIGMA',
    description: 'A mobile fitness concept shaped around workout plans and at-a-glance activity goals. Wireframes and linked screens explore navigation, workout details and progress summaries.',
    stack: ['Figma', 'User flows', 'Prototyping'], tone: 'peach', image: image('fitness-tracker-concept.png'), imageAlt: 'Fitness tracker mobile interface concept', imageFit: 'contain',
  },
  {
    number: '05', title: 'User Profile Builder', kind: 'JAVA · DESKTOP APPLICATION',
    description: 'A Java Swing application for creating and managing user profile details. The interface separates titles, names and email information and supports displaying, editing and removing entries.',
    stack: ['Java', 'Swing', 'Object-oriented design'], tone: 'mint', image: image('user-profile-builder.png'), imageAlt: 'Java Swing User Profile Builder interface',
  },
  {
    number: '06', title: 'Java CV Builder', kind: 'JAVA · DESKTOP APPLICATION',
    description: 'A Java Swing desktop app for organising a CV through separate user, contact and preview views. The interface supports maintaining names, titles and email details, then reviewing a custom CV.',
    stack: ['Java', 'Swing', 'OOP', 'Interface design'], tone: 'lilac', image: image('java-cv-builder.png'), imageAlt: 'Java Swing CV Builder showing user, contact and custom CV preview sections', imageFit: 'contain',
  },
  {
    number: '07', title: 'Java Blackjack', kind: 'JAVA · INTERACTIVE GAME',
    description: 'A console-based Blackjack game structured around reusable Card, Deck and Player classes. It models hands and turns, applies game rules and reports outcomes through an interactive play loop.',
    stack: ['Java', 'Classes & objects', 'Collections', 'Game logic'], tone: 'peach', image: image('java-blackjack.png'), imageAlt: 'Java Blackjack project source code and console output', imageFit: 'contain',
  },
  {
    number: '08', title: 'AI in the Workplace', kind: 'RESEARCH · GROUP PROJECT',
    description: 'A team research and presentation project exploring how artificial intelligence is being used in workplace settings, combining research, coordinated delivery and clear communication.',
    stack: ['AI research', 'Teamwork', 'Presentation'], tone: 'blue', visual: 'ai',
  },
  {
    number: '09', title: 'Personal Portfolio', kind: 'WEB DEVELOPMENT · IN PROGRESS',
    description: 'This portfolio: a structured React site that brings projects and experience together with responsive layouts, reusable components and a maintainable content model.',
    stack: ['React', 'Vite', 'CSS', 'GitHub'], tone: 'mint', visual: 'portfolio',
  },
  {
    number: '10', title: 'Network simulations', kind: 'CISCO PACKET TRACER · COURSEWORK',
    description: 'Designed and tested a four-subnet network in Cisco Packet Tracer, configuring DHCP pools, DNS and connectivity between devices. Extended the topology with a smart-home IoT gateway and thermostat automation, then set up an email server and verified message exchange between laptops.',
    stack: ['Packet Tracer', 'IPv4 subnetting', 'DHCP & DNS', 'IoT', 'Email services'], tone: 'lilac', image: image('cisco-packet-tracer.png'), imageAlt: 'Cisco Packet Tracer topology with routers, servers, client devices and smart-home IoT equipment', imageFit: 'contain',
  },
];

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

export const profile = {
  name: 'Garv Nagar',
  email: 'garvnagar0101@gmail.com',
  github: 'https://github.com/OnTech77',
  linkedin: 'https://linkedin.com/in/garv-nagar-900878347',
};
