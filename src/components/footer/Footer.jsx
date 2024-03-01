import {
    Mail,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Github,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const linksTab = [
        {
            title: 'About',
            path: '/',
        },
        {
            title: 'Projects',
            path: '/project',
        },
        {
            title: 'Blogs',
            path: '/blog',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
    ];
    const iconsTab = [
        {
            icon: <Mail className="h-6 w-6 cursor-pointer" />,
            link: `mailto:${process.env.EMAIL}`,
        },
        {
            icon: <Github className="h-6 w-6 cursor-pointer" />,
            link: process.env.GITHUB_LINK,
        },
        {
            icon: <Linkedin className="h-6 w-6 cursor-pointer" />,
            link: process.env.LINKEDIN_LINK,
        },
        {
            icon: <Instagram className="h-6 w-6 cursor-pointer" />,
            link: process.env.INSTAGRAM_LINK,
        },
        {
            icon: <Facebook className="h-6 w-6 cursor-pointer" />,
            link: process.env.FACEBOOK_LINK,
        },
        {
            icon: <Twitter className="h-6 w-6 cursor-pointer" />,
            link: process.env.TWITTER_LINK,
        },
    ];
    return (
        <footer className="footer footer-center p-10 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white rounded">
            <nav className="grid grid-flow-col gap-4">
                {linksTab.map((link, index) => (
                    <Link
                        href={link.path}
                        className="link link-hover"
                        key={index}
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    {iconsTab.map(({ icon, link }, index) => (
                        <Link
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {icon}
                        </Link>
                    ))}
                </div>
            </nav>
            <aside>
                <p>
                    Designed and developed by{' '}
                    <Link
                        href={process.env.GITHUB_LINK}
                        className="hover:underline"
                    >
                        Minh Tran
                    </Link>{' '}
                    @ {new Date().getFullYear()}
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
