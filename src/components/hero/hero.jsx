import Image from 'next/image';
import Link from 'next/link';
import { Github, Mail, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Suspense } from 'react';
import Loading from '@/app/loading';

const iconsTab = [
    {
        icon: <Mail className="h-4 w-4" />,
        link: `mailto:${process.env.EMAIL}`,
    },
    {
        icon: <Github className="h-4 w-4" />,
        link: process.env.GITHUB_LINK,
    },
    {
        icon: <Linkedin className="h-4 w-4" />,
        link: process.env.LINKEDIN_LINK,
    },
];

const HeroComponent = () => {
    return (
        <div>
            <div className="shadow-lg transform duration-300 easy-in-out">
                <div className="h-40 overflow-hidden">
                    <Image
                        className="w-full object-cover"
                        src="/bg-image.jpeg"
                        alt="background_image"
                        width={2000}
                        height={800}
                    />
                </div>
                <div className="flex justify-center px-5  -mt-12">
                    <Avatar className="h-32 w-32 bg-white dark:bg-black p-2">
                        <AvatarImage src="/minhtran-ava.png" alt="minhtran" />
                        <AvatarFallback>MT</AvatarFallback>
                    </Avatar>{' '}
                </div>
                <div className="">
                    <div className="text-center px-14">
                        <h2 className="text-3xl font-bold">Minh Tran</h2>
                        <p className="text-[#0033A0] dark:text-blue-600 italic text-sm">
                            Software Engineer / Data Engineer
                        </p>
                        <div className="flex flex-row justify-center gap-2">
                            {iconsTab.map((icon, index) => (
                                <Link
                                    className="text-gray-400 mt-2 hover:text-[#0033A0] cursor-pointer"
                                    href={icon.link}
                                    target="_blank"
                                    key={index}
                                >
                                    {icon.icon}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col items-center gap-1 mt-2">
                            <Link
                                href={process.env.CURRENT_ORG_LINK}
                                className="text-[#0033A0] dark:text-blue-600 font-semibold"
                            >
                                {process.env.CURRENT_ORG}
                            </Link>
                            <p className="text-gray-600">
                                {process.env.CURRENT_ROLE}{' '}
                                <span className="text-[#0033A0] dark:text-blue-600">
                                    (3.94 GPA)
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="text-center pt-4 px-4">
                        Experienced Software Engineer and Data Engineer with a
                        2-year track record in backend systems, specializing in
                        API development, performance optimization, and system
                        design. Notable achievements in a major real estate
                        system serving 10,000+ users, showcasing expertise in
                        managing large-scale databases and optimizing high-speed
                        inserts.
                    </p>
                    <hr className="mt-6" />
                    <div className="flex bg-gray-50 dark:bg-gray-800">
                        <Link
                            target="_blank"
                            className="text-center w-1/2 py-2 px-4 uppercase hover:bg-[#0033A0] dark:hover:bg-blue-600 hover:text-white font-medium transition"
                            href="/contact"
                        >
                            Contact
                        </Link>
                        <div className="border border-gray-200 dark:border-gray-700"></div>
                        <Link
                            target="_blank"
                            className="text-center w-1/2 py-2 px-4 uppercase hover:bg-[#0033A0] dark:hover:bg-blue-600 hover:text-white font-medium transition"
                            href={process.env.RESUME_LINK}
                        >
                            Resume
                        </Link>
                    </div>
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
