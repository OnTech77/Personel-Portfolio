# Garv Nagar — Personal Portfolio

A responsive portfolio for Garv Nagar, a Computer Science undergraduate at Kingston University London and full-stack developer. The site connects academic learning to practical work through ten project stories, completed internship experience, technical and professional skills, and direct contact links.

## Features

- Responsive, single-page portfolio with accessible landmarks and keyboard focus styles
- Ten project cards spanning full-stack apps, Java coursework, Power Apps, product design, AI research and networking
- Screenshot-led project cards, with original illustrative artwork for projects without supplied screenshots
- Separate soft skills section grounded in university and internship examples
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
│   │   ├── Skills.jsx
│   │   └── SoftSkills.jsx
│   ├── data/
│   │   └── portfolio.js           # Projects, skills, experience and links
│   └── styles.css                 # Shared responsive visual system
├── public/
│   └── images/                    # Project screenshots used in the portfolio
├── .github/workflows/deploy.yml   # Builds and publishes GitHub Pages on pushes to main
├── package.json
└── README.md
```

## Content updates

Edit project details, technical and soft skills, toolkit entries, experience and contact/social links in `src/data/portfolio.js`. Update section content in the matching component under `src/components/`; `src/App.jsx` controls section order. Screenshots live in `public/images/`. Sample records in the Travel Jabs and CV Builder screenshots are blurred. The final-year project is presented as in progress and intentionally has no invented title or outcomes.

## Deployment

The portfolio is published at [https://ontech77.github.io/Personel-Portfolio/](https://ontech77.github.io/Personel-Portfolio/). GitHub Actions builds the Vite app and deploys the `dist/` artifact on every push to `main`; the workflow can also be started manually from the Actions tab. The Pages source is configured to use GitHub Actions. No local server is needed to view the public site.

## Credits

Portfolio content is based on Garv Nagar's supplied education, experience, skills and project profile. Screenshots were supplied for the featured work; sample records in the Travel Jabs and CV Builder screenshots are blurred. The Cisco Packet Tracer project summary reflects the supplied assignment report without publishing student identifiers or specific network addresses. CSS artwork illustrates projects that did not have screenshots in the supplied folder.
