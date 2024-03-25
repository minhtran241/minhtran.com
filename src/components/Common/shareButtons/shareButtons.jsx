'use client';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
} from 'next-share';
import { Facebook, Twitter, Linkedin, Mail, Link2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

const ShareButton = ({ onClick, children }) => (
    <div
        onClick={onClick}
        className="hover:bg-[#0033A0] dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full p-2 cursor-pointer transition-all duration-300 mr-2 border border-gray-300 dark:border-gray-700"
    >
        {children}
    </div>
);

const SharePost = () => {
    const status = 'Check out this blog by Minh Tran';
    const hashtag = '#softwareengineer #dataengineer';
    const path = usePathname();
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        toast('Link copied to clipboard!');
    };

    const shareButtons = [
        {
            ButtonComponent: EmailShareButton,
            icon: <Mail className="h-[1.2rem] w-[1.2rem]" />,
            props: {
                url,
                subject: status,
                windowWidth: 670,
                windowHeight: 400,
            },
        },
        {
            ButtonComponent: LinkedinShareButton,
            icon: <Linkedin className="h-[1.2rem] w-[1.2rem]" />,
            props: { url, title: status, windowWidth: 670, windowHeight: 400 },
        },
        {
            ButtonComponent: FacebookShareButton,
            icon: <Facebook className="h-[1.2rem] w-[1.2rem]" />,
            props: {
                url,
                quote: status,
                hashtag,
                windowWidth: 670,
                windowHeight: 400,
            },
        },
        {
            ButtonComponent: TwitterShareButton,
            icon: <Twitter className="h-[1.2rem] w-[1.2rem]" />,
            props: { url, title: status, windowWidth: 670, windowHeight: 400 },
        },
    ];

    return (
        <div className="flex flex-row">
            <ShareButton onClick={handleCopyLink}>
                <Link2 className="h-[1.2rem] w-[1.2rem]" />
            </ShareButton>
            {shareButtons.map(({ ButtonComponent, icon, props }, index) => (
                <ButtonComponent key={index} {...props}>
                    <ShareButton>{icon}</ShareButton>
                </ButtonComponent>
            ))}
        </div>
    );
};

export default SharePost;
