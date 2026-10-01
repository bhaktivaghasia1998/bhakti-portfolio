# Bhakti Vaghasia – Portfolio (React + Vite)

## Run it on your Mac

1. Install Node.js (one time): download the **LTS** version from https://nodejs.org and install it.
2. Open Terminal and go to this folder:
   ```
   cd ~/Documents/KeshavTech/Projects/bhakti-portfolio
   ```
3. Download the libraries the project needs (one time, creates a `node_modules` folder):
   ```
   npm install
   ```
4. Start the website:
   ```
   npm run dev
   ```
   Open the link it prints (usually http://localhost:5173). Keep Terminal open.
   Every time you save a file, the browser updates by itself. Press `Ctrl + C` to stop.

5. Make the finished, publishable version (goes into the `dist` folder):
   ```
   npm run build
   ```

## Design: Tailwind + shadcn/ui

- **Tailwind CSS** styles the page with short class names right in the code, like `rounded-xl bg-card p-6`.
- **shadcn/ui** components live in `src/components/ui/` (Button, Badge, Card, Tooltip, Progress, Separator).
  They're your own files, so you can open and change them.
- **Colors** are set once at the top of `src/index.css` (`--primary` is the blue, `--brand-2` the violet, `--success` the green).
- After this update, run `npm install` once so the new libraries download.

## Where things are

| File | What it does |
|---|---|
| `src/data.ts` | **All the text on the site.** Edit this to change your info. |
| `src/App.tsx` | Puts all the sections together in order. |
| `src/components/` | One file per section (Hero, Experience, Skills…). |
| `src/index.css` | All the colors, fonts and layout. |
| `index.html` | The empty page React fills in. |
| `package.json` | The project's name, commands and the libraries it uses. |

## TypeScript

Run `npm run typecheck` to check the whole project for type mistakes without opening the browser.
