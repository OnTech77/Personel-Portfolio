# Garv Nagar — Personal Portfolio

A responsive portfolio for Garv Nagar, a Computer Science undergraduate at Kingston University London and full-stack developer. The site connects academic learning to practical work through project stories, internship experience, a focused skills overview and direct contact links.

## Features

- Responsive, single-page portfolio with accessible landmarks and keyboard focus styles
- Project cards covering FacilityHub, Travel Jabs, product design and Java coursework
- Education and internship timeline, with coursework skills woven into project narratives
- Reduced-motion support and mobile navigation
- No backend or account configuration required

## Technology

- React 18 and JavaScript
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
├── index.html        # Document metadata and app entry point
├── src/
│   ├── main.jsx      # Portfolio content and React components
│   └── styles.css    # Responsive visual system
├── package.json
└── README.md
```

## Content updates

Project details, timeline entries, and skills are data-driven near the top of `src/main.jsx`. Update contact and social links there as needed. The contact email currently uses the Kingston student address supplied in the source profile; replace it if you prefer a personal address. The final-year project is presented as in progress and intentionally has no invented title or outcomes.

## Deployment

The repository is connected to `https://github.com/OnTech77/Personel-Portfolio`. Build with `npm run build`, then publish the generated `dist/` directory using GitHub Pages or another static host. For GitHub Pages, configure the repository's Pages settings to deploy from the `dist/` artifact using a deployment workflow, or use a static hosting provider with Vite support.

## Credits

Portfolio content is based on Garv Nagar's supplied education, experience, skills and project profile. Abstract project artwork is created in CSS; no personal or third-party images are used.
