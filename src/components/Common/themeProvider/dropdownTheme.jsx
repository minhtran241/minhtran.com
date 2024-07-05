'use client';

import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
// import { Sun, MoonStar, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';

const DropdownTheme = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex-none gap-2">
            <button className="btn btn-circle btn-ghost fa-lg">
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        onChange={() => {
                            setTheme(theme === 'dark' ? 'light' : 'dark');
                        }}
                        checked={theme === 'light' ? true : false}
                    />
                    {/* light theme sun image */}
                    <FontAwesomeIcon icon="fa-duotone fa-sun swap-on" />
                    {/* dark theme moon image */}
                    <FontAwesomeIcon icon="fa-duotone fa-moon-stars swap-off" />
                </label>
            </button>
        </div>
    );
};

export default DropdownTheme;
