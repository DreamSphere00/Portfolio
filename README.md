# DreamSphere Portfolio — Setup & Deployment

## Prerequisites
- Node.js 20+ installed
- npm 10+

## Local Development

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live at `your-project.vercel.app`

## Deploy to Netlify

1. Push repository to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Install the Next.js plugin: `@netlify/plugin-nextjs`
6. Deploy

## Project Structure

```
portfolio/
├── public/
│   ├── team/          # Team member headshots
│   └── projects/      # Project preview images
├── src/
│   ├── app/
│   │   ├── globals.css    # Design system & utilities
│   │   ├── layout.tsx     # Root layout with fonts & SEO
│   │   └── page.tsx       # Main page assembling all sections
│   └── components/
│       ├── Navbar.tsx         # Sticky navigation
│       ├── Hero.tsx           # Hero with animated glow
│       ├── About.tsx          # Agency mission & pillars
│       ├── Services.tsx       # 5-service card grid
│       ├── Team.tsx           # 5-member team grid
│       ├── Portfolio.tsx      # 3 case study cards
│       ├── Testimonials.tsx   # Client reviews + slider
│       ├── Contact.tsx        # Contact form + info
│       └── Footer.tsx         # Footer with links
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

## Tech Stack
- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4**
- **Framer Motion** (scroll & hover animations)
- **Lucide React** (icons)
- **TypeScript**
