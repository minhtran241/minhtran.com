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
            // colors: {
            //     border: 'hsl(var(--border))',
            //     input: 'hsl(var(--input))',
            //     ring: 'hsl(var(--ring))',
            //     background: 'hsl(var(--background))',
            //     foreground: 'hsl(var(--foreground))',
            //     primary: {
            //         DEFAULT: 'hsl(var(--primary))',
            //         foreground: 'hsl(var(--primary-foreground))',
            //     },
            //     secondary: {
            //         DEFAULT: 'hsl(var(--secondary))',
            //         foreground: 'hsl(var(--secondary-foreground))',
            //     },
            //     destructive: {
            //         DEFAULT: 'hsl(var(--destructive))',
            //         foreground: 'hsl(var(--destructive-foreground))',
            //     },
            //     muted: {
            //         DEFAULT: 'hsl(var(--muted))',
            //         foreground: 'hsl(var(--muted-foreground))',
            //     },
            //     accent: {
            //         DEFAULT: 'hsl(var(--accent))',
            //         foreground: 'hsl(var(--accent-foreground))',
            //     },
            //     popover: {
            //         DEFAULT: 'hsl(var(--popover))',
            //         foreground: 'hsl(var(--popover-foreground))',
            //     },
            //     card: {
            //         DEFAULT: 'hsl(var(--card))',
            //         foreground: 'hsl(var(--card-foreground))',
            //     },
            // },
            // borderRadius: {
            //     lg: 'var(--radius)',
            //     md: 'calc(var(--radius) - 2px)',
            //     sm: 'calc(var(--radius) - 4px)',
            // },
            // keyframes: {
            //     'accordion-down': {
            //         from: { height: '0' },
            //         to: { height: 'var(--radix-accordion-content-height)' },
            //     },
            //     'accordion-up': {
            //         from: { height: 'var(--radix-accordion-content-height)' },
            //         to: { height: '0' },
            //     },
            // },
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
        themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
    },
};
