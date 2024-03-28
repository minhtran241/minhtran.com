import { SOCIAL_MEDIA, MENU_TABS } from '@/common/constants/menu';
import { userBasicInfo } from '@/common/constants/userBasic';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white rounded mt-12">
            <nav className="grid grid-flow-col gap-4">
                {MENU_TABS.map((item, index) => (
                    <Link
                        href={item.href}
                        className="link link-hover"
                        key={index}
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    {SOCIAL_MEDIA?.filter((item) =>
                        item.type.includes('s')
                    ).map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="w-5 h-5"
                        >
                            {item.icon}
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
