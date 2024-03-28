import clsx from 'clsx';
import Link from 'next/link';

import { SOCIAL_MEDIA } from '@/common/constants/menu';

const SocialMediaList = () => {
    return (
        <div className="space-y-5 pb-2">
            <h3 className="text-xl font-medium">Social Media Platforms</h3>
            <div className="flex flex-col justify-between gap-3 md:flex-row">
                {SOCIAL_MEDIA?.map((item, index) => (
                    <Button
                        className={clsx(
                            'flex w-full items-center justify-center transition-all duration-300 hover:scale-105 md:w-1/5',
                            item?.className
                        )}
                        key={index}
                        icon={item?.icon}
                        href={item?.href}
                    >
                        {item?.title}
                    </Button>
                ))}
            </div>
        </div>
    );
};

const Button = ({
    children,
    isLoading,
    className = '',
    icon,
    href,
    ...rest
}) => {
    return (
        <Link
            href={href}
            target="_blank"
            className={`flex items-center gap-2 rounded-lg bg-gray-500 px-4 py-2 font-sora text-[15px] text-gray-50 transition-all duration-300 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 ${className}`}
            {...rest}
        >
            {isLoading ? (
                <>Loading...</>
            ) : (
                <>
                    {icon && <>{icon}</>}
                    {children}
                </>
            )}
        </Link>
    );
};

export default SocialMediaList;
