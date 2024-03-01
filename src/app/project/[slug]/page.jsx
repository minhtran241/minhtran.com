import { Github, Radio } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MarkdownRender from '@/components/markdownRenderer/markdownRenderer';
import Loading from '@/app/loading';

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

const DATA_ATTRS_DIR = path.join(process.cwd(), 'data', 'project');
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
    return (
        <>
            <div className="content-center items-center justify-center">
                {/* Image in the center */}
                <div className="flex  items-center justify-center mb-5">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={600}
                        height={300}
                        className="rounded-lg border border-[#0033A0] dark:border-white max-w-[1000px] max-h-[500px] w-full h-full"
                    />
                </div>
                {/* Title */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-semibold">{project.title}</h1>
                    <div className="flex flex-col items-center gap-2">
                        {project.repo_link && (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.repo_link}
                                className="flex items-center gap-2 text-[#0033A0] dark:text-blue-600 hover:text-blue-800 dark:hover:text-blue-700 cursor-pointer"
                            >
                                <Github className="h-4 w-4" />
                                <span className="hover:underline">
                                    View Source
                                </span>
                            </Link>
                        )}
                        {project.link && (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.link}
                                className="flex items-center gap-2 text-[#0033A0] dark:text-blue-600 hover:text-blue-800 dark:hover:text-blue-700 cursor-pointer"
                            >
                                <Radio className="h-4 w-4" />
                                <span className="hover:underline">
                                    View Live
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 !pt-8">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                        <div>
                            <div className="flex flex-wrap items-center justify-center ">
                                {/* tech_stack url badges */}
                                <div className="flex flex-wrap items-center justify-center gap-4 mb-5">
                                    {project.tech_stack.map((tech, index) => (
                                        <div key={index}>
                                            <Image
                                                src={tech}
                                                alt={tech}
                                                width={0}
                                                height={0}
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-5 border-b border-[#e9e9e9] pb-[20px] text-justify text-lg font-light italic text-primary dark:border-white dark:border-opacity-10">
                                {project.description}
                            </div>
                            <div>
                                <MarkdownRender mdString={project.content} />
                            </div>
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
