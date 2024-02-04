/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#292828",
          "200": "#262626",
          "300": "rgba(38, 38, 38, 0.99)",
          "400": "rgba(255, 255, 255, 0.2)",
        },
        slateblue: "#764cc2",
        darkslategray: {
          "100": "#313131",
          "200": "#292d32",
        },
        dimgray: {
          "100": "#696969",
          "200": "#565656",
        },
        black: "#000",
        darkgray: "#a0a0a0",
        whitesmoke: "#ededed",
        gainsboro: "#d8d8d8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "dm-sans": "'DM Sans'",
        raleway: "Raleway",
        "reckless-neue": "'Reckless Neue'",
        "gloria-hallelujah": "'Gloria Hallelujah'",
      },
    },
    fontSize: {
      xl: "20px",
      xs: "12px",
      sm: "14px",
      "5xl": "24px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
