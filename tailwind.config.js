/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseExpand: {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0.8",
          },
          "50%": {
            transform: "scale(1)",
            opacity: "0.4",
          },
          "100%": {
            transform: "scale(0.5)",
            opacity: "0.8",
          },
        },
      },
      animation: {
        "pulse-grow": "pulseExpand 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
