# Changelog

All notable changes to this project will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-06-21

### Added
- **Dependabot** (`.github/dependabot.yml`) — weekly automated npm dependency updates
- **About section** — `summary` field in `metadata.js` rendered via Handlebars as an "About" section in the CV
- **Data-driven education** — `education` array in `metadata.js`; HTML template now loops over entries instead of hardcoding them

### Changed
- **CV content** — replaced William Shakespeare placeholder with Michalis Mylonas's real details: contact info, professional summary, work experience (FP Markets, Ofsted, ONS), education (Cardiff MSc, Swansea BSc), and skills
- **`src/metadata/metadata.js`** — added `summary` and `education` fields; updated `facts` to include GitHub, GitLab, and real contact details; updated skills to reflect actual proficiency (Python, SQL, R, Azure, MS Fabric, Databricks, Git)
- **`src/templates/index.html`** — templated the About/bio section (was hardcoded Shakespeare text); made education section data-driven; bumped Bootstrap `5.2.0` → `5.3.3`; bumped Font Awesome `6.1.2` → `6.5.2`
- **`package.json`** — updated `author`, `repository`, `bugs`, and `homepage` fields from upstream template values to Michalis Mylonas / Mylonas/cv
- **`package.json`** — bumped `fs-extra` `^10.1.0` → `^11.3.5`
- **`package.json`** — bumped `handlebars` `^4.7.7` → `^4.7.9`
- **`package.json`** — bumped `puppeteer` `^16.1.0` → `^25.1.0`
- **`.github/workflows/gh-pages.yml`** — upgraded `actions/checkout@v2` → `@v4`; `actions/setup-node@v1` → `@v4` (Node 18 → 20); `JamesIves/github-pages-deploy-action@releases/v3` → `@v4`; switched runner from `macos-latest` to `ubuntu-latest`; switched from `npm install` to `npm ci`; added npm cache
- **`README.md`** — rewritten with setup instructions, customisation guide, and deploy steps

### Security
- Bumped `decode-uri-component` (transitive dependency) to `0.2.2` — fixes ReDoS vulnerability (CVE-2022-38900)

---

## [1.0.0] - 2024-06-19

### Added
- Initial CV template based on [sneas/cv-template](https://github.com/sneas/cv-template)
- Handlebars-based HTML template with Bootstrap 5 and Font Awesome
- Automated HTML + PDF generation via Puppeteer
- GitHub Actions workflow to build and deploy to GitHub Pages on push to `main`
