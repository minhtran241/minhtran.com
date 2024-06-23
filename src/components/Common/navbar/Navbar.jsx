import Links from './links/Links';
import DropdownTheme from '../themeProvider/dropdownTheme';
import { Menu, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = async () => {
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
                {/* Umami share link */}
                <div
                    className="tooltip tooltip-bottom dark:tooltip-info"
                    data-tip="Umami Analytics"
                >
                    <Link
                        href={process.env.UMAMI_SHARE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                    >
                        <Image
                            src="/logos/umami-color.svg"
                            alt="Umami Logo"
                            width={20}
                            height={20}
                            className="filter invert"
                        />
                    </Link>
                </div>
                <DropdownTheme />
            </div>
        </div>
    );
};
export default Navbar;
