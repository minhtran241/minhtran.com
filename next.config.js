/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'avatars.githubusercontent.com',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'opengraph.githubassets.com',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'img.shields.io',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'i.scdn.co',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'github.com',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'placehold.co',
            // },
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
