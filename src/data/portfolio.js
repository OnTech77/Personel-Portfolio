export const projects = [
  {
    number: '01', title: 'FacilityHub', kind: 'FULL-STACK · INTERNSHIP PROJECT',
    description: 'A facilities-maintenance platform that brings clients, dispatchers and tradespeople into one workflow. The team built ticket and job flows backed by role-aware screens, REST APIs and a relational database.',
    stack: ['React', 'Node.js', 'Express', 'MySQL'], tone: 'mint', image: '/images/facilityhub-tickets.png', imageAlt: 'FacilityHub maintenance ticket dashboard',
  },
  {
    number: '02', title: 'Travel Jabs', kind: 'FULL-STACK · UNIVERSITY PROJECT',
    description: 'A patient-journey application for managing clinic patients, appointments and vaccination records. React screens connect to an Express REST API and MySQL database, with authentication and role-aware views.',
    stack: ['React', 'Express', 'MySQL', 'Authentication'], tone: 'lilac', image: '/images/travel-jabs-patients.png', imageAlt: 'Travel Jabs patient list screen with sample records blurred', imageNote: 'SAMPLE RECORDS BLURRED',
  },
  {
    number: '03', title: 'Student Expense Tracker', kind: 'POWER APPS · GROUP 17',
    description: 'A student-focused budgeting app for setting category budgets, logging income and expenses, reviewing recent transactions and understanding spending through visual summaries. Designed in Figma and developed in Power Apps with OneDrive Excel as its data source.',
    stack: ['Power Apps', 'Excel', 'Figma', 'Budgeting'], tone: 'blue', image: '/images/student-expense-tracker.png', imageAlt: 'Student Expense Tracker budget screen with category budgets and a spending chart', imageFit: 'contain',
  },
  {
    number: '04', title: 'Fitness & Diet Tracker', kind: 'PRODUCT DESIGN · FIGMA',
    description: 'A mobile fitness concept shaped around workout plans and at-a-glance activity goals. Wireframes and linked screens explore navigation, workout details and progress summaries.',
    stack: ['Figma', 'User flows', 'Prototyping'], tone: 'peach', image: '/images/fitness-tracker-concept.png', imageAlt: 'Fitness tracker mobile interface concept', imageFit: 'contain',
  },
  {
    number: '05', title: 'User Profile Builder', kind: 'JAVA · DESKTOP APPLICATION',
    description: 'A Java Swing application for creating and managing user profile details. The interface separates titles, names and email information and supports displaying, editing and removing entries.',
    stack: ['Java', 'Swing', 'Object-oriented design'], tone: 'mint', image: '/images/user-profile-builder.png', imageAlt: 'Java Swing User Profile Builder interface',
  },
  {
    number: '06', title: 'Java CV Builder', kind: 'JAVA · DESKTOP APPLICATION',
    description: 'A graphical CV-building exercise that brings together structured user input, reusable classes and application logic to assemble a personal résumé.',
    stack: ['Java', 'Swing', 'OOP'], tone: 'lilac', visual: 'resume',
  },
  {
    number: '07', title: 'Java Blackjack', kind: 'JAVA · INTERACTIVE GAME',
    description: 'A small interactive card game built to practise object-oriented programming, game state, conditional logic, loops and player interaction.',
    stack: ['Java', 'Game logic', 'OOP'], tone: 'peach', visual: 'blackjack',
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
    description: 'Network topology exercises using Cisco Packet Tracer to practise device configuration, connections and foundational networking concepts in a simulated environment.',
    stack: ['Packet Tracer', 'Networking', 'Topology'], tone: 'lilac', visual: 'network',
  },
];

export const skills = [
  { title: 'Frontend', detail: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive interfaces'] },
  { title: 'Backend & APIs', detail: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'API integration'] },
  { title: 'Databases', detail: ['MySQL', 'SQL', 'Oracle SQL', 'Relational design', 'ERDs'] },
  { title: 'How I work', detail: ['Java & OOP', 'Git & GitHub', 'Agile sprints', 'Code review', 'Figma', 'Postman'] },
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
