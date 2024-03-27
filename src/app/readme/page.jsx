import MarkdownRender from '@/components/Common/markdownRenderer/markdownRenderer';
import path from 'path';
import fs from 'fs/promises';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import Link from 'next/link';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: 'Contact Minh Tran',
        description: 'Contact Minh Tran - Software Engineer and Data Engineer',
    };
};

const MARKDOWN_FILE = path.join(
    process.cwd(),
    fileSystemInfo.dataFetchDir,
    'contact',
    'about-this-website.md'
);

const ReadmePage = async () => {
    const aboutWebsiteMdString = await fs.readFile(MARKDOWN_FILE, 'utf-8');
    return (
        <>
            <div className="container mt-12">
                <MarkdownRender mdString={aboutWebsiteMdString} />
            </div>
        </>
    );
};

export default ReadmePage;
