/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7",
        "primary-dark": "#9333ea",
        foil: {
          DEFAULT: "#D4AF37",
          light: "#F0D060",
          dark: "#B8960F",
          dim: "#8B7320",
        },
        card: {
          bg: "#1a1410",
          border: "#2e2214",
          face: "#231d14",
          text: "#d4c5b2",
        },
        dark: "#100c08",
        darker: "#0a0705",
        border: "#2e2214",
        muted: "#a89478",
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "Consolas", "monospace"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        urbanist: ["Urbanist", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "foil-holo":
          "linear-gradient(135deg, #D4AF37 0%, #F0D060 25%, #C0A0E0 50%, #F0D060 75%, #D4AF37 100%)",
        "foil-move":
          "linear-gradient(45deg, #D4AF37, #F0D060, #C0A0E0, #F0D060, #D4AF37, #F0D060, #C0A0E0, #D4AF37)",
      },
      animation: {
        "foil-shift": "foil-shift 3s ease-in-out infinite",
        "foil-text": "foil-text 4s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "foil-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "foil-text": {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "200% 0%" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
}
