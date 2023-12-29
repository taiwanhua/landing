/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "top-color": "#1A202C",
        "top-hint-color": "#414141",
        "get-stack-hint-color": "#979797",
        "akohub-color": "#F6AD55",
        "green-hint-color": "#399690",
        "blue-color": "#3182CE",
      },
      fontSize: {
        "0.75rem": "0.75rem",
        "1rem": "1rem",
        "1.5rem": "1.5rem",
        "2.5rem": "2.5rem",
        "2.25rem": "2.25rem",
        "6rem": "6rem",
      },
      backgroundColor: {
        "top-color": "#D2E5DE",
        "service-color": "#F2F2DB",
        "green-hint-color": "#399690",
        "function-color": "#F0F0ED",
        "blue-color": "#3182CE",
        "orange-color": "#FBD38D",
        "green-safe-me-color": "#22543D",
        "green-install-color": "#C0E8D6",
        "yellow-good-color": "#FFBD00",
        "case-color": "#FFFAE9",
      },
      backgroundSize: {
        "100%-55%": "100% 55%",
        "80%-78%": "80% 78%",
      },
      backgroundImage: {
        "top-pattern": "url('src/assets/top.png')",
      },
      letterSpacing: {
        "little-widest": ".125rem",
        "0.80px": "0.80px",
        "1.20px": "1.20px",
        "1.80px": "1.80px",
        "4.80px": "4.80px",
      },
      fontFamily: {
        google: ["Noto Sans TC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
