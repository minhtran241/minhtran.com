import Link from 'next/link';

const links = [
    {
        title: 'Dashboard',
        path: '/dashboard',
    },
    {
        title: 'Projects',
        path: '/project',
    },
    {
        title: 'Blogs',
        path: '/blog',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'README',
        path: '/readme',
    },
];

const Links = () => {
    return (
        <>
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.path}>{link.title}</Link>
                </li>
            ))}
        </>
    );
};

export default Links;
