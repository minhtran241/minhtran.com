import styles from './contact.module.css';
import MarkdownRender from '@/components/markdownRenderer/markdownRenderer';
import path from 'path';
import { Send, Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import fs from 'fs/promises';

const MARKDOWN_FILE = path.join(
    process.cwd(),
    'data',
    'contact',
    'about-this-website.md'
);

const ContactPage = async () => {
    const aboutWebsiteMdString = await fs.readFile(MARKDOWN_FILE, 'utf-8');
    return (
        <div className="flex flex-col gap-12">
            <div className={styles.container}>
                <div className="relative flex-1 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col space-y-4">
                        <div className="gap-1 flex flex-col">
                            <h2 className="text-2xl font-semibold">
                                Minh Tran
                            </h2>
                            <p className="text-md dark:text-gray-400">
                                Grand Valley State University
                            </p>
                            <span className="text-sm dark:text-blue-600 text-[#0033A0] italic">
                                Software Engineer / Data Engineer
                            </span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
                                <Link
                                    target="_blank"
                                    className="hover:text-[#0033A0]"
                                    href="mailto:tranmq@mail.gvsu.edu"
                                >
                                    tranmq@mail.gvsu.edu
                                </Link>
                            </span>
                            <span className="flex items-center space-x-2">
                                <Github className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
                                <Link
                                    target="_blank"
                                    className="hover:text-[#0033A0]"
                                    href="https://github.com/minhtran241"
                                >
                                    minhtran241
                                </Link>
                            </span>
                            <span className="flex items-center space-x-2">
                                <Linkedin className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
                                <Link
                                    target="_blank"
                                    className="hover:text-[#0033A0]"
                                    href="https://www.linkedin.com/in/minh-tran-12a3aa218/"
                                >
                                    Minh Tran
                                </Link>
                            </span>
                            <span className="flex items-center space-x-2">
                                <Briefcase className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
                                <Link
                                    target="_blank"
                                    className="hover:text-[#0033A0] dark:hover:text-blue-600"
                                    href={'/resume.pdf'}
                                >
                                    Minh Tran's resume
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1">
                    <p className="text-2xl font-semibold text-[#0033A0] dark:text-white mb-4">
                        Leave me a message!
                    </p>
                    <form className="flex flex-col gap-4" action="">
                        {/* <input type="text" placeholder="Name and Surname" /> */}
                        <Input type="text" placeholder="Name and Surname" />
                        <Input type="email" placeholder="Email Address" />
                        <Textarea
                            placeholder="Type your message here."
                            className="dark:bg-black"
                        />
                        <Button className="bg-[#0033A0] text-white hover:bg-blue-800">
                            <Send className="mr-2 h-4 w-4" /> Send message
                        </Button>
                    </form>
                </div>
            </div>
            <div>
                <article className="prose md:prose-base lg:prose-lg dark:prose-invert prose-pre:not-prose prose-a:text-[#0033A0] dark:prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-500 prose-img:rounded-md prose-headings:text-[#0033A0] dark:prose-headings:text-blue-600 prose-hr:text-gray marker:text-[#0033A0] dark:marker:text-blue-600 items-center justify-center !max-w-full md:prose-pre:text-base lg:prose-pre:text-base sm:prose-pre:text-sm">
                    <MarkdownRender mdString={aboutWebsiteMdString} />
                </article>
            </div>
        </div>
    );
};

export default ContactPage;
