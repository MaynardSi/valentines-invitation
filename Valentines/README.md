# Will You Be My Valentine?

A playful single-page Valentine meme website with 14 stages of escalating "No" rejection logic, sound effects, GIF reactions, and confetti celebration.

## Quick Start

1. **Add background music:** Place an MP3 file named `bgm.mp3` in `assets/audio/`.
   - Suggestion: search YouTube for *"My Heart Will Go On violin instrumental"* and convert to MP3.
2. **Open the site:** Double-click `index.html` in your browser — that's it!

> **Note:** Some browsers block autoplay audio. Click anywhere on the page to start the background music.

## File Structure

```
Valentines/
├── index.html              # Single page
├── css/
│   └── style.css           # Styles & animations
├── js/
│   └── app.js              # State machine & interaction logic
├── assets/
│   └── audio/
│       └── bgm.mp3         # YOUR background music (not included)
└── README.md
```

## How It Works

### Array-Driven State Machine

All 14 rejection stages are defined in a single `STAGES` array in `js/app.js`. Each entry contains:

- `subtext` — the pleading message
- `gif` — GIPHY direct URL
- `sound` — MyInstants direct MP3 URL
- `yesText` / `noText` — button labels

To customise, just edit the array entries. Add more stages, swap GIFs, change sounds — the logic adapts automatically.

### Interaction Flow

- **Default:** "Will you be my Valentine?" with Yes/No buttons.
- **Each "No" click:** advances to the next stage — new GIF, sound, subtext, and escalating visual effects.
- **"Yes" at any point:** celebration mode with confetti, party sounds, and a victory message.
- **Stage 14:** the "No" button disappears entirely. Only "Yes" remains with a rainbow border.

### Visual Escalation

| Stages | Effects |
|--------|---------|
| 1–4 | No button shrinks, Yes button grows |
| 5–8 | Background shifts red, screen shake |
| 9–12 | Header glow, pulsing Yes, semi-transparent No |
| 12–13 | Vignette overlay, No button trembles, dramatic flash |
| 14 | No button removed, rainbow-bordered giant Yes |

## Asset Sources

- **Sound effects:** Hotlinked from [myinstants.com](https://www.myinstants.com/en/index/tw/)
- **GIF images:** Hotlinked from [giphy.com](https://giphy.com/)
- **Background music:** User-provided (`assets/audio/bgm.mp3`)

## Customisation

### Swap a GIF

1. Go to [giphy.com](https://giphy.com/) and find a GIF you like.
2. Click on it, then click "Share" and copy the GIF link (e.g. `https://media.giphy.com/media/XXXX/giphy.gif`).
3. Replace the `gif` value in the corresponding `STAGES` entry.

### Swap a Sound

1. Go to [myinstants.com](https://www.myinstants.com/en/index/tw/) and find a sound.
2. Right-click "Download MP3" and copy the link address.
3. Replace the `sound` value in the corresponding `STAGES` entry.

### Add More Stages

Just add another object to the `STAGES` array — the logic handles any length automatically.

## Deploy for Free

### GitHub Pages (Recommended)

```bash
git init
git add .
git commit -m "Valentine meme site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valentine.git
git push -u origin main
```

Then go to **Settings > Pages** in your GitHub repo, select **Branch: main**, folder **/ (root)**, and click Save. Your site will be live at `https://YOUR_USERNAME.github.io/valentine/` within a minute.

### Other Free Options

- **Netlify:** Drag-and-drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel:** Run `npx vercel` from the project folder
- **Cloudflare Pages:** Connect your GitHub repo for auto-deploy

## License

This is a personal project. The GIFs and sounds are hotlinked from their respective platforms under their terms of service.
