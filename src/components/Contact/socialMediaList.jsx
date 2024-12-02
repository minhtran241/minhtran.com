import Link from 'next/link';
import { SOCIAL_MEDIA } from '@/common/constants/menu';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const SocialMediaList = () => {
    return (
        <div className="space-y-5 pb-2">
            <div className="flex flex-row items-center gap-2 font-bold lg:text-2xl md:text-xl sm:text-lg text-lg">
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
                            className={`btn btn-sm sm:btn-sm md:btn-md lg:btn-md ${item.className} text-white`}
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
