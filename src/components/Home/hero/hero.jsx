import { Suspense } from 'react';
import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import Image from 'next/image';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

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
                    className={`absolute h-full w-full opacity-10`}
                ></span>
            </div>
            <div className="relative container py-16">
                <div className="flex flex-col items-start gap-4">
                    <div className="shadow mockup-window bg-base-300 border">
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
                                <p className="font-semibold lg:text-xl md:text-lg sm:text-base text-base">
                                    About me
                                </p>
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
                                <div className="space-y-1">
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
                                </div>
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
        <Suspense fallback={<div className="grid w-full place-items-center overflow-x-scroll lg:overflow-visible fa-2x p-6">
			<FontAwesomeIcon icon="fa-duotone fa-cog fa-spin text-primary" />
		</div>}>
            <HeroComponent />
        </Suspense>
    );
};

export default Hero;
