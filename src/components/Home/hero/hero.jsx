import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { userBasicInfo } from '@/common/constants/userBasic';
import Image from 'next/image';
import { SOCIAL_MEDIA } from '@/common/constants/menu';
import { fileSystemInfo } from '@/common/constants/fileSystem';

const HeroComponent = () => {
    return (
        <div className="relative">
            <div
                className="absolute top-0 h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${fileSystemInfo.heroBg})`,
                }}
            >
                <span
                    id="blackOverlay"
                    className={`absolute h-full w-full bg-black opacity-10`}
                ></span>
            </div>
            <div className="relative container py-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 xl:grid-cols-2">
                    <div className="p-8 flex flex-wrap gap-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg">
                        <div className="flex-shrink-0">
                            <Image
                                src={fileSystemInfo.headshot}
                                alt="headshot"
                                className="object-cover object-center rounded-lg dark:bg-gray-500 sm:w-32 sm:h-full w-20 h-full"
                                width={150}
                                height={250}
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="font-semibold text-2xl">
                                    {userBasicInfo.fullName}
                                </h2>
                                <p className="lg:text-medium md:text-medium sm:text-sm text-sm">
                                    {userBasicInfo.currentJob}
                                </p>
                            </div>
                            <div className="space-y-1">
                                {SOCIAL_MEDIA?.filter((item) =>
                                    item.type.includes('w')
                                ).map((item, index) => {
                                    return (
                                        <div
                                            className="flex items-center gap-2 leading-none"
                                            key={index}
                                        >
                                            <span className="text-base h-4 w-4">
                                                {item.icon}
                                            </span>
                                            <Link
                                                target="_blank"
                                                className="hover:text-[#0033A0] dark:hover:text-blue-600 lg:text-medium md:text-medium sm:text-sm text-sm transition duration-300 ease-in-out"
                                                href={item.href}
                                            >
                                                {item.title}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* <ContactForm /> */}
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <Suspense fallback={<Loading />}>
            <HeroComponent />
        </Suspense>
    );
};

export default Hero;
