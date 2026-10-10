# Garv Nagar — Personal Portfolio

A responsive portfolio for Garv Nagar, a Computer Science undergraduate at Kingston University London and full-stack developer. The site connects academic learning to practical work through ten project stories, completed internship experience, a readable skills overview and direct contact links.

## Features

- Responsive, single-page portfolio with accessible landmarks and keyboard focus styles
- Ten project cards spanning full-stack apps, Java coursework, Power Apps, product design, AI research and networking
- Screenshot-led project cards, with original illustrative artwork for projects without supplied screenshots
- Completed Summer 2026 internship experience, with responsibilities and FacilityHub featured separately
- Education and internship timeline, with coursework skills woven into project narratives
- Reduced-motion support and mobile navigation
- No backend or account configuration required

## Technology

- React and JavaScript
- Vite for local development and production builds
- Lucide React icons
- Custom CSS, with DM Sans, Manrope and DM Mono typography

## Run locally

Prerequisites: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL. Create and preview a production build with:

```bash
npm run build
npm run preview
```

## Project structure

```text
.
├── index.html
├── src/
│   ├── App.jsx                    # Composes the page sections
│   ├── main.jsx                   # React application entry point
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionLabel.jsx
│   │   ├── SelectedWork.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolio.js           # Projects, skills, toolkit and links
│   └── styles.css                 # Shared responsive visual system
├── public/
│   └── images/                    # Project screenshots used in the portfolio
├── package.json
└── README.md
```

## Content updates

Edit project details, skills, toolkit entries, experience and contact/social links in `src/data/portfolio.js`. Update section content in the matching component under `src/components/`; `src/App.jsx` controls section order. Screenshots live in `public/images/`. The Travel Jabs patient list screenshot has its sample patient records blurred. The final-year project is presented as in progress and intentionally has no invented title or outcomes.

## Deployment

The repository is connected to `https://github.com/OnTech77/Personel-Portfolio`. Build with `npm run build`, then publish the generated `dist/` directory using GitHub Pages or another static host. For GitHub Pages, configure the repository's Pages settings to deploy from the `dist/` artifact using a deployment workflow, or use a static hosting provider with Vite support.

## Credits

Portfolio content is based on Garv Nagar's supplied education, experience, skills and project profile. Screenshots were supplied for the featured work; the Travel Jabs sample patient records are blurred. CSS artwork illustrates projects that did not have screenshots in the supplied folder.
