/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        // domains: ['images.pexels.com', 'avatars.githubusercontent.com'],
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'images.pexels.com',
            // },
            // {
            //     protocol: 'https',
            //     hostname: 'avatars.githubusercontent.com',
            // },
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
