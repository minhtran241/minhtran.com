import { userBasicInfo } from '@/common/constants/userBasic';
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
            link: `mailto:${userBasicInfo.email}`,
        },
        {
            icon: <Github className="h-6 w-6 cursor-pointer" />,
            link: userBasicInfo.githubLink,
        },
        {
            icon: <Linkedin className="h-6 w-6 cursor-pointer" />,
            link: userBasicInfo.linkedinLink,
        },
        {
            icon: <Instagram className="h-6 w-6 cursor-pointer" />,
            link: userBasicInfo.instagramLink,
        },
        {
            icon: <Facebook className="h-6 w-6 cursor-pointer" />,
            link: userBasicInfo.facebookLink,
        },
        {
            icon: <Twitter className="h-6 w-6 cursor-pointer" />,
            link: userBasicInfo.twitterLink,
        },
    ];
    return (
        <footer className="footer footer-center p-10 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white rounded mt-12">
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
                        href={userBasicInfo.githubLink || '#'}
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
