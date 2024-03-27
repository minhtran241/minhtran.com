'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { useTheme } from 'next-themes';
import { userBasicInfo } from '@/common/constants/userBasic';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import ContactForm from '@/components/Home/contactForm/contactForm';
import { Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import Image from 'next/image';

const iconsTab = {
    mail: {
        icon: <Mail className="h-4 w-4 " />,
        link: `mailto:${userBasicInfo.email}`,
        text: userBasicInfo.email,
    },
    github: {
        icon: <Github className="h-4 w-4 " />,
        link: userBasicInfo.githubLink,
        text: `@${userBasicInfo.githubUsername}`,
    },
    linkedin: {
        icon: <Linkedin className="h-4 w-4 " />,
        link: userBasicInfo.linkedinLink,
        text: userBasicInfo.linkedinUser,
    },
    resume: {
        icon: <Briefcase className="h-4 w-4 " />,
        link: fileSystemInfo.resumeLink,
        text: 'Download Resume',
    },
};

const HeroComponent = () => {
    const { theme } = useTheme();
    const bgUrl = theme === 'dark' ? '/home/bg-dark.png' : '/home/bg-light.png';

    return (
        <div className="relative">
            <div
                className="absolute top-0 h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgUrl})`,
                }}
            >
                <span
                    id="blackOverlay"
                    className={`absolute h-full w-full bg-black ${
                        theme === 'dark' ? 'opacity-35' : 'opacity-45'
                    }`}
                ></span>
            </div>
            <div className="relative container py-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 xl:grid-cols-2">
                    <div className="p-8 flex flex-wrap gap-4 rounded bg-white dark:bg-black">
                        <div className="flex-shrink-0">
                            <Image
                                src="/home/headshot.png"
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
                                <p className="text-sm">
                                    {userBasicInfo.currentJob}
                                </p>
                            </div>
                            <div className="space-y-1">
                                {Object.keys(iconsTab).map((key, index) => {
                                    const { icon, link, text } = iconsTab[key];
                                    return (
                                        <span
                                            className="flex items-center space-x-2"
                                            key={index}
                                        >
                                            {icon}
                                            <Link
                                                target="_blank"
                                                className="hover:text-[#0033A0] dark:hover:text-blue-600 sm:text-sm text-xs"
                                                href={link}
                                            >
                                                {text}
                                            </Link>
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <ContactForm />
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
