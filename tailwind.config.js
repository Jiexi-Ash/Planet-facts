/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "440px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        darkPurple: "hsl(240,67%, 8%)",
        darkishPurple: "hsl(240,17%, 26%)",
        darkishGray: "hsl(240,6%, 54%)",
        turquoise: "hsl(194,48%, 49%)",
        darkishYellow: "hsl(33, 82%, 61%)",
        lightPurple: "hsl(263,67%,51%)",
        "red-1000": "hsl(10, 63%, 51%)",
        darkRed: "hsl(2, 68%, 53%)",
        darkOrange: "hsl(17, 73%, 46%)",
        greenish: "hsl(169, 73%, 44%)",
        darkishBlue: "hsl(222, 87%, 56%)",
        fadeishGray: "#979797  ",
        divideGray: "rgba(151,151,151,0.3)",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        "League-Spartan": ["League Spartan", "serif"],
      },
      backgroundImage: {
        stars: "url(/images/background-stars.svg')",
      },
    },
  },
  plugins: [],
};
