'use client';

import { SOCIAL_MEDIA } from '@/common/constants/menu';
import { userBasicInfo } from '@/common/constants/userBasic';
import Link from 'next/link';
import { MENU_TABS } from '@/common/constants/menu';
import { HOSTED_ON, TECHSTACK } from '@/common/constants/site';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content rounded-t-box">
            <nav className="grid grid-flow-col gap-4">
                {/* <Link href="/" className="link link-hover">
                    Minh
                </Link> */}
                {MENU_TABS.slice(1).map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="link link-hover"
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 fa-lg">
                    {SOCIAL_MEDIA?.filter((item) =>
                        item.type.includes('s')
                    ).map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="fill-current"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </nav>
            <aside className="flex flex-col items-center">
                <div className="">
                    Powered by{' '}
                    {Object.entries(TECHSTACK).map(([key, value], index) => (
                        <Link
                            href={value}
                            key={index}
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent"
                        >
                            {index !== Object.entries(TECHSTACK).length - 1
                                ? `${key}, `
                                : `and ${key}`}
                        </Link>
                    ))}
                    {/* . Hosted on{' '}
                    <Link
                        href={HOSTED_ON.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent"
                    >
                        {HOSTED_ON.name}
                    </Link>
                    . */}
                </div>
                <p className="flex items-center">
                    © {new Date().getFullYear()} {userBasicInfo.fullName}
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
