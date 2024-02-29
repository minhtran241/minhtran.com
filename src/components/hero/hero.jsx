'use client';

import styles from './hero.module.css';
import Image from 'next/image';
// import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
    Send,
    Download,
    Github,
    Mail,
    Facebook,
    Instagram,
    Twitter,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { saveAs } from 'file-saver';

const Hero = () => {
    const saveResumeFile = () => {
        saveAs('/resume.pdf', 'MinhTran-Resume.pdf');
    };

    return (
        <div>
            <div class="shadow-lg transform  duration-200 easy-in-out">
                <div class="h-32 overflow-hidden">
                    <Image
                        class="w-full"
                        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        alt="background_image"
                        width={2000}
                        height={800}
                    />
                </div>
                <div class="flex justify-center px-5  -mt-12">
                    <Avatar className="h-32 w-32 bg-white dark:bg-black p-2">
                        <AvatarImage src="/minhtran-ava.png" alt="minhtran" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>{' '}
                </div>
                <div class=" ">
                    <div class="text-center px-14">
                        <h2 class="text-3xl font-bold">Minh Tran</h2>
                        <div class="flex flex-row justify-center gap-2">
                            <Link
                                class="text-gray-400 mt-2 hover:text-[#0033A0]"
                                href="https://www.instagram.com/immohitdhiman/"
                                target="_blank"
                            >
                                <Github className="h-4 w-4" />
                            </Link>
                            <Link
                                class="text-gray-400 mt-2 hover:text-[#0033A0]"
                                href="mailto:tranmq@mail.gvsu.edu"
                                target="_blank"
                            >
                                <Mail className="h-4 w-4" />
                            </Link>
                            <Link
                                class="text-gray-400 mt-2 hover:text-[#0033A0]"
                                href="https://www.instagram.com/immohitdhiman/"
                                target="_blank"
                            >
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link
                                class="text-gray-400 mt-2 hover:text-[#0033A0]"
                                href="https://www.instagram.com/immohitdhiman/"
                                target="_blank"
                            >
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link
                                class="text-gray-400 mt-2 hover:text-[#0033A0]"
                                href="https://www.instagram.com/immohitdhiman/"
                                target="_blank"
                            >
                                <Twitter className="h-4 w-4" />
                            </Link>
                        </div>
                        <div class="flex flex-col items-center gap-1 mt-2">
                            <div class="">
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.gvsu.edu/acad/computer-science-bs.htm"
                                    class="hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer font-semibold"
                                >
                                    B.S in Computer Science
                                </Link>{' '}
                                |
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://gvsu.edu"
                                    class="ml-2 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer font-semibold"
                                >
                                    Grand Valley State University
                                </Link>
                            </div>
                            <p class="text-gray-600 italic">
                                Sep 2021 - May 2025
                            </p>
                            <p class="text-[#0033A0] dark:text-blue-600">
                                3.94 GPA
                            </p>
                        </div>
                    </div>
                    <p className="text-center font-light pt-4 px-4">
                        Experienced{' '}
                        <span className="text-[#0033A0] dark:text-blue-600">
                            Software Engineer
                        </span>{' '}
                        and{' '}
                        <span className="text-[#0033A0] dark:text-blue-600">
                            Data Engineer
                        </span>{' '}
                        with a 2-year track record in backend systems,
                        specializing in API development, performance
                        optimization, and system design. Notable achievements in
                        a major real estate system serving{' '}
                        <span className="text-[#0033A0] dark:text-blue-600">
                            10,000+ users
                        </span>
                        , showcasing expertise in managing{' '}
                        <span className="text-[#0033A0] dark:text-blue-600">
                            large-scale databases
                        </span>{' '}
                        and optimizing{' '}
                        <span className="text-[#0033A0] dark:text-blue-600">
                            high-speed inserts
                        </span>
                        .
                    </p>{' '}
                    <hr class="mt-6" />
                    <div class="flex  bg-gray-50 dark:bg-gray-800">
                        <Link
                            class="text-center w-1/2 py-2 px-4 uppercase hover:bg-[#0033A0] hover:text-white font-medium transition"
                            href="/contact"
                        >
                            Contact
                        </Link>
                        <div class="border border-gray-200 dark:border-gray-700"></div>
                        <Button
                            class="items-center w-1/2 py-2 px-4 uppercase hover:bg-[#0033A0] hover:text-white font-medium transition"
                            onClick={saveResumeFile}
                        >
                            Resume
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
