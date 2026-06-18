# 珈琲と踏切

A retro-styled personal portfolio site built with React, Vite, and Tailwind CSS. Features a Y2K/early-web aesthetic with neon colors, pixel fonts, and nostalgic UI flourishes.

## Overview

This is the personal website of **Sumer** — an MBA student with an electrical engineering background, currently interning at ai&. The site bridges deep technical work and high-level business strategy, just like its author.

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + custom Y2K design system
- **State Management:** Redux Toolkit (blog filtering)
- **Server:** Flask (for static file serving)

## Sections

1. **Hero** — Landing section with animated marquee, status indicators, and retro decorative elements
2. **About** — Personal bio and current focus areas
3. **Skills** — Categorized tech and business skills with interactive hover effects
4. **Projects** — Featured projects including Distributed Systems Simulator, Rails Analytics Dashboard, and AI Market Scanner
5. **Blog** — Writing on AI, Engineering, and Strategy with Redux-powered filtering
6. **Footer** — Contact links and site info

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

This outputs static files to the `dist/` directory.

### Serve (Production)

A Flask server is included for serving the built static files:

```bash
pip install -r requirements.txt
python server.py
```

The server runs on `http://localhost:5000` by default.

## Design

The site uses a custom Y2K aesthetic featuring:
- Neon color palette (cyan `#00FFFF`, magenta `#FF00FF`, lime `#00FF00`, yellow `#FFFF00`)
- Pixel/monospace typography
- Blinking animations and decorative corner elements
- Terminal-inspired status boxes and progress bars
- CRT-style panels with inset glows

## Deployment

The project includes a `Procfile` for easy Heroku deployment. The Flask server handles static file routing for SPAs (single-page applications).

## Author

**Sumer**
- MBA Candidate | Former EE | AI Enthusiast
- [GitHub](https://github.com/SumerSG)

## License

MIT
