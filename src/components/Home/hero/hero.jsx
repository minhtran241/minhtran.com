import { Suspense } from 'react';
// import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import Image from 'next/image';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Loading from '@/app/loading';
import Link from 'next/link';
// import ResumeViewer from './resumeViewer';

const HeroComponent = () => {
    return (
        // border length is 1/4 of the screen bottom (centered)
        <div className="hero min-h-fit pt-36 pb-8 bg-opacity-30">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    src="/memoji/memojihello.png"
                    alt="headshot"
                    className="max-w-sm rounded-lg"
                    width={200}
                    height={300}
                    priority={true} // Adds preload for better LCP
                />
                <div className="flex flex-col gap-4 lg:pl-10 lg:pt-0 pt-5">
                    <p className="font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg">
                        About Me
                    </p>
                    <ul
                        className="fa-ul lg:text-base md:text-base sm:text-sm text-sm"
                        style={{ '--fa-li-width': '4em' }}
                    >
                        {userBasicInfo.about?.map((item, index) => (
                            <li key={index}>
                                <span className="fa-li">
                                    <FontAwesomeIcon icon="fa-solid fa-star fa-beat" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    {/* <ResumeViewer /> */}
                    <div>
                        <Link
                            href={fileSystemInfo.resumeLink}
                            // download={fileSystemInfo.resumeFileName}
                            locale={false}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="button"
                            className="btn btn-active btn-primary"
                            prefetch={false}
                        >
                            <FontAwesomeIcon icon="fa-duotone fa-file-user" />
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
        <Suspense fallback={<Loading fullPage={false} />}>
            <HeroComponent />
        </Suspense>
    );
};

export default Hero;
