import { Suspense } from 'react';
import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import Image from 'next/image';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const HeroComponent = () => {
    return (
        <div className="hero bg-base-200 min-h-fit py-12">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    // src={fileSystemInfo.headshot}
                    src="/memoji/memojihello.png"
                    alt="headshot"
                    className="max-w-sm rounded-lg"
                    width={200}
                    height={300}
                />
                <div>
                    <div className="font-bold flex items-center gap-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                        <span>
                            <FontAwesomeIcon icon="fa-duotone fa-solid fa-circle-info text-primary" />
                        </span>
                        <span className="text-primary">About</span>
                        Me
                    </div>
                    <ul
                        className="fa-ul lg:text-base md:text-base sm:text-sm text-sm py-6"
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
                    <div>
                        <Link
                            href={fileSystemInfo.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="button"
                            className="btn btn-active btn-primary"
                        >
                            <FontAwesomeIcon icon="fa-duotone fa-file-pdf" />
                            Download Resume
                        </Link>
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
