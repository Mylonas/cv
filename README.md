# CV

My personal CV hosted on GitHub Pages, with auto-generated HTML and PDF versions on every push to `main`.

**Live:** [https://mylonas.github.io/cv](https://mylonas.github.io/cv)

## Setup

```bash
npm install
npm start        # local dev server at http://localhost:8080
```

## Customise

Edit [`src/metadata/metadata.js`](src/metadata/metadata.js) to update your details:

- `name`, `title`, `summary` — header info
- `facts` — contact links (location, email, GitHub, LinkedIn)
- `skills` — skill bars with proficiency percentages
- `positions` — work experience entries
- `education` — degree entries
- `experience` — additional projects / certifications

The HTML template is at [`src/templates/index.html`](src/templates/index.html) (Handlebars).

## Deploy

Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically.

For a first-time deploy run:

```bash
npm run deploy
```
