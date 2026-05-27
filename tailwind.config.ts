import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        carbon: "#0b0b0c",
        panel: "#111113",
        line: "rgba(255,255,255,0.12)",
        bone: "#f3f0e8",
        muted: "#a7a7a7",
        silver: "#c7c7c7"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0,0,0,0.36)",
        silver: "0 0 0 1px rgba(255,255,255,0.10), 0 20px 70px rgba(255,255,255,0.05)"
      }
    }
  },
  plugins: []
};

export default config;
