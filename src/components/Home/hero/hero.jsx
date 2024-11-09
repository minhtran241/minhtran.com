import { Suspense } from 'react';
import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import Image from 'next/image';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Loading from '@/app/loading';

const HeroComponent = () => {
    return (
        <div className="hero bg-primary min-h-fit pb-24 pt-36 rounded-b-box">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    src="/memoji/memojihello.png"
                    alt="headshot"
                    className="max-w-sm rounded-lg"
                    width={200}
                    height={300}
                    priority={true} // Adds preload for better LCP
                />
                <div>
                    <div className="font-bold flex items-center gap-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl text-primary-content">
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-circle-info fa-bounce text-accent" />
                        </span>
                        <p>
                            <span className="text-accent">About</span> Me
                        </p>
                    </div>
                    <ul
                        className="fa-ul lg:text-base md:text-base sm:text-sm text-sm py-6 text-primary-content"
                        style={{ '--fa-li-width': '4em' }}
                    >
                        {userBasicInfo.about?.map((item, index) => (
                            <li key={index}>
                                <span className="fa-li">
                                    <FontAwesomeIcon icon="fa-duotone fa-solid fa-hundred-points fa-beat" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Link
                            href={fileSystemInfo.resumeLink}
                            download={fileSystemInfo.resumeFileName}
                            locale={false}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="button"
                            className="btn btn-active btn-accent"
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
