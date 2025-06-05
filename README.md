# README from recover-readme branch
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
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
>>>>>>> recover-readme
