/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontPoetsenOne: ["Poetsen One", "sans-serif"],
        fontEdu: ["Edu AU VIC WA NT Pre", "cursive"],
        fontCursive: ["cursive"],
      },
    },
  },
  plugins: [],
};
