import { SOCIAL_MEDIA } from '@/common/constants/menu';
import { userBasicInfo } from '@/common/constants/userBasic';
import { TECHSTACK, CONSUMED_APIS } from '@/common/constants/site';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white mt-12 gap-6">
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
                            className="lg:w-5 lg:h-5 w-4 h-4 hover:opacity-70 dark:hover:text-blue-600 transition"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </nav>
            <aside className="items-center justify-center  lg:text-base md:text-sm sm:text-xs text-xs">
                <div className="">
                    <span>Designed and developed by</span>
                    <span> </span>
                    <Link
                        href={userBasicInfo.githubLink || '#'}
                        className="hover:underline"
                    >
                        {userBasicInfo.fullName}
                    </Link>
                    <span> </span>
                    <span>@ {new Date().getFullYear()}</span>
                </div>
                {/* <div className="flex items-center justify-center gap-2">
                    <p className="">Hosted on</p>
                    <Link href="https://vercel.com" target="_blank">
                        <img
                            src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
                            alt="Vercel Logo"
                            className="!rounded h-6 w-auto"
                        />
                    </Link>
                </div> */}
                {/* Built with */}
                <div className="flex items-center gap-2">
                    <p className="">Built with</p>
                    {TECHSTACK.map((item, index) => (
                        <Link key={index} href={item.link} target="_blank">
                            <Image
                                src={item.logo}
                                alt={item.alt}
                                width={20}
                                height={20}
                                className={`h-4 w-auto ${
                                    item.invert ? 'filter invert' : ''
                                }`}
                            />
                        </Link>
                    ))}
                </div>
                {/* APIs Usage */}
                <div className="flex items-center gap-2">
                    <p className="">Consuming APIs from</p>
                    {CONSUMED_APIS.map((item, index) => (
                        <Link key={index} href={item.link} target="_blank">
                            <Image
                                src={item.logo}
                                alt={item.alt}
                                width={20}
                                height={20}
                                className={`h-4 w-auto ${
                                    item.invert ? 'filter invert' : ''
                                }`}
                            />
                        </Link>
                    ))}
                </div>
            </aside>
        </footer>
    );
};

export default Footer;
