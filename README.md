# Andrea & Pedro — Wedding Invitation Site

A pixel-perfect clone of the Premium Elegante wedding invitation template.
Built with **Vite + React + TypeScript + TailwindCSS + Framer Motion**.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion 11 |
| Fonts | Great Vibes + Cormorant Garamond (Google Fonts) |

---

## Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (hot-reload)
npm run dev
# → http://localhost:5173

# 3. Production build
npm run build
# → outputs to /dist

# 4. Preview production build locally
npm run preview
```

---

## Deploy to Static Hosting (cPanel / shared host)

1. Run `npm run build`
2. Open your cPanel File Manager (or use FTP)
3. Upload the **entire contents** of the `/dist` folder to `public_html/` (or your subdomain root)
4. That's it — no server required, fully static

> **Note:** If you upload to a subdirectory (e.g. `public_html/wedding/`), set `base: "/wedding/"` in `vite.config.ts` before building.

---

## Edit Guide

### All content lives in ONE file:
**[`src/content/content.ts`](src/content/content.ts)**

Everything below is changed there — no need to touch any component.

---

### Hero text
```ts
hero: {
  preTitle: "We Are Getting Married",   // ← small text above names
  date: "12 · IX · 2026",              // ← date shown in hero
  location: "Hedsor House, ...",        // ← location shown in hero
}
```

### Couple names
```ts
couple: {
  bride: "Andrea",
  groom: "Pedro",
  fullNames: "Andrea & Pedro",
}
```

### Wedding date (countdown target)
```ts
weddingDate: new Date("2026-09-12T14:00:00"),
```

### Locations & map links
```ts
venue: {
  events: [
    {
      location: "Hedsor House Chapel",
      mapLink: "https://maps.google.com/?q=...",   // ← change this
    }
  ]
}
```

### Sections order
Sections are listed in **[`src/App.tsx`](src/App.tsx)** in render order.
Cut/paste any `<Section />` block to reorder. Each section is independent.

### Colors
Edit **[`tailwind.config.ts`](tailwind.config.ts)**:
```ts
colors: {
  ivory: "#F8F5EF",    // page background
  gold:  "#C5A46D",    // accent / gold sections
  "sage-dark": "#7A5530",  // primary text
  // ...
}
```
Then update `--gold`, `--ivory` etc. in **[`src/styles/globals.css`](src/styles/globals.css)** `:root` block to match.

### Fonts
Change the Google Fonts URL in **[`index.html`](index.html)** and update `fontFamily` in `tailwind.config.ts`:
```ts
fontFamily: {
  display: ["Great Vibes", "cursive"],   // ← script / heading font
  body:    ["Cormorant Garamond", ...],  // ← body serif font
}
```

### Animation timings
Every component uses Framer Motion `transition={{ duration: X, delay: Y }}`.
To slow down: increase `duration`. To speed up: decrease it.
Global easing is `cubic-bezier(0.4, 0, 0.2, 1)` — change in `globals.css` `--transition-smooth`.

---

## Replacing placeholder assets

| Asset | Where to put it | Config key |
|---|---|---|
| Hero video | `/public/video/hero.mp4` | `content.hero.videoSrc` |
| Intro video | `/public/video/intro.mp4` | `content.intro.videoSrc` |
| Background music | `/public/audio/background.mp3` | `content.musicSrc` |
| Gallery photos | Any URL or `/public/images/g1.jpg` | `content.gallery.strip1[]` |

Set the key to `""` to disable that feature (e.g. no video → shows fallback image).

---

## Connecting the RSVP form to a backend

Open **[`src/components/RSVP.tsx`](src/components/RSVP.tsx)** and find `handleSubmit`.
Replace the mock delay with your real API call:

**Supabase:**
```ts
const { error } = await supabase.from("rsvps").insert({ ...form });
```

**Formspree (no backend needed):**
```ts
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**EmailJS:**
```ts
await emailjs.send("SERVICE_ID", "TEMPLATE_ID", { ...form }, "PUBLIC_KEY");
```

---

## Languages (EN / ES)

Spanish translations live in `contentES` at the bottom of `content.ts`.
The language switcher (top-right pill) toggles between them automatically.
To disable: set `enableLanguageSwitcher: false` in `content.ts`.

---

## Folder Tree

```
WED/
├── public/
│   ├── favicon.svg
│   ├── audio/           ← drop background.mp3 here
│   ├── images/          ← drop your photos here
│   └── video/           ← drop hero.mp4 / intro.mp4 here
├── src/
│   ├── content/
│   │   └── content.ts          ← ALL editable content
│   ├── context/
│   │   ├── LanguageContext.tsx
│   │   └── MusicContext.tsx
│   ├── hooks/
│   │   └── useCountdown.ts
│   ├── components/
│   │   ├── IntroScreen.tsx     ← Splash / enter screen
│   │   ├── LanguageSwitcher.tsx
│   │   ├── MusicButton.tsx
│   │   ├── SectionDivider.tsx  ← Ornamental dividers between sections
│   │   ├── Hero.tsx
│   │   ├── Countdown.tsx
│   │   ├── Welcome.tsx
│   │   ├── GalleryMarquee.tsx
│   │   ├── Venue.tsx
│   │   ├── Timeline.tsx
│   │   ├── VenuePhoto.tsx
│   │   ├── InformalEvents.tsx
│   │   ├── Location.tsx
│   │   ├── Accommodation.tsx
│   │   ├── RSVP.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```
