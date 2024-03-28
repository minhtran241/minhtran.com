import { userBasicInfo } from './userBasic';
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    Twitter,
} from 'lucide-react';

const iconSize = 20;

export const SOCIAL_MEDIA = [
    {
        title: 'Email',
        href: `mailto:${userBasicInfo.email}`,
        icon: <Mail size={iconSize} />,
        className:
            '!bg-gradient-to-r from-[#D44638] to-[#D44638] border border dark:border-neutral-700',
    },

    {
        title: 'Linkedin',
        href: userBasicInfo.linkedinLink,
        icon: <Linkedin size={iconSize} />,
        className:
            '!bg-gradient-to-r from-[#0077B5] to-[#00A0DC] border border dark:border-neutral-700',
    },
    {
        title: 'Twitter',
        href: userBasicInfo.twitterLink,
        icon: <Twitter size={iconSize} />,
        className:
            '!bg-gradient-to-r from-[#1DA1F2] to-[#1DA1F2] border border dark:border-neutral-700',
    },
    {
        title: 'Instagram',
        href: userBasicInfo.instagramLink,
        icon: <Instagram size={iconSize} />,
        className:
            '!bg-gradient-to-r from-[#E1306C] to-[#405DE6] border border dark:border-neutral-700',
    },
    {
        title: 'Facebook',
        href: userBasicInfo.facebookLink,
        icon: <Facebook size={iconSize} />,
        className:
            '!bg-gradient-to-r from-[#1877F2] to-[#1877F2] border border dark:border-neutral-700',
    },
    {
        title: 'Github',
        href: userBasicInfo.githubLink,
        icon: <Github size={iconSize} />,
        className:
            '!bg-gradient-to-r from-[#333333] to-[#333333] border border dark:border-neutral-700',
    },
];
