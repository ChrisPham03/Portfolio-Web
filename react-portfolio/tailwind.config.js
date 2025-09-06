// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
    colors: {
      primary: "#6366F1",   // example
      accent:  "#F9F9F9",
      green: "#26FFCC"   // example
    },
  },
},
  plugins: [],
};
