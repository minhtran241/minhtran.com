import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Github
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const iconsTab = {
        github: {
            icon: <Github className="h-5 w-5" />,
            link: process.env.GITHUB_LINK,
        },
        linkedin: {
            icon: <Linkedin className="h-5 w-5" />,
            link: process.env.LINKEDIN_LINK,
        },
        instagram: {
            icon: <Instagram className="h-5 w-5" />,
            link: process.env.INSTAGRAM_LINK,
        },
        facebook: {
            icon: <Facebook className="h-5 w-5" />,
            link: process.env.FACEBOOK_LINK,
        },
        twitter: {
            icon: <Twitter className="h-5 w-5" />,
            link: process.env.TWITTER_LINK,
        },
    };
    return (
        <div className="p-12 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white">
            {/* <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] sm:gap-[5rem] text-left"> */}
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-5 justify-end">
                <p className="text-2xl font-bold">minhtran.com</p>
                {/* socials */}
                <div className="flex gap-5 text-[14px] justify-center md:justify-start">
                    {/* {iconsTab.map(({ icon }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="hover:bg-white dark:hover:bg-white hover:text-[#0033A0] dark:hover:text-black rounded-full p-2 cursor-pointer border border-gray-300 dark:border-white"
                                    style={{ transition: 'all 0.3s' }}
                                >
                                    {icon}
                                </div>
                            );
                        })} */}
                    {Object.keys(iconsTab).map((key, index) => {
                        const { icon, link } = iconsTab[key];
                        return (
                            <Link
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:bg-white dark:hover:bg-white hover:text-[#0033A0] dark:hover:text-black rounded-full p-2 cursor-pointer border border-gray-300 dark:border-white"
                                style={{ transition: 'all 0.3s' }}
                            >
                                {icon}
                            </Link>
                        );
                    })}
                </div>
                <p className="text-[15px] font-medium">
                    Designed by{' '}
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href={process.env.GITHUB_LINK}
                        className="hover:underline"
                    >
                        Minh Tran
                    </Link>{' '}
                    @ {new Date().getFullYear()}
                </p>
            </div>

            {/* middle div */}
            {/* <div className="flex flex-col gap-8 relative">
                    <p className="text-lg font-semibold flex flex-row leading-none gap-2">
                        <Layers className="h-4 w-4" /> Technologies
                    </p>

                    <span className="top-[33px] absolute w-[5rem] h-[1px] bg-white"></span>

                    <Link
                        href="https://nextjs.org"
                        className="hover:underline flex flex-row gap-2 leading-none"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <PanelsTopLeft className="h-4 w-4" /> Next.js
                    </Link>
                    <Link
                        href="https://github.com/shadcn/ui"
                        className="hover:underline flex flex-row gap-2 leading-none"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <LayoutTemplate className="h-4 w-4" /> shadcn/ui
                    </Link>
                    <Link
                        href="https://elysiajs.com"
                        className="hover:underline flex flex-row gap-2 leading-none"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Layers className="h-4 w-4" /> Elysia.js
                    </Link>
                    <Link
                        href="https://www.postgresql.org"
                        className="hover:underline flex flex-row leading-none gap-2"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Database className="h-4 w-4" /> PostgreSQL
                    </Link>
                </div> */}

            {/* right div */}
            {/* <div className="flex flex-col gap-8 relative">
                    <p className="text-lg font-semibold flex flex-row leading-none gap-2">
                        <Link2 className="h-4 w-4" /> Links
                    </p>

                    <span className="top-[33px] absolute w-[5rem] h-[1px] bg-white"></span>

                    <Link
                        href="/"
                        className="hover:underline flex flex-row gap-2 leading-none"
                    >
                        <Home className="h-4 w-4" /> Home
                    </Link>
                    <Link
                        href="/about"
                        className="hover:underline flex flex-row gap-2 leading-none"
                    >
                        <Users className="h-4 w-4" /> About
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:underline flex flex-row gap-2 leading-none"
                    >
                        <Send className="h-4 w-4" /> Contact
                    </Link>
                    <Link
                        href="/blog"
                        className="hover:underline flex flex-row gap-2 leading-none"
                    >
                        <Newspaper className="h-4 w-4" /> Blog
                    </Link>
                </div> */}

            {/* middle div */}
            <span></span>
            {/* </div> */}
        </div>
        // </div>
    );
};

export default Footer;
