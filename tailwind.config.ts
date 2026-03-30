import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory:          "#F8F5EF",
        cream:          "#F2EDE3",
        champagne:      "#E8DFC8",
        "champagne-light": "#F1EBDA",
        "champagne-dark":  "#C4B28A",
        gold:           "#C5A46D",
        "gold-light":   "#DFC28A",
        "gold-soft":    "#9E7E4A",
        forest:         "#1B2F2F",
        "forest-dark":  "#122424",
        "forest-light": "#243D3D",
        "sage-dark":    "#4A3728",
        sage:           "#6B5744",
        "sage-light":   "#9E8560",
        carbon:         "#1A1008",
      },
      fontFamily: {
        display: ["Great Vibes", "cursive"],
        body:    ["Cormorant Garamond", "Georgia", "serif"],
        sans:    ["Cormorant Garamond", "Georgia", "serif"],
        cinzel:  ["Cinzel", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.5" },
        },
      },
      animation: {
        marquee:           "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      boxShadow: {
        soft:    "0 2px 15px -3px rgba(27,47,47,.12), 0 4px 6px -2px rgba(27,47,47,.06)",
        elegant: "0 10px 40px -10px rgba(27,47,47,.18), 0 4px 15px -3px rgba(27,47,47,.10)",
        lifted:  "0 20px 50px -15px rgba(27,47,47,.22), 0 8px 20px -5px rgba(27,47,47,.12)",
        gold:    "0 4px 24px -4px rgba(197,164,109,.35)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;
