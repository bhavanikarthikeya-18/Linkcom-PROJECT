/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #059669, #0d9488)",
        "custom-gradient-2": "linear-gradient(to left, #059669, #f59e0b)",
        "card-gradient": "linear-gradient(to right, #10b981, #0d9488)",
      },
      colors: {
        navbarColor: "#ffffff",
        btnColor: "#059669",
        linkColor: "#0d9488",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
