'use client';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeChanger = () => {
    const themeValues = [
        'light',
        'dark',
		'cupcake',
		'cyberpunk',
        'nord',
        'night',
		'autumn',
        'winter',
        'dracula',
		'forest',
		'sunset',
		'cmyk', 
        'corporate',
        'synthwave',
        'retro',
        'fantasy',
		'lofi'
    ];

    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="dropdown" data-choose-theme>
            <div tabIndex={0} role="button" className="btn btn-ghost">
                Theme
                <FontAwesomeIcon icon="fa-duotone fa-caret-down" />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content rounded-box z-[1] p-2 shadow bg-base-100 text-base-content"
            >
                {themeValues.map((theme) => (
                    <li key={theme}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={
                                theme.charAt(0).toUpperCase() + theme.slice(1)
                            }
                            value={theme}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeChanger;
