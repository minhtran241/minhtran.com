import Image from 'next/image';
import Link from 'next/link';
import { Github, Radio, Loader2, ArrowRight, CalendarDays } from 'lucide-react';
import { Suspense } from 'react';
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

const Projects = async ({ limit }) => {
    const projects = await getProjects(limit || PROJECT_FETCH_LIMIT);
    return (
        <div className="items-center justify-center mt-20">
            <div className="max-w-xl mx-auto">
                <div className="text-center ">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-5xl font-semibold leading-tight dark:text-white">
                            {' '}
                            Personal{' '}
                            <span className="text-[#0033A0]">
                                Projects
                            </span>{' '}
                        </h1>
                        <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-blue-200"></div>
                            <div className="flex-1 h-2 bg-blue-400"></div>
                            <div className="flex-1 h-2 bg-[#0033A0]"></div>
                        </div>
                    </div>
                    <p className="mb-16 text-base text-center text-gray-600">
                        I have worked on these projects in my free time. I have
                        used these projects to learn new technologies and
                        implement new features.
                    </p>
                </div>
            </div>
            <Suspense
                fallback={
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                        <Loader2 className="mr-2 h-12 w-12 animate-spin text-[#0033A0]" />
                    </div>
                }
            >
                {/* // same height for all cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                                    {new Date(
                                        project.created_at
                                    ).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                            <Link
                                href={`/project/${project.slug}`}
                                // onClick={() => incrementViewCount(project.slug)}
                            >
                                <Image
                                    className="rounded-md max-w-full max-h-[200px] object-cover w-full"
                                    src={project.thumbnail}
                                    alt={project.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    // style={{
                                    //     width: 'auto',
                                    //     height: 'auto',
                                    // }}
                                />
                            </Link>

                            <Link
                                href={`/project/${project.slug}`}
                                className="text-xl font-bold mt-4 hover:text-[#0033A0] dark:hover:text-blue-600"
                            >
                                {project.title}
                            </Link>
                            <p className=" text-gray-600">
                                {project.description}
                            </p>
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
            </Suspense>
            {/* See More */}
            <div className="flex justify-center mt-8">
                <Link href="/project">
                    <div className="flex flex-row items-center gap-2 text-lg font-semibold hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer">
                        See More
                        <ArrowRight className="h-6 w-6" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
