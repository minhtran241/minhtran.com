import { Github, Radio } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MarkdownRender from '@/components/markdownRenderer/markdownRenderer';
import Loading from '@/app/loading';
import ProjectMetadata from '@/components/projectMetadata/projectMetadata';

// SEO metadata
export const generateMetadata = async ({ params }) => {
    const p = getProject(params.slug);
    return {
        title: p.title,
        description: p.description,
        image: p.thumbnail,
        author: 'Minh Tran',
        keywords: p.tech_stack,
    };
};

const DATA_ATTRS_DIR = path.join(
    process.cwd(),
    process.env.DATA_FETCH_DIR,
    'project'
);
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'projects.json');
const DATA_CONTENTS_DIR = path.join(DATA_ATTRS_DIR, 'contents');

// * Get project from file system
const getProject = async (slug) => {
    try {
        // Read project data from JSON file
        const projectsData = await fs.readFile(
            path.join(DATA_ATTRS_FILE),
            'utf-8'
        );
        const projects = JSON.parse(projectsData);
        const project = projects.find((project) => project.slug === slug);

        // Read markdown content from file system
        const content = await fs.readFile(
            path.join(DATA_CONTENTS_DIR, `${slug}.md`),
            'utf-8'
        );
        project.content = content;

        return project;
    } catch (error) {
        console.error('Error fetching project:', error);
        throw new Error('Failed to fetch project');
    }
};

const SingleProjectContent = async ({ project }) => {
    const createdAtText = new Date(project.created_at).toLocaleDateString(
        'en-US',
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    );
    return (
        <>
            <div className="content-center items-center justify-center mb-5">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full justify-center lg:w-9/12">
                        <h1 className="font-bold text-[#0033A0] dark:text-blue-600 mb-3 lg:text-4xl md:text-3xl sm:text-3xl text-2xl">
                            {project.title}
                        </h1>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {createdAtText}
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-center items-center justify-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 gap-4">
                        <div className="items-center justify-between">
                            <ProjectMetadata project={project} />
                            <div className="mb-5">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    width={1200}
                                    height={600}
                                    layout="responsive"
                                    className="rounded-lg"
                                />
                            </div>
                            <p className="mb-5 border-b font-medium italic border-[#e9e9e9] pb-[20px] text-justify dark:border-white dark:border-opacity-10">
                                {project.description}
                            </p>
                            <MarkdownRender mdString={project.content} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const SingleProjectPage = async ({ params }) => {
    const { slug } = params;
    const project = await getProject(slug);

    return (
        <Suspense fallback={<Loading />}>
            <SingleProjectContent project={project} />
        </Suspense>
    );
};

export default SingleProjectPage;
