// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
    colors: {
      primary: "#005586", 
      secondary:"#00B4D8", // example
      accent:  "#F9F9F9",
      regularCyan:"#0099B8",
      veryLightBlue:"#C1E7FE",
      green: "#26FFCC"   // example
    },
  },
},
variants: {
    extend: {
      scale: ['section-group-hover'],
      dropShadow: ['section-group-hover'],
      // add more as needed
    },
  },
  plugins: [function ({ addVariant }) {
      addVariant('section-group-hover', '.section-group:hover &');
    }],
};
