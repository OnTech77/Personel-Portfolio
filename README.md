# Garv Nagar — Personal Portfolio

A responsive portfolio for Garv Nagar, a Computer Science undergraduate at Kingston University London and full-stack developer. The site connects academic learning to practical work through eleven project stories, completed internship experience, technical and professional skills, and direct contact links.

## Features

- Midnight black, sky blue and white design system, with a remembered light and dark theme
- Animated hero: word-by-word headline, rotating text, count-up stats, aurora light, meteors, a pointer spotlight and a tilting code window
- Command menu (Cmd K or Ctrl K) to jump to any section or project, copy the email address, switch theme or open GitHub and LinkedIn
- Eleven project cards, filterable by category, with pointer-following spotlight glow and links to code where a repository is public
- Slidecraft, Garv's first vibe-coded project, featured with a screenshot gallery that steps through Write, Theme, Enhance and Export
- Floating glass header that highlights the section in view, a scroll progress bar and a back-to-top button
- Timeline that fills as you scroll, internship contribution tiles, a skills marquee and soft skill cards
- Copy-to-clipboard contact with toast confirmations
- Keyboard and screen-reader friendly: skip link, focus styles, labelled controls and announced filter results
- Every animation stops when the visitor's system asks to reduce motion
- No backend or account configuration required

## Technology

- React and JavaScript
- Vite for local development and production builds
- Lucide React icons
- Custom CSS split by section, with Inter, Space Grotesk and JetBrains Mono typography
- No animation library: motion is plain CSS plus small React hooks

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
├── index.html                     # Fonts, favicon and the pre-paint theme script
├── src/
│   ├── App.jsx                    # Composes the page sections
│   ├── main.jsx                   # React application entry point
│   ├── components/
│   │   ├── ui/                    # Reveal, SpotlightCard, RotatingText, SplitWords, CountUp, Marquee
│   │   ├── CommandPalette.jsx     # Cmd K / Ctrl K menu
│   │   ├── Header.jsx, Hero.jsx, SelectedWork.jsx, About.jsx, Experience.jsx,
│   │   ├── Skills.jsx, SoftSkills.jsx, Contact.jsx, Footer.jsx
│   │   └── …                      # Hero backdrop, code window, artwork, theme toggle, toasts
│   ├── context/ThemeContext.jsx   # Light and dark theme
│   ├── hooks/                     # Scroll, active section and reduced-motion hooks
│   ├── lib/events.js              # Page-wide events: open menu, show project, toast
│   ├── data/
│   │   └── portfolio.js           # Projects, timeline, skills, experience and links
│   └── styles/                    # tokens.css (colours and fonts), base.css, then one file per section
├── public/
│   ├── favicon.svg
│   └── images/                    # Project screenshots used in the portfolio
├── .github/workflows/deploy.yml   # Builds and publishes GitHub Pages on pushes to main
├── package.json
└── README.md
```

## Content updates

Edit project details (including categories, featured flags and code links), the timeline, technical and soft skills, toolkit entries, experience and contact/social links in `src/data/portfolio.js`. Update section content in the matching component under `src/components/`; `src/App.jsx` controls section order. Colours and fonts live in `src/styles/tokens.css`. Screenshots live in `public/images/`; the CV Builder screenshot shows demonstration data. The final-year project is presented as in progress and intentionally has no invented title or outcomes.

## Deployment

The portfolio is published at [https://ontech77.github.io/Personel-Portfolio/](https://ontech77.github.io/Personel-Portfolio/). GitHub Actions builds the Vite app and deploys the `dist/` artifact on every push to `main`; the workflow can also be started manually from the Actions tab. The Pages source is configured to use GitHub Actions. No local server is needed to view the public site.

## Credits

Portfolio content is based on Garv Nagar's supplied education, experience, skills and project profile. Screenshots were supplied for the featured work, including demonstration data. The Cisco Packet Tracer project summary reflects the supplied assignment report without publishing student identifiers or specific network addresses. CSS artwork illustrates projects that did not have screenshots in the supplied folder. Interaction ideas were inspired by Aceternity UI and React Bits, reimplemented here without their code or dependencies.
