const colors = require("tailwindcss/colors")

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,svelte,ts}"
    ],

    theme: {
        extend: {
            outlineWidth: {
                "1": "1px",
                "2": "2px",
                "3": "3px",
                "4": "4px",
                "5": "5px",
                "6": "6px",
                "7": "7px",
                "8": "8px",
            },
            colors: {
                primary: colors.indigo
            }
        },
        fontFamily: {
            sans: ["Mulish"],
            display: ["Mulish"],
            body: ["Mulish"]
        }
    }
}
