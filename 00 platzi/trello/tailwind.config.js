/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        tblue: "#0052cc",
        sgray: "#f9fafb",
        tgray: "#4b5563",
        tgreen: "#5AAC44",
        hgreen: "#61BD4F",
        gray: "#dfe1e6"
      }
    },
  },
  plugins: [
    /* require('@tailwindcss/forms') */
  ],
}
