import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { Download, GraduationCap, School, User } from 'lucide-react';

const HeroComponent = () => {
    return (
        <div className="relative">
            <div
                className="absolute top-0 h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/bg-dark.jpg)',
                }}
            >
                <span
                    id="blackOverlay"
                    className="absolute h-full w-full bg-black opacity-35"
                ></span>
            </div>
            <div className="relative container py-10">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="hero-content flex-col items-start text-white">
                            <h1 className="text-4xl font-semibold !leading-[1.208] sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                Minh Tran
                            </h1>
                            <p className="mb-8 max-w-[1080px]">
                                Experienced Software and Data Engineer with 2
                                years in backend systems. Specializing in API
                                development, performance optimization, and
                                system design. Skilled in crafting scalable
                                solutions and collaborating with
                                cross-functional teams to deliver high-quality
                                software solutions. Passionate about leveraging
                                innovative technologies to drive efficiency and
                                enhance system functionality.
                            </p>
                            <div className="flex flex-col items-start mb-8">
                                <div className="flex items-center mb-4">
                                    <p className="text-sm font-semibold">
                                        <User size={20} />
                                    </p>
                                    <p className="ml-2 text-sm">
                                        {process.env.CURRENT_JOB}
                                    </p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <p className="text-sm font-semibold">
                                        <School size={20} />
                                    </p>
                                    <Link
                                        className="ml-2 text-sm hover:underline transition duration-300"
                                        href={process.env.CURRENT_ORG_LINK}
                                        target="_blank"
                                    >
                                        {process.env.CURRENT_ORG}
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm font-semibold">
                                        <GraduationCap size={20} />
                                    </p>
                                    <p className="ml-2 text-sm">
                                        {process.env.CURRENT_ROLE}
                                    </p>
                                </div>
                            </div>
                            <ul className="flex flex-wrap items-center gap-4">
                                <li>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-md px-6 py-3 text-center text-base font-medium bg-[#0033A0] dark:bg-blue-600 lg:px-7"
                                    >
                                        Contact with me
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/minhtran-resume.pdf"
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium border rounded-md border-white transition duration-300"
                                    >
                                        <Download size={20} className="mr-2" />
                                        Download Resume
                                    </Link>
                                </li>
                            </ul>
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
