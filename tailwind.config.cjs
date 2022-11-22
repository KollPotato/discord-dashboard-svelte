/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
      extend: {},
      outlineWidth: {
        "3": "3px"
      },
      colors: {
          black: "#1E1E1E",
          white: "#FFF",
          primary: {
              "50": '#f6f6ff',
              "100": '#ecedff',
              "200": '#d1d3ff',
              "300": '#b5b8ff',
              "400": '#7d82ff',
              "500": '#454dff',
              "600": '#3e45e6',
              "700": '#343abf',
              "800": '#292e99',
              "900": '#22267d'
          }
      },
      fontFamily: {
          sans: ["Mulish"],
          display: ["Mulish"],
          body: ["Mulish"]
      }
  },
  plugins: []
}
