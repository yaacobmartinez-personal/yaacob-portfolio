# Yaacob Martinez — Portfolio

Next.js 15 portfolio site inspired by the Aurorix Framer template.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Swap your photo

In `lib/data.ts`, replace the `photo` URL with your own image:

```ts
photo: "/your-photo.jpg",   // put your file in /public
```

## Structure

```
app/
  layout.tsx       ← fonts, metadata
  page.tsx         ← section order
  globals.css      ← base styles + reveal animation

components/
  Navbar.tsx       ← sticky nav with scroll state
  Hero.tsx         ← intro, photo, CTA
  FeaturedWork.tsx ← 6 project cards (3×2 grid)
  Experience.tsx   ← work timeline
  Skills.tsx       ← tech category grid
  About.tsx        ← bio, photo, fun facts, education
  Contact.tsx      ← dark CTA section + mailto form
  Footer.tsx       ← large split name + links

lib/
  data.ts          ← all portfolio content (edit here)
```

## Customise

All content lives in `lib/data.ts` — edit `personalInfo`, `projects`, `experience`, `skills` to update the site. No other files need touching for content changes.
