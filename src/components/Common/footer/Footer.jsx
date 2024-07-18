import { SOCIAL_MEDIA } from '@/common/constants/menu';
import { userBasicInfo } from '@/common/constants/userBasic';
import Link from 'next/link';
import { MENU_TABS } from '@/common/constants/menu';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content rounded">
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
            <aside className="flex items-center">
                <span>A work by </span>
                <Link
                    href={userBasicInfo.githubLink || '#'}
                    className="link link-hover"
                >
                    {userBasicInfo.fullName}
                </Link>
                <span>@ {new Date().getFullYear()}</span>
            </aside>
        </footer>
    );
};

export default Footer;
