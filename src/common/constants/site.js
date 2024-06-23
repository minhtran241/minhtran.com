export const SITE_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://minhtran.com'
        : 'http://localhost:3000';

export const SITE_NAME = 'Minh Tran';
export const SITE_TITLE = 'Minh Tran - Software Engineer / Data Engineer';
export const SITE_DESCRIPTION =
    'Personal website of Minh Tran, a software engineer and data engineer.';

export const TECHSTACK = [
    {
        name: 'Figma',
        link: 'https://www.figma.com',
        logo: '/logos/figma-color.svg',
        alt: 'Figma Logo',
    },
    {
        name: 'Next.js',
        link: 'https://nextjs.org',
        logo: '/logos/nextdotjs-color.svg',
        alt: 'Next.js Logo',
        invert: true,
    },
    {
        name: 'Tailwind CSS',
        link: 'https://tailwindcss.com',
        logo: '/logos/tailwindcss-color.svg',
        alt: 'Tailwind CSS Logo',
    },
    {
        name: 'JavaScript',
        link: 'https://www.javascript.com',
        logo: '/logos/javascript-color.svg',
        alt: 'JavaScript Logo',
    },
    {
        name: 'DaisyUI',
        link: 'https://www.daisyui.com',
        logo: '/logos/daisyui-color.svg',
        alt: 'DaisyUI Logo',
    },
    {
        name: 'ShadcnUI',
        link: 'https://ui.shadcn.com',
        logo: '/logos/shadcnui-color.svg',
        alt: 'ShadcnUI Logo',
        invert: true,
    },
    {
        name: 'Lucide',
        link: 'https://www.lucide.dev',
        logo: '/logos/lucide-color.svg',
        alt: 'Lucide Logo',
    },
];

export const CONSUMED_APIS = [
    {
        name: 'GitHub',
        link: 'https://developer.github.com/v3/',
        logo: '/logos/github-color.svg',
        alt: 'Github Logo',
        invert: true,
    },
    {
        name: 'WakaTime',
        link: 'https://wakatime.com/developers',
        logo: '/logos/wakatime.svg',
        alt: 'WakaTime Logo',
        invert: true,
    },
    {
        name: 'Spotify',
        link: 'https://developer.spotify.com/documentation/web-api/',
        logo: '/logos/spotify-color.svg',
        alt: 'Spotify Logo',
    },
    {
        name: 'Cal',
        link: 'https://developer.cal.com',
        logo: '/logos/caldotcom-color.svg',
        alt: 'Cal Logo',
		invert: true
    },
];
