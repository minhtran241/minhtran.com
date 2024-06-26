import Links from './links/Links';
import DropdownTheme from '../themeProvider/dropdownTheme';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { getClient } from '@umami/api-client';

const Navbar = async () => {
    const client = getClient();
    const { ok, status, data, error } = await client.getWebsiteStats(
        process.env.UMAMI_WEBSITE_ID,
        {
            startAt: 0,
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
            <div className="navbar-start ">
                <div className="dropdown ">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <Menu className="h-5 w-5" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-md w-52 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white"
                    >
                        <Links />
                    </ul>
                </div>
                <Link href="/" className="text-xl btn btn-ghost uppercase">
                    Minh Tran
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Links />
                </ul>
            </div>
            <div className="navbar-end">
                {/* Umami info list dropdown */}
                <div
                    className="tooltip tooltip-bottom dark:tooltip-info relative"
                    data-tip="Umami analytics"
                >
                    <Link
                        href={process.env.UMAMI_SHARE_URL}
                        target="_blank"
                        className="dropdown"
                    >
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost"
                        >
                            <div className="flex items-center gap-4">
                                {Object.keys(webstats).map((key, index) => (
                                    <div key={index} className="flex flex-col">
                                        <span className="text-xs">{key}</span>
                                        <span className="text-lg">
                                            {webstats[key]?.toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                </div>
                <DropdownTheme />
            </div>
        </div>
    );
};
export default Navbar;
