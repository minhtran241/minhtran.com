import MarkdownRender from '@/components/Common/markdownRenderer/markdownRenderer';
import path from 'path';
import fs from 'fs/promises';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import { Cpu } from 'lucide-react';
// import Link from 'next/link';

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
    const sectionTitle = "Minh's Dashboard";
    const sectionDescription =
        'This website serves as my personal project where I proudly exhibit my creations and share valuable insights about myself. Crafted with care, I meticulously designed and developed every aspect of this platform. Source code and usage instruction can be found on [this repository](https://github.com/minhtran241/minhtran.com).';
    return (
        <>
            <div className="container mt-12">
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-1.5 text-3xl font-semibold text-gray-800 dark:text-gray-300">
                        <Cpu className="mr-1" />
                        <h1 className="capitalize">{sectionTitle}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {sectionDescription}
                    </p>
                </div>
                <MarkdownRender mdString={aboutWebsiteMdString} />
            </div>
        </>
    );
};

export default ReadmePage;
