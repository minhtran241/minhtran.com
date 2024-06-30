import Links from './links/Links';
import DropdownTheme from '../themeProvider/dropdownTheme';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import WebStats from './webStats/webStats';

const Navbar = () => {
    return (
        <div className="navbar bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <Menu className="lg:h-6 lg:w-6 h-5 w-5" />
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
                <WebStats />
                <DropdownTheme />
            </div>
        </div>
    );
};
export default Navbar;
