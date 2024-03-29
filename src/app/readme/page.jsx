import MarkdownRender from '@/components/Common/markdownRenderer/markdownRenderer';
import path from 'path';
import fs from 'fs/promises';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import LinkPreview from '@/common/elements/linkPreview';

const PAGE_TITLE = 'About minhtran.com';
const PAGE_DESCRIPTION =
    'Personal website was built originally from scratch using Next.js, Tailwind CSS, shadcn/ui, daisyUI, SWR, Chart.js, Apollo, Wakatime API, GitHub API, and more.';
const REPO_URL = 'https://github.com/minhtran241/minhtran.com';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
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
    return (
        <div className="container mt-12">
            <div className="content-center items-center justify-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full justify-center lg:w-9/12">
                        <div className="mb-5 flex justify-center items-center w-full">
                            <LinkPreview url={REPO_URL} />
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
