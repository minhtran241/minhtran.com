import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Loading from '@/app/loading';

const HeroComponent = () => {
    return (
        <div className="pt-32 text-base-content container">
            {/* Hero Container */}
            <div className="mx-auto bg-base-100 shadow-lg rounded-lg p-8">
                <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
                    {/* Profile Picture */}
                    <div className="avatar">
                        <div className="rounded-full ring ring-primary ring-offset-2 w-32 h-32 overflow-hidden">
                            <Image
                                src="/home/headshot.png"
                                alt={`${userBasicInfo.fullName} headshot`}
                                width={128}
                                height={128}
                                className=""
                            />
                        </div>
                    </div>

                    {/* User Information */}
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        {/* Name and Description */}
                        <div className="space-y-2">
                            <h1 className="text-2xl lg:text-3xl font-bold">
                                {userBasicInfo.fullName}
                                <span className="text-sm"> (He/Him)</span>
                            </h1>
                            <p className="text-md">
                                CS & MATH @ GVSU | SWE/DE @ GVSU Applied
                                Computing Institute
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start lg:justify-between">
                            {/* Contact Details */}
                            <ul className="fa-ul space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="fa-li text-primary">
                                        <FontAwesomeIcon icon="fa-solid fa-location-arrow" />
                                    </span>
                                    Grand Rapids, MI, USA
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="fa-li text-primary">
                                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                    </span>
                                    <Link
                                        href={`mailto:${userBasicInfo.email}`}
                                        className="link link-primary"
                                    >
                                        {userBasicInfo.email}
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="fa-li text-primary">
                                        <FontAwesomeIcon icon="fa-brands fa-github" />
                                    </span>
                                    <Link
                                        href={userBasicInfo.githubLink}
                                        target="_blank"
                                        className="link link-primary"
                                    >
                                        {userBasicInfo.githubUsername}
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="fa-li text-primary">
                                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                                    </span>
                                    <Link
                                        href={userBasicInfo.linkedinLink}
                                        target="_blank"
                                        className="link link-primary"
                                    >
                                        {userBasicInfo.linkedinUsername}
                                    </Link>
                                </li>
                            </ul>

                            {/* Call-to-Action Button */}
                            <div>
                                <Link
                                    href={fileSystemInfo.resumeLink}
                                    locale={false}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary flex items-center gap-2"
                                    prefetch={false}
                                >
                                    <FontAwesomeIcon icon="fa-duotone fa-file-user" />
                                    Download Resume
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Hero = () => (
    <Suspense fallback={<Loading fullPage={false} />}>
        <HeroComponent />
    </Suspense>
);

export default Hero;
