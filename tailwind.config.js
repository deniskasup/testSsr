const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Lato', ...defaultTheme.fontFamily.sans],
            },
        }
    }
}
