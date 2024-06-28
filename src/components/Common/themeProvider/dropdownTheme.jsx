'use client';

import { Sun, MoonStar, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';

const DropdownTheme = () => {
    const { setTheme } = useTheme();

    return (
        <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                >
                    <Sun className="lg:h-5 lg:w-5 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonStar className="absolute lg:h-5 lg:w-5 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 p-2 shadow text-black dark:text-white bg-white dark:bg-gray-900"
                >
                    <li>
                        <button
                            onClick={() => setTheme('light')}
                            className="btn btn-ghost"
                        >
                            <Sun className="h-4 w-4" />
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setTheme('dark')}
                            className="btn btn-ghost"
                        >
                            <MoonStar className="h-4 w-4" />
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setTheme('system')}
                            className="btn btn-ghost"
                        >
                            <SunMoon className="h-4 w-4" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownTheme;
