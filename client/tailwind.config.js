const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            'primary-main': '#5b21b6',
            'primary-alt': '#8b5cf6',
            'primary-dark': '#4b1b96',
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
            keyframes: {
                hideSelect: {
                    '0%': { transform: 'scaleY(1)' },
                    '100%': { transform: 'scaleY(0)' },
                },
                loadSpinner: {
                    '0%': {
                        top: '40px',
                        left: '40px',
                        // top: '36px',
                        // left: '36px',
                        width: 0,
                        height: 0,
                        opacity: 1,
                    },
                    '100%': {
                        top: '0px',
                        left: '0px',
                        width: '80px',
                        height: '80px',
                        // width: '72px',
                        // height: '72px',
                        opacity: 0,
                    },
                },
            },
            animation: {
                hideSelect: 'hideSelect 0.5s forwards 0.5s',
                loadSpinner: 'loadSpinner 1.25s cubic-bezier(0, 0.2, 0.8, 1) infinite',
            },
        },
    },
    plugins: [],
}
