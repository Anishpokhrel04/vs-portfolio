/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#333333", // Dark Background
        "text-color": "#D4D4D4", // Foreground Text Color
        "bg-light": "#252526",
        "text-light": "#707074",
        "bg-sidebar": "#1e1e1e",
        "primary-color": "#007ACC", // Primary Selection
        "secondary-color": "#6A9955", // Comment Color
        "error-color": "#F44747", // Error Color
      },
    },
  },
  plugins: [],
};
