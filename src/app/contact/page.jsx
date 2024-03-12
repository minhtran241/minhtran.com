import MarkdownRender from '@/components/markdownRenderer/markdownRenderer';
import path from 'path';
import { Send, Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import fs from 'fs/promises';
import ContactForm from '@/components/contactForm/contactForm';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: 'Contact Minh Tran',
        description: 'Contact Minh Tran - Software Engineer and Data Engineer',
    };
};

const MARKDOWN_FILE = path.join(
    process.cwd(),
    process.env.DATA_FETCH_DIR,
    'contact',
    'about-this-website.md'
);

const ContactPage = async () => {
    const iconsTab = {
        mail: {
            icon: (
                <Mail className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
            ),
            link: `mailto:${process.env.EMAIL}`,
            text: process.env.EMAIL,
        },
        github: {
            icon: (
                <Github className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
            ),
            link: process.env.GITHUB_LINK,
            text: process.env.GITHUB_USER,
        },
        linkedin: {
            icon: (
                <Linkedin className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
            ),
            link: process.env.LINKEDIN_LINK,
            text: process.env.LINKEDIN_USER,
        },
        resume: {
            icon: (
                <Briefcase className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
            ),
            link: process.env.RESUME_LINK,
            text: 'Resume',
        },
    };
    const aboutWebsiteMdString = await fs.readFile(MARKDOWN_FILE, 'utf-8');
    return (
        <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
                <div className="rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col space-y-4">
                        <div className="gap-1 flex flex-col">
                            <h2 className="text-2xl font-semibold text-[#0033A0] dark:text-blue-600">
                                Minh Tran
                            </h2>
                            <p className="text-md dark:text-gray-400">
                                {process.env.CURRENT_ORG}
                            </p>
                            <span className="text-sm dark:text-blue-600 text-[#0033A0] italic">
                                {process.env.CURRENT_JOB}
                            </span>
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
                                            className="hover:text-[#0033A0] dark:hover:text-blue-600"
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
            <div>
                <MarkdownRender mdString={aboutWebsiteMdString} />
            </div>
        </div>
    );
};

export default ContactPage;
