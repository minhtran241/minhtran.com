import './globals.css';
import '../../assets/fa6/css/brands.min.css';
import '../../assets/fa6/css/fontawesome.min.css';
import '../../assets/fa6/css/duotone.min.css';
import '../../assets/fa6/css/solid.min.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Common/navbar/Navbar';
import Footer from '@/components/Common/footer/Footer';
// import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/common/libs/cn';
import { ThemeProvider } from '@/components/Common/themeProvider/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import SpotifyComponent from '@/components/spotifyComponent';
import {
    SITE_URL,
    SITE_TITLE,
    SITE_DESCRIPTION,
    SITE_NAME,
} from '@/common/constants/site';
import CustomCursor from '@/components/Common/cursor/CustomCursor';

const MazzardH = localFont({
    src: [
        {
            path: '../../assets/font/Mazzard/MazzardH-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardH-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardH-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardH-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-mazzardh',
});

const MazzardL = localFont({
    src: [
        {
            path: '../../assets/font/Mazzard/MazzardL-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardL-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardL-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardL-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-mazzardl',
});

const MazzardM = localFont({
    src: [
        {
            path: '../../assets/font/Mazzard/MazzardM-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardM-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardM-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../assets/font/Mazzard/MazzardM-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-mazzardm',
});

// export const fontSans = FontSans({
//     subsets: ['latin'],
//     variable: '--font-sans',
// });

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_TITLE}`,
    },
    description: SITE_DESCRIPTION,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    manifest: '/favicon/site.webmanifest',
    twitter: {
        card: 'summary_large_image',
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        site: '@minhtran241',
        creator: '@minhtran241',
        images: [
            {
                url: '/favicon/apple-touch-icon.png',
                width: 1200,
                height: 630,
                alt: SITE_DESCRIPTION,
            },
        ],
    },
    keywords: ['minhtran241', 'Next.js', 'React', 'Node.js', 'Tailwind CSS'],
    creator: 'minhtran241',
    openGraph: {
        url: SITE_URL,
        type: 'website',
        title: SITE_TITLE,
        siteName: SITE_TITLE,
        description: SITE_DESCRIPTION,
        locale: 'en-US',
        images: [
            {
                url: '/favicon/apple-touch-icon.png',
                width: 1200,
                height: 630,
                alt: SITE_DESCRIPTION,
                type: 'image/png',
            },
        ],
    },
    icons: {
        icon: '/favicon/favicon.svg',
        shortcut: '/favicon/favicon.svg',
        apple: [
            {
                url: '/favicon/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        other: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/favicon/favicon-16x16.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon/favicon-32x32.png',
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={cn('scroll-smooth')}>
            <head>
                <script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id={process.env.UMAMI_WEBSITE_ID}
                ></script>
            </head>
            <body
                className={`${MazzardH.variable} ${MazzardL.variable} ${MazzardM.variable} font-mazzardh`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <div className="dark:text-white text-black bg-white dark:bg-black">
                        <CustomCursor />
                        {children}
                        <SpeedInsights />
                        <Analytics />
                    </div>
                    <SpotifyComponent />
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
