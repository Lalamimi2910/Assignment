# AI Videos Portfolio

A fast, dependency-free portfolio website for showcasing AI-generated videos — short films, commercials, music videos and experiments.

## Features
- Cinematic hero with a looping background video
- Filterable video grid (categories are created automatically from your videos)
- Hover previews for mp4 files, auto thumbnails for YouTube
- Pop-up player supporting **YouTube**, **Vimeo** and **mp4** files
- Toolkit, process, about and contact sections
- Fully responsive, keyboard accessible, no build step

## Make it yours
1. **Add your videos** — edit `videos.js`. Each entry looks like:
   ```js
   {
     title: "My Film",
     category: "Short Film",
     description: "What it is and how you made it.",
     tools: ["Sora", "Runway"],
     year: 2026,
     duration: "1:30",
     youtube: "dQw4w9WgXcQ",      // or vimeo: "123456", or src: "videos/my-film.mp4"
     thumbnail: "images/my-film.jpg" // optional
   }
   ```
   The sample clips are public demo videos — replace them with your work.
2. **Your details** — in `index.html`, search for `Your Name`, `YN`, `hello@example.com` and the social links.
3. **Colours** — change `--accent` and `--accent-2` at the top of `styles.css`.

## Preview locally
Open `index.html` in a browser, or run:
```bash
python3 -m http.server 8000
```
then visit http://localhost:8000.

## Publish for free (GitHub Pages)
In the repository on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, pick your branch and `/ (root)`, then save. Your site will be live at `https://<username>.github.io/<repo>/`.
