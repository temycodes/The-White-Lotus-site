/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FAFAF8",
          100: "#F2F1EC",
          200: "#E3E0D6",
          300: "#CFC9BA",
          400: "#B8B09B",
          500: "#9A917B",
          600: "#7C7460",
          700: "#5F5848",
          800: "#403B30",
          900: "#2A261F",
          950: "#1C1915",
        },

        accent: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
          950: "#4D2E0B",
        },
      },
    },
  },
  plugins: [],
};
