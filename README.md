# Suryakiran T S – Portfolio (React + Vite)

## Run locally (Windows + VS Code)
1. Install **Node.js LTS** from https://nodejs.org (accept defaults), then restart VS Code.
2. In VS Code: **File > Open Folder** and choose this folder. Open the terminal with **Ctrl + `**.
3. `npm install` – downloads the dependencies (once).
4. `npm run dev` – starts the dev server. Open **http://localhost:5173** in Chrome.
5. Stop it with **Ctrl + C**.
6. `npm run build` – creates the production site in `dist/`. `npm run preview` – serves that build locally.

## Edit content
- Text, links, skills, projects, labs, education: `src/data.js` (GitHub/LinkedIn/email are at the top).
- Per-project repo links: edit the `repo` function in `src/data.js`. Right now every GitHub button opens your profile, because no repo URLs were provided.
- Colours: the `:root` variables at the top of `src/styles.css`.
- Photos: `public/images/*.webp`. Resume: `public/resume/`.
- Tool tiles are text badges. For official logos: `npm i simple-icons` and swap them in `Skills()` in `src/App.jsx`.

## Deploy free on GitHub Pages
1. On github.com click **New repository**, name it e.g. `portfolio`, keep it Public, create it empty.
2. In the VS Code terminal:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/suryakirants/portfolio.git
git push -u origin main
```
3. On GitHub: **Settings > Pages > Source: GitHub Actions**. The included workflow builds and deploys on every push to `main`.
4. After the Actions run turns green, your site is at `https://suryakirants.github.io/portfolio/`.
5. To update later: edit, then `git add .`, `git commit -m "Update"`, `git push`.
