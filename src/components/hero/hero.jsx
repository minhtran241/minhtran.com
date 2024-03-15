'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { useTheme } from 'next-themes';

const HeroComponent = () => {
    const { theme } = useTheme();
    return (
        <div className="">
            <div className="shadow-lg transform duration-300 easy-in-out">
                <div className="overflow-hidden lg:h-28 md:h-24 h-20">
                    <Image
                        className="rounded-md w-full object-cover"
                        src={
                            theme === 'dark'
                                ? 'https://9to5mac.com/wp-content/uploads/sites/6/2021/04/hello-Blue-2-dragged.jpg?quality=82&strip=all'
                                : 'https://9to5mac.com/wp-content/uploads/sites/6/2021/04/hello-Blue-1-dragged.jpg?quality=82&strip=all'
                        }
                        alt="bg-image"
                        width={1600}
                        height={400}
                    />
                </div>
                <div className="flex justify-center px-5 -mt-12">
                    <Avatar className="bg-white dark:bg-black p-2 lg:h-32 lg:w-32 md:h-28 md:w-28 h-24 w-24">
                        <AvatarImage src="/minhtran-ava.png" alt="minhtran" />
                        <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                </div>
                <div className="">
                    <div className="text-center px-14">
                        <h2 className="text-2xl lg:text-3xl md:text-2xl font-semibold">
                            Minh Tran
                        </h2>
                        <p className="text-[#0033A0] dark:text-blue-600 text-sm">
                            Software Engineer / Data Engineer
                        </p>
                        <div className="flex flex-col items-center gap-1 mt-2">
                            <Link
                                href="https://www.gvsu.edu/"
                                className="text-[#0033A0] dark:text-blue-600 font-semibold"
                            >
                                Grand Valley State University
                            </Link>
                            <p className="text-gray-600 dark:text-gray-400">
                                B.S in Computer Science
                            </p>
                        </div>
                    </div>
                    <p className="text-center pt-4 px-4 text-base">
                        Experienced Software and Data Engineer with 2 years in
                        backend systems. Specializing in API development,
                        performance optimization, and system design.
                    </p>
                    <hr className="mt-6" />
                    <div className="flex bg-gray-50 dark:bg-gray-800">
                        <Link
                            className="text-center w-1/2 py-2 px-4 uppercase hover:bg-[#0033A0] dark:hover:bg-blue-600 hover:text-white font-medium transition"
                            href="/contact"
                        >
                            Contact
                        </Link>
                        <div className="border border-gray-200 dark:border-gray-700"></div>
                        <Link
                            target="_blank"
                            className="text-center w-1/2 py-2 px-4 uppercase hover:bg-[#0033A0] dark:hover:bg-blue-600 hover:text-white font-medium transition"
                            href="/minhtran-resume.pdf"
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
