'use client';

import styles from './hero.module.css';
import Image from 'next/image';
// import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { saveAs } from 'file-saver';

const Hero = () => {
    const saveFile = () => {
        saveAs('/resume.pdf', 'MinhTran-Resume.pdf');
    };

    return (
        <div className={`${styles.container} `}>
            <div className={styles.textContainer}>
                <h1 className={`${styles.title}`}>
                    <span className="">Hi,</span>{' '}
                    <span className="text-[#0033A0]">I'm Minh Tran</span>
                </h1>
                <ul className="text-xl font-light leading-relaxed list-disc gap-2 marker:text-[#0033A0]">
                    <li>
                        Experienced{' '}
                        <span className="text-[#0033A0]">
                            Software Engineer
                        </span>{' '}
                        and{' '}
                        <span className="text-[#0033A0]">Data Engineer</span>{' '}
                        with a 2-year track record in backend systems,
                        specializing in API development, performance
                        optimization, and system design.
                    </li>
                    <li>
                        Notable achievements in a major real estate system
                        serving{' '}
                        <span className="text-[#0033A0]">10,000+ users</span>,
                        showcasing expertise in managing{' '}
                        <span className="text-[#0033A0]">
                            large-scale databases
                        </span>{' '}
                        and optimizing{' '}
                        <span className="text-[#0033A0]">
                            high-speed inserts
                        </span>
                        .
                    </li>
                </ul>

                <div className="flex flex-row items-center gap-4 text-lg">
                    {/* <GraduationCap />{' '} */}
                    <Image
                        // className="h-6 w-6"
                        src="/gvsu-2.svg"
                        alt="gvsu"
                        width={115}
                        height={120}
                    />
                    <div className="flex flex-col gap-2">
                        <div className="">
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.gvsu.edu/acad/computer-science-bs.htm"
                                className="hover:text-[#0033A0] cursor-pointer font-semibold"
                            >
                                B.S in Computer Science
                            </Link>{' '}
                            |
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href="https://gvsu.edu"
                                className="ml-2 hover:text-[#0033A0] cursor-pointer font-semibold"
                            >
                                Grand Valley State University
                            </Link>
                        </div>
                        <p className="text-gray-600 italic">
                            Sep 2021 - May 2025
                        </p>
                        <div className="flex flex-row leading-none">
                            {/* <Star className="h-4 w-4 mr-2 text-[#0033A0]" /> */}
                            GPA:{' '}
                            <span className="ml-2 text-[#0033A0]">3.94</span>
                        </div>
                    </div>
                </div>

                {/* Download Resume Button */}
                <Button
                    className="bg-[#0033A0] text-white hover:bg-blue-800"
                    onClick={saveFile}
                >
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
            </div>
            {/* Contact form */}
            <div className="rounded-lg p-8 shadow-lg relative flex-1 border border-gray-200 dark:border-gray-700">
                <div className="mb-4 flex flex-row leading-none">
                    <Avatar className="mr-4 border-2 border-[#0033A0] dark:border-white">
                        <AvatarImage
                            src="/minhtran-avatar.jpg"
                            alt="minhtran"
                        />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>{' '}
                    <p className="text-2xl font-semibold text-[#0033A0] dark:text-white">
                        Leave me a message!
                    </p>
                </div>
                <form className={styles.form} action="">
                    {/* <input type="text" placeholder="Name and Surname" /> */}
                    <Input type="text" placeholder="Name and Surname" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="text" placeholder="Phone Number (Optional)" />
                    <Textarea
                        placeholder="Type your message here."
                        className="dark:bg-black h-32"
                    />
                    <Button className="bg-[#0033A0] text-white hover:bg-blue-800">
                        <Send className="mr-2 h-4 w-4" /> Send message
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Hero;
