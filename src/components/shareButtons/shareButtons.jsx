'use client';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
} from 'next-share';
// import icons from lucide-react
import { Facebook, Twitter, Linkedin, Mail, Link2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

const SharePost = () => {
    const status = 'Check out this blog from Nextcorp!';
    const hashtag = 'nextcorp';
    const path = usePathname();
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;
    return (
        <div className="flex flex-row">
            {/* Copy link button */}
            <div
                onClick={() => {
                    navigator.clipboard.writeText(url);
                    toast.success('Link copied to clipboard!');
                }}
                className="hover:bg-[#0033A0] dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full p-2 cursor-pointer transition-all duration-300 mr-2 border border-gray-300 dark:border-gray-700"
            >
                <Link2 className="h-[1.2rem] w-[1.2rem]" />
            </div>
            <FacebookShareButton
                url={url}
                quote={status}
                hashtag={hashtag}
                windowWidth={670}
                windowHeight={400}
            >
                <div className="hover:bg-[#0033A0] dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full p-2 cursor-pointer transition-all duration-300 mr-2 border border-gray-300 dark:border-gray-700">
                    <Facebook className="h-[1.2rem] w-[1.2rem]" />
                </div>
            </FacebookShareButton>
            <TwitterShareButton
                url={url}
                title={status}
                windowWidth={670}
                windowHeight={400}
            >
                <div className="hover:bg-[#0033A0] dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full p-2 cursor-pointer transition-all duration-300 mr-2 border border-gray-300 dark:border-gray-700">
                    <Twitter className="h-[1.2rem] w-[1.2rem]" />
                </div>
            </TwitterShareButton>
            <LinkedinShareButton
                url={url}
                title={status}
                windowWidth={670}
                windowHeight={400}
            >
                <div className="hover:bg-[#0033A0] dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full p-2 cursor-pointer transition-all duration-300 mr-2 border border-gray-300 dark:border-gray-700">
                    <Linkedin className="h-[1.2rem] w-[1.2rem]" />
                </div>
            </LinkedinShareButton>
            <EmailShareButton
                url={url}
                subject={status}
                windowWidth={670}
                windowHeight={400}
            >
                <div className="hover:bg-[#0033A0] dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full p-2 cursor-pointer transition-all duration-300 mr-2 border border-gray-300 dark:border-gray-700">
                    <Mail className="h-[1.2rem] w-[1.2rem]" />
                </div>
            </EmailShareButton>
        </div>
    );
};

export default SharePost;
