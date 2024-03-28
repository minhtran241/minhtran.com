import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { userBasicInfo } from '@/common/constants/userBasic';
import { fileSystemInfo } from '@/common/constants/fileSystem';
// import ContactForm from '@/components/Home/contactForm/contactForm';
import { Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { SOCIAL_MEDIA } from '@/common/constants/menu';

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
        text: userBasicInfo.linkedinUsername,
    },
    resume: {
        icon: <Briefcase className="h-4 w-4 " />,
        link: fileSystemInfo.resumeLink,
        text: 'Download Resume',
    },
};

const HeroComponent = () => {
    return (
        <div className="relative">
            <div
                className="absolute top-0 h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(/home/hero-bg.png)`,
                }}
            >
                <span
                    id="blackOverlay"
                    className={`absolute h-full w-full bg-black opacity-10`}
                ></span>
            </div>
            <div className="relative container py-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 xl:grid-cols-2">
                    <div className="p-8 flex flex-wrap gap-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg">
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
                                                className="hover:text-[#0033A0] dark:hover:text-blue-600 sm:text-sm text-xs"
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
