## Venkata Guravareddy — Single‑Page Resume

A modern, single‑page resume optimized for GitHub Pages. It features a professional design, dark mode, sticky section navigation, interactive skills (modal popups), an ATS‑friendly view, and a one‑page “Quick PDF” generator.

### Quick start
- Open `index.html` directly in a browser, or serve with any static server.
- Deploy by pushing to the default branch configured for GitHub Pages (Settings → Pages → Build from branch → root).

### Features
- Professional UI: Navy/teal palette, Plus Jakarta Sans/Inter typography.
- Dark mode: Fixed toggle with preference persisted in `localStorage`.
- Sticky navigation: Jump to Profile, Experience, Projects, Skills, Patents, Education, Certifications, Interests.
- Skill details: Click a skill to open an accessible modal (focus‑trapped, Esc to close).
- Show more/less: Expand/collapse longer experience bullet lists.
- Quick PDF: Generates a concise, single‑page PDF using jsPDF (not just print CSS).
- ATS mode: Add `?ats=1` to the URL for a simplified, parser‑friendly layout.
- Mobile friendly: Responsive layout and touch targets.

### Editing content
All content lives in `index.html`:
- Header name/tagline, contact info
- Sections identified by IDs: `#profile`, `#experience`, `#projects`, `#skills`, `#patents`, `#education`, `#certifications`, `#interests`
- Add/edit skills by updating items within each `.skill-category`. Use `data-skill-details` for modal content (supports HTML).

### PDF
- Use the “Download PDF” button at the bottom. The generator pulls top content from the page and formats it for one page.
- Uses `jsPDF` via CDN.

### ATS view
- Append `?ats=1` to the URL to activate a simplified, parser‑friendly layout (icons/visuals removed, linear text flow).

### Dependencies (CDN)
- Font Awesome 6 (icons)
- Google Fonts (Inter, Plus Jakarta Sans)
- jsPDF (PDF generation)

All third‑party assets remain under their respective licenses.

### Favicon
Configured in `<head>` to use the provided icons8 AI icon URL.

### License / rights
- All resume content © 2024 Venkata Guravareddy. All rights reserved.
- Third‑party libraries and assets are owned and licensed by their respective authors.

