import Links from './links/Links';
import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import WebStats from './webStats/webStats';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import ThemeChanger from '@/common/elements/ThemeChanger';

const Navbar = () => {
    return (
        <div className="navbar bg-primary text-primary-content sticky z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden fa-lg"
                    >
                        <FontAwesomeIcon icon="fa-duotone fa-bars" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box mt-3 z-[1] p-2 shadow bg-base-100 text-base-content"
                    >
                        <Links />
                    </ul>
                </div>
                <Link
                    href="/"
                    className="btn btn-ghost lg:text-xl md:text-lg text-base"
                >
                    {userBasicInfo.fullName}
                </Link>
                {/* <Image
                    src="/memojihello.png"
                    alt="headshot"
                    className="max-w-sm rounded-lg"
                    width={40}
                    height={40}
                /> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Links />
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeChanger />
                <WebStats />
            </div>
        </div>
    );
};
export default Navbar;
