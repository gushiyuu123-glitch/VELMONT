/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmont: {
          black: "#111214",
          surface: "#2B2F34",
          silver: "#C2C8CE",
          stone: "#F3F4F2",
          accent: "#8C98A3",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
      letterSpacing: {
        logo: "0.12em",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.18)",
      },
      backgroundImage: {
        "velmont-overlay":
          "linear-gradient(to right, rgba(17,18,20,0.78) 0%, rgba(17,18,20,0.46) 42%, rgba(17,18,20,0.16) 100%)",
      },
    },
  },
  plugins: [],
}