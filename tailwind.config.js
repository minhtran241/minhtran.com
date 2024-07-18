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
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            typography: {
                DEFAULT: { css: disabledCss },
                sm: { css: disabledCss },
                lg: { css: disabledCss },
                xl: { css: disabledCss },
                '2xl': { css: disabledCss },
                base: { css: disabledCss },
            },
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
			'light',
			'dark',
			'cupcake',
			'cyberpunk',
			'nord',
			'night',
			'autumn',
			'winter',
			'dracula',
			'forest',
			'sunset',
			'cmyk', 
			'corporate',
			'synthwave',
			'retro',
			'fantasy',
			'lofi'
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
    },
};
