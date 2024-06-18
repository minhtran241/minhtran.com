import Link from 'next/link';
import Image from 'next/image';
import { Github, Radio, Search } from 'lucide-react';
import path from 'path';
import fs from 'fs/promises';
import ProjectCard from '@/components/Project/projectCard/projectCard';
import { fileSystemInfo } from '@/common/constants/fileSystem';

const PROJECT_FETCH_LIMIT = 100;
const DATA_ATTRS_DIR = path.join(
    process.cwd(),
    fileSystemInfo.dataFetchDir,
    'project'
);
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'projects.json');

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: "Minh Tran's Personal Projects",
        description:
            'Explore personal projects by Minh Tran - A software engineer and data engineer.',
    };
};

// * Fetch projects from file system
const getProjects = async (limit) => {
    try {
        // Read project data from JSON file
        const projectsData = await fs.readFile(
            path.join(DATA_ATTRS_FILE),
            'utf-8'
        );
        const projects = JSON.parse(projectsData);
        projects.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        return projects.slice(0, limit);
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Failed to fetch projects');
    }
};

const ProjectPage = async () => {
    const projects = await getProjects(PROJECT_FETCH_LIMIT);
    const firstProject = projects[0];
    const otherProjects = projects.slice(1);
    return (
        <>
            <div className="items-center justify-center flex flex-col gap-16 container mt-12">
                {/* // First project */}
                <div className="lg:flex lg:items-center w-full lg:gap-12">
                    <Link
                        href={`/project/${firstProject.slug}`}
                        className="w-full object-cover dark:hover:shadow-black/30 lg:w-1/2"
                    >
                        <Image
                            className="lg:min-h-[270px] w-full rounded-md  border-2 border-[#0033A0] dark:border-white"
                            src={firstProject.thumbnail}
                            alt={firstProject.title}
                            width={433}
                            height={218}
                        />
                    </Link>
                    <div className="mt-6 lg:mt-0 lg:w-1/2 ">
					<div className="flex flex-row justify-between">
                        <p className="text-sm font-semibold uppercase text-[#0033A0] dark:text-blue-600">
                            {new Date(
                                firstProject?.created_at
                            ).toLocaleDateString('en-GB', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
						{firstProject?.research_purpose && <div className="flex flex-row gap-2 bg-[#0033A0] dark:bg-blue-600 text-white px-2 py-1 rounded-md">
                                <Search className="h-4 w-4" />
                                <p className="text-xs font-semibold">Research Purpose</p>
                            </div>}
							</div>
                        <Link
                            href={`/project/${firstProject.slug}`}
                            className="mt-4 block text-2xl font-semibold transition hover:text-[#0033A0] dark:hover:text-blue-600 md:text-3xl"
                        >
                            {firstProject.title}
                        </Link>
                        <p className="text-md md:text-md mt-3 text-justify text-gray-600 dark:text-gray-400">
                            {firstProject.description}
                        </p>
                        {firstProject.link && (
                            <div className="flex flex-row gap-2 mt-4">
                                <Link
                                    href={firstProject.link}
                                    target="_blank"
                                    className="flex gap-1 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer font-semibold leading-none transition"
                                >
                                    <Radio className="h-4 w-4" />
                                    View Live
                                </Link>
                            </div>
                        )}
                        {firstProject.repo_link && (
                            <div className="flex flex-row gap-2 mt-4">
                                <Link
                                    href={firstProject.repo_link}
                                    target="_blank"
                                    className="flex gap-1 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer font-semibold leading-none transition"
                                >
                                    <Github className="h-4 w-4" />
                                    View Source
                                </Link>
                            </div>
                        )}
                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {firstProject.tech_stack.map((badge, index) => (
                                <Image
                                    key={index}
                                    src={badge}
                                    alt="skill"
                                    width={0}
                                    height={0}
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* // Other projects */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                    {otherProjects.map((project, index) => (
                        // same height for all cards
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
