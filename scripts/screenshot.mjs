/**
 * screenshot.mjs
 * Opens the local dev site, scrolls through every section, and saves screenshots.
 * Run: node scripts/screenshot.mjs
 * Screenshots saved to: scripts/screenshots/
 */

import puppeteer from "puppeteer-core";
import { mkdir } from "fs/promises";
import path from "path";

const URL = "http://localhost:5173";
const OUT_DIR = path.resolve("scripts/screenshots");
const VIEWPORT = { width: 430, height: 932 }; // iPhone 14 Pro Max

await mkdir(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: false,
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  defaultViewport: VIEWPORT,
  args: ["--window-size=430,932"],
});

const page = await browser.newPage();
await page.setViewport(VIEWPORT);

console.log("Opening site...");
await page.goto(URL, { waitUntil: "networkidle2", timeout: 15000 });

// ── 1. Intro screen (black / tap screen) ──────────────────────
await page.screenshot({ path: `${OUT_DIR}/00-intro.png` });
console.log("✓ 00-intro");

// Tap to skip intro / start video, then skip video
await page.click("body");
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: `${OUT_DIR}/01-video.png` });

// Wait for video to finish OR force-end it after 3s
await page.evaluate(() => {
  const v = document.querySelector("video");
  if (v) { v.currentTime = v.duration || 9999; v.dispatchEvent(new Event("ended")); }
});
await new Promise(r => setTimeout(r, 1200));

// ── 2. Scroll through the whole page ──────────────────────────
const sections = [
  { name: "02-hero",            scroll: 0 },
  { name: "03-countdown",       scroll: 900 },
  { name: "04-welcome",         scroll: 1800 },
  { name: "05-venue",           scroll: 2700 },
  { name: "06-timeline",        scroll: 3600 },
  { name: "07-venue-photo",     scroll: 4500 },
  { name: "08-informal-events", scroll: 5200 },
  { name: "09-location",        scroll: 6100 },
  { name: "10-accommodation",   scroll: 7000 },
  { name: "11-rsvp",            scroll: 7900 },
  { name: "12-footer",          scroll: 9999 },
];

for (const { name, scroll } of sections) {
  await page.evaluate(y => window.scrollTo({ top: y, behavior: "instant" }), scroll);
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: `${OUT_DIR}/${name}.png` });
  console.log(`✓ ${name}`);
}

// ── 3. Arabic mode ────────────────────────────────────────────
const arBtn = await page.$('button[aria-label*="AR"], button[data-lang="ar"]');
if (arBtn) {
  await arBtn.click();
  await new Promise(r => setTimeout(r, 800));
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({ path: `${OUT_DIR}/13-hero-arabic.png` });
  console.log("✓ 13-hero-arabic");
  await page.evaluate(() => window.scrollTo({ top: 9999, behavior: "instant" }));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${OUT_DIR}/14-footer-arabic.png` });
  console.log("✓ 14-footer-arabic");
}

// ── 4. Full-page screenshot ───────────────────────────────────
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: `${OUT_DIR}/full-page.png`, fullPage: true });
console.log("✓ full-page (full scroll)");

await browser.close();
console.log(`\nAll screenshots saved to: ${OUT_DIR}`);
