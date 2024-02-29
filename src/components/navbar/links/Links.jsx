'use client';

import NavLink from './navLink/navLink';
import DropdownTheme from '@/components/themeProvider/dropdownTheme';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';

const links = [
    {
        id: 1,
        title: 'About',
        path: '/',
    },
    {
        id: 2,
        title: 'Projects',
        path: '/project',
    },
    {
        id: 3,
        title: 'Blogs',
        path: '/blog',
    },
    {
        id: 4,
        title: 'Contact',
        path: '/contact',
    },
];

const Links = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {links.map((link, i) => (
                    <NavLink key={i} item={link} />
                ))}{' '}
                <NavigationMenuItem>
                    <DropdownTheme />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Links;
