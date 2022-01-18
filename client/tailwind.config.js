const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            'primary-main': '#5b21b6',
            'primary-alt': '#8b5cf6',
            'dark-main': '#1e1e1e',
            'dark-alt': '#333333',
            'light-main': '#fefefe',
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.gray,
            neutral: colors.neutral,
            violet: colors.violet,
            indigo: colors.indigo,
        },
        extend: {
            transformOrigin: {
                0: '0%',
            },
        },
    },
    plugins: [],
}
