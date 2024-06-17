import { fileSystemInfo } from './fileSystem';
import { userBasicInfo } from './userBasic';
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    Twitter,
    Download,
} from 'lucide-react';

export const SOCIAL_MEDIA = [
    {
        name: 'Email',
        title: userBasicInfo.email,
        href: `mailto:${userBasicInfo.email}`,
        type: 'sw', // social and work
        icon: <Mail className="w-full h-full" />,
        className:
            '!bg-gradient-to-r from-[#D44638] to-[#D44638] border border dark:border-neutral-700',
    },

    {
        name: 'LinkedIn',
        title: userBasicInfo.linkedinUsername,
        href: userBasicInfo.linkedinLink,
        type: 'sw', // social and work
        icon: <Linkedin className="w-full h-full" />,
        className:
            '!bg-gradient-to-r from-[#0077B5] to-[#00A0DC] border border dark:border-neutral-700',
    },
    {
        name: 'Twitter',
        title: userBasicInfo.twitterUsername,
        href: userBasicInfo.twitterLink,
        type: 's', // social only
        icon: <Twitter className="w-full h-full" />,
        className:
            '!bg-gradient-to-r from-[#1DA1F2] to-[#1DA1F2] border border dark:border-neutral-700',
    },
    {
        name: 'Instagram',
        title: userBasicInfo.instagramUsername,
        href: userBasicInfo.instagramLink,
        type: 's', // social only
        icon: <Instagram className="w-full h-full" />,
        className:
            '!bg-gradient-to-r from-[#E1306C] to-[#405DE6] border border dark:border-neutral-700',
    },
    {
        name: 'Facebook',
        title: userBasicInfo.facebookUsername,
        href: userBasicInfo.facebookLink,
        type: 's', // social only
        icon: <Facebook className="w-full h-full" />,
        className:
            '!bg-gradient-to-r from-[#1877F2] to-[#1877F2] border border dark:border-neutral-700',
    },
    {
        name: 'Github',
        title: userBasicInfo.githubUsername,
        href: userBasicInfo.githubLink,
        type: 'sw', // social and work
        icon: <Github className="w-full h-full" />,
        className:
            '!bg-gradient-to-r from-[#333333] to-[#333333] border border dark:border-neutral-700',
    },
    {
        name: 'Resume',
        title: 'Download Resume',
        href: fileSystemInfo.resumeLink,
        type: 'w', // work only
        icon: <Download className="w-full h-full" />,
    },
];

export const MENU_TABS = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Projects',
        href: '/project',
    },
    {
        title: 'Blogs',
        href: '/blog',
    },
    {
        title: 'Reads',
        href: '/reads',
    },
    {
        title: 'Uses',
        href: '/uses',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
    {
        title: 'README',
        href: '/readme',
    },
];
