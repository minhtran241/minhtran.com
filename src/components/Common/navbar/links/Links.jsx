import Link from 'next/link';

const links = [
    {
        id: 1,
        title: 'About',
        path: '/',
    },
    {
        id: 2,
        title: 'Dashboard',
        path: '/dashboard',
    },
    {
        id: 3,
        title: 'Projects',
        path: '/project',
    },
    {
        id: 4,
        title: 'Blogs',
        path: '/blog',
    },
    {
        id: 5,
        title: 'Contact',
        path: '/contact',
    },
];

const Links = () => {
    return (
        <>
            {links.map((link) => (
                <li key={link.id}>
                    <Link href={link.path}>{link.title}</Link>
                </li>
            ))}
        </>
    );
};

export default Links;
