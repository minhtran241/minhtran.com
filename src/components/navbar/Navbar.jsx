import Link from 'next/link';
import Image from 'next/image';
import Links from './links/Links';

const Navbar = async () => {
    // const session = await auth();
    return (
        <div className="h-[80px] flex justify-between items-center px-12 bg-[#0033A0] text-white dark:bg-gray-900 dark:text-white">
            <Link href="/">
                {/* <Image
                    src="/logo.svg"
                    alt="logo"
                    width={160}
                    height={80}
                    // invert in light mode and not in dark mode
                    className="invert"
                /> */}
                <p className="text-2xl font-bold invisible lg:visible md:visible">
                    minhtran.com
                </p>
            </Link>
            <div className="">
                <Links />
            </div>
        </div>
    );
};
export default Navbar;
