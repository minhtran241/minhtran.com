import { Suspense } from 'react';
import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import Image from 'next/image';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
// import { SITE_URL } from '@/common/constants/site';

const HeroComponent = () => {
    return (
        <div
            className="hero min-h-screen top-0 "
            style={{
                backgroundImage: `url(${fileSystemInfo.heroBg})`,
            }}
        >
            {/* <div
                className="absolute top-0 h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${fileSystemInfo.heroBg})`,
                }}
            > */}
            <div className="hero-overlay bg-opacity-60"></div>
            {/* </div> */}
            <div className="hero-content">
                <div className="container">
                    <div className="mockup-window bg-base-300 border shadow-lg mb-16">
                        {/* <div className="mockup-browser-toolbar">
                            <div className="input">{SITE_URL}</div>
                        </div> */}
                        <div className="flex flex-wrap gap-4 justify-center px-4 py-8 bg-base-200">
                            <div className="flex flex-shrink-0">
                                <Image
                                    src={fileSystemInfo.headshot}
                                    alt="headshot"
                                    className="object-cover object-center rounded-box sm:w-32 sm:h-full w-20 h-full border border-base-100"
                                    width={200}
                                    height={300}
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="font-semibold lg:text-xl md:text-lg sm:text-base text-base flex items-center gap-2">
                                    <span>
                                        <FontAwesomeIcon icon="fa-duotone fa-solid fa-circle-info" />
                                    </span>
                                    About me
                                </div>
                                {/* download CV */}
                                <div>
                                    <Link
                                        href={fileSystemInfo.resumeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        role="button"
                                        className="btn btn-active btn-xs sm:btn-sm md:btn-sm lg:btn-medium btn-primary"
                                    >
                                        <FontAwesomeIcon icon="fa-duotone fa-file-pdf" />
                                        Download Resume
                                    </Link>
                                </div>
                                <ul
                                    className="fa-ul lg:text-base md:text-base sm:text-sm text-sm"
                                    style={{ '--fa-li-width': '4em' }}
                                >
                                    {userBasicInfo.about?.map((item, index) => (
                                        <li key={index}>
                                            <span className="fa-li">
                                                <FontAwesomeIcon icon="fa-duotone fa-award-simple" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {/* <div className="space-y-1">
                                {userBasicInfo.about?.map((item, index) => {
                                    return (
                                        <div
                                            className="flex items-center gap-2 lg:text-base md:text-base sm:text-sm text-sm"
                                            key={index}
                                        >
                                            {item}
                                        </div>
                                    );
                                })}
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <Suspense
            fallback={
                <div className="grid w-full place-items-center overflow-x-scroll lg:overflow-visible fa-2x p-6">
                    <FontAwesomeIcon icon="fa-duotone fa-cog fa-spin text-primary" />
                </div>
            }
        >
            <HeroComponent />
        </Suspense>
    );
};

export default Hero;
