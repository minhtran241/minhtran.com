import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { Download, GraduationCap, School, User } from 'lucide-react';

const HeroComponent = () => {
    return (
        <div className="relative pb-[100px] pt-[100px] lg:pt-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="hero-content flex-col items-start">
                            <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-gradient sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                Hello, I'm Minh Tran.
                            </h1>
                            <p className="mb-8 max-w-[580px]">
                                Experienced Software and Data Engineer with 2
                                years in backend systems. Specializing in API
                                development, performance optimization, and
                                system design.
                            </p>
                            <div className="flex flex-col items-start mb-8">
                                <div className="flex items-center mb-4">
                                    <p className="text-sm font-semibold text-[#0033A0]">
                                        <User size={20} />
                                    </p>
                                    <p className="ml-2 text-sm text-body-color dark:text-dark-6">
                                        {process.env.CURRENT_JOB}
                                    </p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <p className="text-sm font-semibold text-[#0033A0]">
                                        <School size={20} />
                                    </p>
                                    <Link
                                        className="ml-2 text-sm text-body-color dark:text-dark-6 hover:text-[#0033A0] transition duration-300"
                                        href={process.env.CURRENT_ORG_LINK}
                                    >
                                        {process.env.CURRENT_ORG}
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm font-semibold text-[#0033A0]">
                                        <GraduationCap size={20} />
                                    </p>
                                    <p className="ml-2 text-sm text-body-color dark:text-dark-6">
                                        {process.env.CURRENT_ROLE}
                                    </p>
                                </div>
                            </div>
                            <ul className="flex flex-wrap items-center gap-4">
                                <li>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-md px-6 py-3 text-center text-base font-medium text-white bg-[#0033A0] dark:bg-blue-600 lg:px-7"
                                    >
                                        Contact with me
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/minhtran-resume.pdf"
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-[#0033A0] dark:text-white border rounded-md border-[#464646] dark:border-white hover:border-[#0033A0] dark:hover:border-blue-600 dark:hover:text-blue-600 transition duration-300"
                                    >
                                        <Download size={20} className="mr-2" />
                                        Download Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <Image
                                    src="/minhtran-ava-1.png"
                                    alt="hero"
                                    className="max-w-full lg:ml-auto rounded-lg rounded-tl-[100px] w-[400px] h-[400px]"
                                    width={400}
                                    height={400}
                                />
                                <span className="absolute -bottom-8 -left-8 z-[-1]">
                                    <svg
                                        width="93"
                                        height="93"
                                        viewBox="0 0 93 93"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="2.5"
                                            cy="2.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="2.5"
                                            cy="24.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="2.5"
                                            cy="46.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="2.5"
                                            cy="68.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="2.5"
                                            cy="90.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="24.5"
                                            cy="2.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="24.5"
                                            cy="24.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="24.5"
                                            cy="46.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="24.5"
                                            cy="68.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="24.5"
                                            cy="90.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="46.5"
                                            cy="2.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="46.5"
                                            cy="24.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="46.5"
                                            cy="46.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="46.5"
                                            cy="68.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="46.5"
                                            cy="90.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="68.5"
                                            cy="2.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="68.5"
                                            cy="24.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="68.5"
                                            cy="46.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="68.5"
                                            cy="68.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="68.5"
                                            cy="90.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="90.5"
                                            cy="2.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="90.5"
                                            cy="24.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="90.5"
                                            cy="46.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="90.5"
                                            cy="68.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                        <circle
                                            cx="90.5"
                                            cy="90.5"
                                            r="2.5"
                                            fill="#0033A0"
                                        />
                                    </svg>
                                </span>
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
        <Suspense fallback={<Loading />}>
            <HeroComponent />
        </Suspense>
    );
};

export default Hero;
