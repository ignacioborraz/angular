/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
    ],
    theme: {
        extend: {
            colors: {
                myti: "black",
                mytin: "#F9A8D4"
            },
            backgroundColor: {
                myti: "#F9A8D4",
                mytin: "black",
            }
        }
    },
    variants: {},
    plugins: []
}