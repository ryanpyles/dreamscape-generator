# 🌌 Dreamscape Generator

> 🧠 Generate surreal, AI-driven 3D dream worlds from pure imagination.  
> Powered by OpenAI + Next.js + Three.js + WebGL. Built to immerse.

![Vercel](https://vercelbadge.vercel.app/api/ryanpyles/dreamscape-generator)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 🚀 Features

- ✨ **AI-Powered** — Generates dreamscape scenes from user prompts via OpenAI
- 🏞 **Procedural Terrain** — Floating islands, alien valleys, and otherworldly landscapes
- 🎧 **Ambient Audio** — Ethereal soundscapes driven by scene mood
- 🌀 **Surreal Shader FX** — Glitch, bloom, and chromatic effects toggleable per dream
- 🥽 **WebVR Mode** — Optional immersive XR/VR experience
- 💾 **Scene Save System** — Save & view your dream gallery
- 🔒 **Secure API Layer** — .env-based OpenAI key protection

---

## 🧱 Stack

| Tech | Purpose |
|------|---------|
| 🧠 [OpenAI API](https://platform.openai.com) | Generate structured dream scenes |
| ⚛️ [Next.js](https://nextjs.org) | Frontend + API routes |
| 🎮 [Three.js](https://threejs.org) + R3F | WebGL scene building |
| 🎧 Ambient MP3s | Immersive audio mood |
| 🥽 [@react-three/xr](https://github.com/pmndrs/react-xr) | VR camera support |
| 🎨 [@react-three/postprocessing](https://github.com/pmndrs/postprocessing) | Shader FX (bloom, glitch) |
| 🔒 localStorage | Persist saved dreams (or plug into Firebase later) |

---

## 📦 Install & Dev

```bash
git clone https://github.com/ryanpyles/dreamscape-generator.git
cd dreamscape-generator
npm install
```

### 🧪 Local Dev

```bash
cp .env.local.example .env.local
# then paste your OpenAI key in .env.local

npm run dev
```

---

## 🔑 `.env.local`

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxx
```

---

## 🖼️ Gallery Mode

- Navigate to `/gallery` to view saved dreams
- Each dream is saved with a unique ID
- Visit `/view/[id]` to re-experience any dream

---

## 🌍 Deploy to Vercel

This project is Vercel-ready:
```bash
npx vercel
```

Set your environment variable in Vercel dashboard:
```
OPENAI_API_KEY
```

---

## 📁 Audio Assets

Place ambient MP3 files in:

```
/public/audio/
├── cosmic-echo.mp3
├── underwater-hum.mp3
├── ethereal-winds.mp3
├── dystopian-rumble.mp3
└── dreambase.mp3
```

> You can grab royalty-free ambient tracks from [Pixabay](https://pixabay.com/music), [Freesound](https://freesound.org), or [Mixkit](https://mixkit.co/).

---

## 🧙 Prompt Examples

> Try these in the input:

- `"A city made of clouds floating above a neon abyss"`
- `"A dream where jellyfish fly through a frozen desert"`
- `"A distorted AI utopia full of glitching crystal towers"`

---

## 🧑‍💻 Author

Created by **[@ryanpyles](https://github.com/ryanpyles)**  
Dev support by 🥷 `Jake` – AI coding agent from the shadows.

---

## 📄 License

MIT © 2025 Ryan Pyles
