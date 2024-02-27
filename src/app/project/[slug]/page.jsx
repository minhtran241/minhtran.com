import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import Markdown from 'react-markdown';
import { Github, Radio, Loader2 } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

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
            <div className={`content-center items-center justify-center`}>
                {/* Image in the center */}
                <div className="flex  items-center justify-center mb-5">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={1000}
                        height={1000}
                        className="rounded-lg"
                    />
                </div>
                {/* Title */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-primary dark:text-white">
                        {project.title}
                    </h1>
                    <div className="flex flex-col items-center gap-2">
                        {project.repo_link && (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.repo_link}
                                className="flex items-center gap-2"
                            >
                                <Github className="h-5 w-5" />
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer">
                                    {project.repo_link}
                                </span>
                            </Link>
                        )}
                        {project.link && (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.link}
                                className="flex items-center gap-2"
                            >
                                <Radio className="h-6 w-6" />
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer">
                                    {project.link}
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 !pt-8">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-8/12">
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
                                <div className="rich-content mb-8">
                                    {/* <Markdown>{project.content}</Markdown> */}
                                    <Markdown
                                        rehypePlugins={[rehypeRaw]}
                                        children={project.content}
                                        components={{
                                            code(props) {
                                                const {
                                                    children,
                                                    className,
                                                    node,
                                                    ...rest
                                                } = props;
                                                const match =
                                                    /language-(\w+)/.exec(
                                                        className || ''
                                                    );
                                                return match ? (
                                                    <SyntaxHighlighter
                                                        {...rest}
                                                        PreTag="div"
                                                        children={String(
                                                            children
                                                        ).replace(/\n$/, '')}
                                                        language={match[1]}
                                                        style={nightOwl}
                                                    />
                                                ) : (
                                                    <code
                                                        {...rest}
                                                        className={className}
                                                    >
                                                        {children}
                                                    </code>
                                                );
                                            },
                                        }}
                                    />
                                </div>
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
        <Suspense
            fallback={
                <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    <Loader2 className="mr-2 h-12 w-12 animate-spin text-[#0033A0]" />
                </div>
            }
        >
            <SingleProjectContent project={project} />
        </Suspense>
    );
};

export default SingleProjectPage;
