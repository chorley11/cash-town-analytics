import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0a0a0a",
          panel: "#111111",
          border: "#1f1f1f",
          green: "#00ff88",
          red: "#ff4444",
          yellow: "#ffcc00",
          blue: "#00aaff",
          muted: "#666666",
          text: "#e0e0e0",
        }
      },
      fontFamily: {
        mono: ["SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
