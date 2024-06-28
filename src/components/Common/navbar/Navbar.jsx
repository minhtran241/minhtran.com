import Links from './links/Links';
import DropdownTheme from '../themeProvider/dropdownTheme';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { getClient } from '@umami/api-client';
import Image from 'next/image';
import { userBasicInfo } from '@/common/constants/userBasic';

const Navbar = async () => {
    const client = getClient();
    const { ok, status, data, error } = await client.getWebsiteStats(
        process.env.UMAMI_WEBSITE_ID,
        {
            startAt: new Date().getTime() - 24 * 60 * 60 * 1000, // 24 hours ago
            endAt: new Date().getTime(),
        }
    );
    if (!ok || error) {
        console.error('Error fetching website stats', status, error);
    }

    const webstats = {
        Pageviews: data?.pageviews?.value,
        Visits: data?.visits?.value,
        Visitors: data?.visitors?.value,
    };
    return (
        <div className="navbar bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <Menu className="lg:h-5 lg:w-5 h-4 w-4" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box mt-3 z-[1] p-2 shadow text-black dark:text-white bg-white dark:bg-gray-900"
                    >
                        <Links />
                    </ul>
                </div>
                <Link
                    href="/"
                    className="btn btn-ghost uppercase lg:text-xl text-lg"
                >
                    {userBasicInfo.fullName}
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Links />
                </ul>
            </div>
            <div className="navbar-end">
                <div className="">
                    <Link
                        href={process.env.UMAMI_SHARE_URL}
                        target="_blank"
                        tabIndex={0}
                        className="lg:hidden tooltip tooltip-bottom dark:tooltip-info items-center flex btn btn-ghost btn-circle"
                        data-tip="Umami Analytics (Last 24 hours)"
                    >
                        <Image
                            src="/logos/umami-color.svg"
                            width={0}
                            height={0}
                            alt="Umami logo"
                            className="filter invert lg:h-5 lg:w-5 h-4 w-4"
                        />
                    </Link>
                    <Link
                        href={process.env.UMAMI_SHARE_URL}
                        target="_blank"
                        className="hidden lg:flex tooltip tooltip-bottom dark:tooltip-info relative btn btn-ghost"
                        data-tip="Umami Analytics (Last 24 hours)"
                    >
                        <ul className="flex items-center gap-4">
                            {Object.keys(webstats).map((key, index) => (
                                <li key={index} className="flex flex-col">
                                    <span className="text-xs">{key}</span>
                                    <span className="text-lg">
                                        {webstats[key]?.toLocaleString()}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Link>
                </div>
                <DropdownTheme />
            </div>
        </div>
    );
};
export default Navbar;
