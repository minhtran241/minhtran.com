import MarkdownRender from '@/components/Common/markdownRenderer/markdownRenderer';
import path from 'path';
import { Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import fs from 'fs/promises';
import ContactForm from '@/components/Contact/contactForm/contactForm';
import {
    DATA_FETCH_DIR,
    EMAIL,
    GITHUB_LINK,
    GITHUB_USERNAME,
    LINKEDIN_LINK,
    LINKEDIN_USER,
    RESUME_LINK,
    CURRENT_ORG,
    CURRENT_JOB,
} from '@/common/constants/userBasicInfo';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: 'Contact Minh Tran',
        description: 'Contact Minh Tran - Software Engineer and Data Engineer',
    };
};

const MARKDOWN_FILE = path.join(
    process.cwd(),
    DATA_FETCH_DIR,
    'contact',
    'about-this-website.md'
);

const ContactPage = async () => {
    const iconsTab = {
        mail: {
            icon: (
                <Mail className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
            ),
            link: `mailto:${EMAIL}`,
            text: EMAIL,
        },
        github: {
            icon: (
                <Github className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
            ),
            link: GITHUB_LINK,
            text: GITHUB_USERNAME,
        },
        linkedin: {
            icon: (
                <Linkedin className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
            ),
            link: LINKEDIN_LINK,
            text: LINKEDIN_USER,
        },
        resume: {
            icon: (
                <Briefcase className="h-4 w-4 dark:text-blue-600 text-[#0033A0]" />
            ),
            link: RESUME_LINK,
            text: 'Resume',
        },
    };
    const aboutWebsiteMdString = await fs.readFile(MARKDOWN_FILE, 'utf-8');
    return (
        <>
            <div className="flex flex-col gap-12 container mt-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
                    <div className="rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col space-y-4">
                            <div className="gap-1 flex flex-col">
                                <h2 className="text-2xl font-semibold text-[#0033A0] dark:text-blue-600">
                                    Minh Tran
                                </h2>
                                <p className="text-md dark:text-gray-400">
                                    {CURRENT_ORG}
                                </p>
                                <span className="text-sm dark:text-blue-600 text-[#0033A0] italic">
                                    {CURRENT_JOB}
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
        </>
    );
};

export default ContactPage;
