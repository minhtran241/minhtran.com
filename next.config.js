/** @type {import('next').NextConfig} */

const nextConfig = {
    // Target must be serverless for Vercel
    basePath: '',
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
