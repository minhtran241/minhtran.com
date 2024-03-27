import MarkdownRender from '@/components/Common/markdownRenderer/markdownRenderer';
import path from 'path';
import fs from 'fs/promises';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import { Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: 'About minhtran.com',
        description: 'Minh Tran personal website',
    };
};

const MARKDOWN_FILE = path.join(
    process.cwd(),
    fileSystemInfo.dataFetchDir,
    'readme',
    'about-this-website.md'
);

const ReadmePage = async () => {
    const aboutWebsiteMdString = await fs.readFile(MARKDOWN_FILE, 'utf-8');
    const sectionTitle =
        'Introduction to Myself: Professional Personal Website';
    const sectionDescription =
        'Personal website was built originally from scratch using Next.js, Tailwind CSS, shadcn/ui, daisyUI, SWR, Chart.js, Apollo, Wakatime API, GitHub API, and more. Source code and usage instruction can be found on';
    return (
        <div className="container mt-12">
            <div className="content-center items-center justify-center mb-5">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full justify-center lg:w-9/12">
                        <h1 className="font-bold text-[#0033A0] dark:text-blue-600 mb-3 lg:text-4xl md:text-3xl sm:text-3xl text-2xl">
                            {sectionTitle}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="content-center items-center justify-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full justify-center lg:w-9/12">
                        <div className="mb-5">
                            <Image
                                src="/about-this-website/repo.png"
                                alt="About this Website Repo BG"
                                width={1200}
                                height={600}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="mb-5 font-semibold border-b border-[#e9e9e9] pb-[20px] dark:border-white dark:border-opacity-10">
                            {sectionDescription}
                            <span className="text-[#0033A0] dark:text-blue-600 hover:underline ml-1">
                                <Link href="https://github.com/minhtran241/minhtran.com">
                                    GitHub
                                </Link>
                                .
                            </span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <MarkdownRender mdString={aboutWebsiteMdString} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadmePage;
