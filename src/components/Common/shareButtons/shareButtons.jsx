'use client';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
} from 'next-share';
// import { Facebook, Twitter, Linkedin, Mail, Link2, Check } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const ShareButton = ({ onClick, children }) => (
    <div
        onClick={onClick}
        className="hover:bg-[#0033A0] dark:hover:bg-white hover:text-white dark:hover:text-black w-8 h-8 inline-flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 mr-2 border border-gray-300 dark:border-gray-700"
    >
        {children}
    </div>
);

const SharePost = () => {
    const status = 'Check out this blog by Minh Tran';
    const hashtag = '#softwareengineer #dataengineer';
    const path = usePathname();
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;

    const [isLinkCopied, setIsLinkCopied] = useState(false);

    const handleCopyLink = () => {
        setIsLinkCopied(true);
        navigator.clipboard.writeText(url);
    };

    const shareButtons = [
        {
            ButtonComponent: EmailShareButton,
            icon: <FontAwesomeIcon icon="fa-duotone fa-envelope" />,
            props: {
                url,
                subject: status,
                windowWidth: 670,
                windowHeight: 400,
            },
        },
        {
            ButtonComponent: LinkedinShareButton,
            icon: <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />,
            props: { url, title: status, windowWidth: 670, windowHeight: 400 },
        },
        {
            ButtonComponent: FacebookShareButton,
            icon: <FontAwesomeIcon icon="fa-brands fa-facebook-f" />,
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
            icon: <FontAwesomeIcon icon="fa-brands fa-x-twitter" />,
            props: { url, title: status, windowWidth: 670, windowHeight: 400 },
        },
    ];

    return (
        <div className="flex flex-row">
            <ShareButton onClick={handleCopyLink}>
                {isLinkCopied ? (
                    <FontAwesomeIcon icon="fa-duotone fa-check-double" />
                ) : (
                    <FontAwesomeIcon icon="fa-duotone fa-link-horizontal" />
                )}
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
