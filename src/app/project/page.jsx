import Link from 'next/link';
import Image from 'next/image';
import { Github, Radio, CalendarDays } from 'lucide-react';
import path from 'path';
import fs from 'fs/promises';

const PROJECT_FETCH_LIMIT = 100;
const DATA_ATTRS_DIR = path.join(process.cwd(), 'data', 'project');
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'projects.json');

// * Fetch projects from file system
const getProjects = async (limit) => {
    try {
        // Read project data from JSON file
        const projectsData = await fs.readFile(
            path.join(DATA_ATTRS_FILE),
            'utf-8'
        );
        const projects = JSON.parse(projectsData);
        return projects.slice(0, limit);
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Failed to fetch projects');
    }
};

const ProjectPage = async () => {
    const projects = await getProjects(PROJECT_FETCH_LIMIT);
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {projects.map((project, index) => (
                // same height for all cards
                <div
                    className="flex flex-col p-4 shadow-lg rounded-md hover:shadow-2xl border dark:border-gray-700 border-gray-200"
                    key={index}
                >
                    {/* Created at */}
                    <div className="flex flex-row justify-end leading-none text-[#0033A0] dark:text-blue-600 gap-2 mb-4">
                        <CalendarDays className="h-4 w-4" />
                        <span className="italic">
                            {new Date(project.created_at).toLocaleDateString(
                                'en-GB',
                                {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                }
                            )}
                        </span>
                    </div>
                    <Link
                        href={`/project/${project.slug}`}
                        // onClick={() => incrementViewCount(project.slug)}
                    >
                        <Image
                            className="rounded-md"
                            src={project.thumbnail}
                            alt={project.title}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                        />
                    </Link>

                    <Link
                        // href={project.link ? project.link : project.repo_link}
                        href={`/project/${project.slug}`}
                        className="text-xl font-bold mt-4 hover:text-[#0033A0] dark:hover:text-blue-600"
                    >
                        {project.title}
                    </Link>
                    <p className=" text-gray-600">{project.description}</p>
                    {project.link && (
                        <div className="flex flex-row gap-2 mt-4">
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-1 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer font-semibold leading-none"
                                // onClick={() => incrementViewCount(project.slug)}
                            >
                                <Radio className="h-4 w-4" />
                                View Live
                            </Link>
                        </div>
                    )}

                    {project.repo_link && (
                        <div className="flex flex-row gap-2 mt-4">
                            <Link
                                href={project.repo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-1 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer font-semibold leading-none"
                                // onClick={() => incrementViewCount(project.slug)}
                            >
                                <Github className="h-4 w-4" />
                                View on Github
                            </Link>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech_stack.map((badge, index) => (
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
            ))}
        </div>
    );
};

export default ProjectPage;
