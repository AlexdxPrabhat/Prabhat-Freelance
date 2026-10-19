/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4f2ec",
        card: "#fbfaf7",
        ink: "#16150f",
        soft: "#55534b",
        faint: "#8b887d",
        line: "#dedad0",
        // Single accent, used sparingly
        accent: "#1f8a5b",
        "accent-soft": "#e2f0e8",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        display: ['"Bricolage Grotesque Variable"', '"Inter Variable"', "sans-serif"],
      },
      screens: { xs: "420px" },
    },
  },
  plugins: [],
};
