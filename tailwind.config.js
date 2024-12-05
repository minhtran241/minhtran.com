/** @type {import('tailwindcss').Config} */

const disabledCss = {
    'code::before': false,
    'code::after': false,
    'blockquote p:first-of-type::before': false,
    'blockquote p:last-of-type::after': false,
    pre: false,
    code: false,
    'pre code': false,
    'code::before': false,
    'code::after': false,
};

module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './src/app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: '',
    theme: {
        screens: {
            sm: '540px',
            md: '720px',
            lg: '960px',
            'lg-max': { max: '960px' },
            xl: '1140px',
            '2xl': '1320px',
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                sm: '540px',
                md: '720px',
                lg: '960px',
                'lg-max': { max: '960px' },
                xl: '1140px',
                '2xl': '1320px',
            },
        },
        extend: {
            fontFamily: {
                mazzardl: 'var(--font-mazzardl)',
                mazzardh: 'var(--font-mazzardh)',
                mazzardm: 'var(--font-mazzardm)',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'scroll-reverse': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'infinite-slider': 'scroll 25s linear infinite',
                'infinite-slider-reverse': 'scroll-reverse 25s linear infinite',
            },

            typography: {
                DEFAULT: { css: disabledCss },
                sm: { css: disabledCss },
                lg: { css: disabledCss },
                xl: { css: disabledCss },
                '2xl': { css: disabledCss },
                base: { css: disabledCss },
            },
            colors: {},
        },
    },
    plugins: [
        require('daisyui'),
        require('tailwind-scrollbar')({ nocompatible: true }),
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
    ],

    daisyui: {
        themes: [
            // 'light',
            // 'dark',
            'winter',
            'night',
            'lofi',
            'corporate',
        ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkMode: ['selector', '[data-theme="night"]'],
        darkTheme: 'night', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
    },
};
