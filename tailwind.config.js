/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            grayscale: {
                40: '40%',
            },
            overscrollBehavior: {
                'inline-auto': 'auto',
                'inline-contain': 'contain',
                'inline-none': 'none',
            },
            inset: {
                '48%': 'calc(48%)',
            },
            spacing: {
                '128': '32rem',
                '172': '43rem',
                '236': '59rem',
            },
            minWidth: {
                '25%': 'calc(25%)',
                '33%': 'calc(33.33%)',
                '1/2': '50%',
                '148': '37rem',
                '184': '46rem',
            },
            colors: {
                'eerie-black': '#1E1E1FFF',
                'jet': '#383838FF',
                'onyx': '#2B2B2CFF',
                'onyx-light': '#3F3F40FF',
                'onyx-dark': '#303030FF',
                'gray': '#D6D6D6FF',
                'gray-70': '#D6D6D6B2',
                'pink': '#FF0077FF',
                'pink-light': '#FF66ADFF',
                'pink-dark': '#CC0085FF',
                'dark-lighter': '#0000004C',
            },
        },
    },
    plugins: [
        function ({addUtilities}) {
            const newUtilities = {
                '.overscroll-inline-auto': {
                    'overscroll-behavior-inline': 'auto',
                },
                '.overscroll-inline-contain': {
                    'overscroll-behavior-inline': 'contain',
                },
                '.overscroll-inline-none': {
                    'overscroll-behavior-inline': 'none',
                },
                '.transform-translate-center-scale-80': {
                    transform: 'translate(-50%, -50%) scale(0.8)',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
}

