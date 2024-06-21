import { Suspense } from 'react';
import Loading from '@/app/loading';
import { userBasicInfo } from '@/common/constants/userBasic';
import Image from 'next/image';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import Link from 'next/link';
import { SOCIAL_MEDIA } from '@/common/constants/menu';

const HeroComponent = () => {
    const resumeInfo = SOCIAL_MEDIA.filter((item) => item.name === 'Resume')[0];
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
                <div className="flex flex-col items-start gap-4">
                    <div className="bg-white dark:bg-gray-900 shadow-lg mockup-window border">
                        <div className="flex flex-wrap gap-4 justify-center p-6 border-t">
                            <div className="flex flex-shrink-0">
                                <Image
                                    src={fileSystemInfo.headshot}
                                    alt="headshot"
                                    className="object-cover object-center rounded-lg dark:bg-gray-500 sm:w-32 sm:h-full w-20 h-full"
                                    width={200}
                                    height={300}
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                {/* <div> */}
                                <div className="font-semibold text-xl text-[#0033A0] dark:text-blue-600">
                                    About Me
                                </div>
                                {/* download CV */}
                                <Link
                                    href={resumeInfo.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-medium text-[#0033A0] dark:text-blue-600 rounded bg-gray-100 hover:bg-gray-200 border-none hover:border-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
                                        {resumeInfo.icon}
                                        {resumeInfo.title}
                                    </button>
                                </Link>
                                <div className="space-y-1">
                                    {userBasicInfo.about?.map((item, index) => {
                                        return (
                                            <div
                                                className="flex items-center gap-2 lg:text-base md:text-base sm:text-sm text-sm"
                                                key={index}
                                            >
                                                {/* <Dot className="h-[16px] w-[16px]" /> */}
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
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
