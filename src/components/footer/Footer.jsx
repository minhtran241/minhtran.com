// import styles from './footer.module.css';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Github,
    Database,
    Hexagon,
    LayoutTemplate,
    PanelsTopLeft,
    Home,
    Send,
    Newspaper,
    Users,
    Layers,
    Link2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const iconsTab = [
        { icon: <Facebook className="h-[1.2rem] w-[1.2rem]" /> },
        { icon: <Twitter className="h-[1.2rem] w-[1.2rem]" /> },
        { icon: <Instagram className="h-[1.2rem] w-[1.2rem]" /> },
        { icon: <Linkedin className="h-[1.2rem] w-[1.2rem]" /> },
        { icon: <Github className="h-[1.2rem] w-[1.2rem]" /> },
    ];
    return (
        // <div className={styles.container}>
        <div className="p-12 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white">
            {/* footer div all */}
            <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] sm:gap-[5rem] text-left">
                {/* logo side */}
                <div className="flex flex-col w-1/2 md:p-0 py-4 gap-5">
                    {/* <Image
                        src="/logo.svg"
                        alt="logo"
                        width={150}
                        height={50}
                        className="invert"
                    />
                    <p className="text-[15px] font-medium">
                        A modern web application template that helps you build
                        stunning web applications and sites.
                    </p> */}
                    <p className="text-2xl font-bold">minhtran.com</p>
                    {/* socials */}
                    <div className="flex gap-5 text-[14px] justify-center md:justify-start">
                        {iconsTab.map(({ icon }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="hover:bg-white dark:hover:bg-white hover:text-[#0033A0] dark:hover:text-black rounded-full p-2 cursor-pointer border border-gray-300 dark:border-white"
                                    style={{ transition: 'all 0.3s' }}
                                >
                                    {icon}
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-[15px] font-medium">
                        Privacy Policy | © {new Date().getFullYear()} Nextcorp{' '}
                        <br /> Designed by{' '}
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href="https://minhtran.netlify.com"
                            className="hover:underline"
                        >
                            Minh Tran
                        </Link>
                    </p>
                </div>

                {/* middle div */}
                <div className="flex flex-col gap-8 relative">
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
                </div>

                {/* right div */}
                <div className="flex flex-col gap-8 relative">
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
                </div>

                {/* middle div */}
                <span></span>
            </div>
        </div>
        // </div>
    );
};

export default Footer;
