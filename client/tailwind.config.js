/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      blue: "#003F62",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#198754",
      skyBulue: "#E2F4FF",
      yellow: "#EDA415",
      "gray-dark": "#3A3A3A",
      gray: "#8492a6",
      "gray-light": "#F4F4F4",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
