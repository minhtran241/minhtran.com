import { SOCIAL_MEDIA, MENU_TABS } from '@/common/constants/menu';
import { userBasicInfo } from '@/common/constants/userBasic';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white mt-12">
            <nav className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
                {MENU_TABS.map((item, index) => (
                    <Link
                        href={item.href}
                        className="link link-hover font-semibold"
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
                <div className="flex items-center justify-center gap-2">
                    <p>Designed and developed by</p>
                    <Link
                        href={userBasicInfo.githubLink || '#'}
                        className="hover:underline"
                    >
                        Minh Tran
                    </Link>{' '}
                    <p>@ {new Date().getFullYear()}</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <p className="">Hosted on</p>
                    <Link href="https://vercel.com" target="_blank">
                        <Image
                            src="https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg"
                            alt="Vercel"
                            width={0}
                            height={0}
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;
