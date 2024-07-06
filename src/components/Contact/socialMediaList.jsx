import Link from 'next/link';

import { SOCIAL_MEDIA } from '@/common/constants/menu';
// import { MessagesSquare } from 'lucide-react';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const SocialMediaList = () => {
    return (
        <div className="space-y-5 pb-2">
            <div className="flex items-center gap-2 text-[#0033A0] dark:text-white font-semibold lg:text-xl md:text-lg text-base">
                {/* <MessagesSquare className="lg:h-6 lg:w-6 h-5 w-5" /> */}
                <FontAwesomeIcon icon="fa-duotone fa-messages" />
                <h1 className="capitalize">Social Media Platforms</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-2 gap-x-4">
                {SOCIAL_MEDIA?.filter((item) => item.type.includes('s')).map(
                    (item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-sm sm:btn-sm md:btn-md lg:btn-md ${item.className} flex leading-none justify-center gap-2 text-white border-none`}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    )
                )}
            </div>
        </div>
    );
};

export default SocialMediaList;
