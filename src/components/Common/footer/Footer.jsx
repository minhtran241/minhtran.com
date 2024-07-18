import { SOCIAL_MEDIA } from '@/common/constants/menu';
import { userBasicInfo } from '@/common/constants/userBasic';
import Link from 'next/link';
import { MENU_TABS } from '@/common/constants/menu';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content py-12 gap-6">
            <nav className="grid grid-flow-col gap-4">
			<Link href='/' className="link link-hover">Minh</Link>
			{MENU_TABS.slice(1).map((item, index) => (
                <Link key={index} href={item.href} className="link link-hover">{item.title}</Link>
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
                            className="btn btn-ghost fill-current fa-lg"
                            role="button"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </nav>
            <aside className="flex items-center">
                <span>Designed and developed by</span>
                {/* <span> </span> */}
                <Link
                    href={userBasicInfo.githubLink || '#'}
                    className="link link-hover"
                >
                    {userBasicInfo.fullName}
                </Link>
                {/* <span> </span> */}
                <span>@ {new Date().getFullYear()}</span>
            </aside>
        </footer>
    );
};

export default Footer;
