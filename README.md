# sumer-playground

A personal portfolio website built with React, Vite, and Tailwind CSS, featuring a retro black-background design with cyan, magenta, green, and yellow accents.

## Overview

This is the personal website of **Sumer** — an MBA student with an electrical engineering background, currently interning at ai&. The site presents professional information through a multi-section React application.

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit (blog post filtering)
- **Server:** Flask (static file serving in production)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed top navigation with scroll effects and mobile menu
│   ├── Hero.jsx          # Landing section with animated marquee and status indicators
│   ├── About.jsx         # Bio and current focus areas
│   ├── Skills.jsx        # Categorized skills display with tech/business split
│   ├── Projects.jsx      # Featured projects grid with hover effects
│   ├── Blog.jsx          # Blog posts with Redux-powered category filtering
│   ├── Footer.jsx        # Footer with hit counter and contact links
│   └── HitCounter.jsx    # LocalStorage-based visit counter
├── App.jsx               # Main app component with section layout
├── main.jsx              # React root entry point
├── store.js              # Redux store with blog slice and filter logic
├── index.css             # Global styles, custom utility classes, and design system
```

## Sections

### Navbar
- Fixed navigation bar that changes border color on scroll
- Sections: About | Skills | Projects | Blog
- Online/away status indicator with blinking animation
- Mobile responsive hamburger menu

### Hero
- Landing page with animated marquee text scrolling horizontally
- Status boxes showing: Internship Active, Location, Mood
- Call-to-action buttons linking to Projects and Blog
- Decorative corner elements

### About
- Personal background covering EE origins and MBA pursuit
- Current focus areas panel with progress indicator
- Skills span both technical systems work and business strategy

### Skills
- Four categories: Languages, Frontend, Backend, Business
- Interactive hover effects on skill cards
- Decorative terminal-style info display with system stats

### Projects
- Grid layout featuring:
  - Distributed Systems Simulator (C++, Systems, Research)
  - Rails Analytics Dashboard (Ruby, React, Redux)
  - AI Market Scanner (Python, NLP, Strategy)
- Status badges for each project

### Blog
- Three sample posts on Strategy, Engineering, and AI topics
- Category filters powered by Redux: All | AI | Engineering | Strategy
- Guestbook teaser placeholder

## Design System

### Colors
- Primary: `#00FFFF` (cyan)
- Secondary: `#FF00FF` (magenta)
- Accent: `#00FF00` (green)
- Highlight: `#FFFF00` (yellow)
- Background: `#000000` with dark blue panel variants (`#000033`)

### Typography
- **Pixel font:** `"Press Start 2P"` for decorative headings and labels
- **Mono font:** `"VT323", "Courier New", monospace` for body text

### Custom Elements
- Starfield background via CSS radial gradients
- CRT scanline overlay effect
- Custom neon-styled scrollbar
- Crosshair cursor on links and buttons
- Custom selection highlight (magenta)
- CSS marquee animation for scrolling text

### Utility Classes
- `.y2k-panel` / `.y2k-panel-pink` / `.y2k-panel-yellow` — Styled content containers with glow effects
- `.y2k-btn` / `.y2k-btn-pink` — Neon-styled buttons with hover glow
- `.y2k-tag` — Bordered inline tags
- `.y2k-marquee-container` / `.y2k-marquee-content` — Scrolling text containers

## Tailwind Configuration

The Tailwind config extends the standard theme with:
- Custom `y2k` color palette mapping to the neon colors above
- `font-pixel` and `font-mono` font families
- Neon glow box shadows (`neon-cyan`, `neon-pink`, etc.)
- Custom animations: blink, rainbow, glow-pulse, float, marquee, spin-slow

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
Output goes to `dist/` directory.

### Serve in Production
```bash
pip install -r requirements.txt
python server.py
```
Flask server runs on `http://localhost:5000` by default, serving static files from `dist/` with SPA routing support.

## Deployment

The included `Procfile` enables Heroku deployment using gunicorn + Flask.

## Author

**Sumer**
- MBA Candidate | Former EE | AI Enthusiast
- GitHub: [SumerSG](https://github.com/SumerSG)

## License

MIT
