'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import {
    CalendarDays,
    Github,
    ExternalLink,
    ScrollText,
    Star,
    GitBranch
} from 'lucide-react';
import useSWR from 'swr';
import { fetcher } from '@/services/fetcher';
import { userBasicInfo } from '@/common/constants/userBasic';

const ProjectCardComponent = ({ project }) => {
    const username = userBasicInfo.githubUsername;
    const repoName = project?.repo_link?.split('/').pop();
    const BASE_URL =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : process.env.NEXT_PUBLIC_BASE_URL;

    const repoData = useSWR(
        `${BASE_URL}/api/github?username=${username}&repo=${repoName}`,
        fetcher
    )?.data?.repo;

	if (!repoData) {
		return 
	}

    return (
        <div className="flex flex-col p-4 rounded-lg border dark:border-gray-700 border-gray-200">
            {/* Created at */}
            <div className="flex flex-row justify-between mb-4">
                <div className="flex items-center gap-2 justify-start text-[#0033A0] dark:text-blue-600 font-semibold">
                    <CalendarDays className="h-5 w-5" />
                    <span className="">
                        {new Date(project?.created_at).toLocaleDateString(
                            'en-GB',
                            {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            }
                        )}
                    </span>
                </div>
                {project?.research_purpose && (
                    <div className="flex items-center gap-2 justify-end bg-[#0033A0] dark:bg-blue-600 text-white px-2 py-1 rounded-md">
                        <ScrollText className="h-4 w-4" />
                        <p className="text-sm">Research Purpose</p>
                    </div>
                )}
            </div>
            <Link href={`/project/${project?.slug}`}>
                <Image
                    className="rounded-lg relative w-full border-2 border-[#0033A0] dark:border-white lg:h-52 md:h-48 sm:h-40 h-40"
                    src={project?.thumbnail}
                    alt={project?.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </Link>

            <Link
                href={`/project/${project.slug}`}
                className="text-xl font-bold mt-4 hover:text-[#0033A0] dark:hover:text-blue-600 transition"
            >
                {project?.title}
            </Link>
            <div
                className="mt-2 tooltip !text-start cursor-pointer"
                data-tip={project.description}
            >
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.description}
                </p>
                <span className="text-sm text-[#0033A0] dark:text-blue-600">
                    [Hover to read more]
                </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 rounded">
                {project?.tech_stack.map((badge, index) => (
                    <img
                        key={index}
                        src={badge}
                        alt="skill"
                        className="!rounded h-6 w-auto"
                    />
                ))}
            </div>
            <div className="flex-grow"></div>
            {/* Make this down to bottom of the card */}
            <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 mt-4 text-base">
                <div className="flex flex-col gap-2">
                    {/* Language with color */}
                    <div className="flex items-center gap-4">
                        {repoData?.languages?.edges.map((language, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <div
                                    className="rounded-full h-3 w-3"
                                    style={{
                                        backgroundColor: `${language.node.color}`,
                                    }}
                                ></div>
                                <span className="">{language.node.name}</span>
                            </div>
                        ))}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Star className="h-4 w-4" />
                                <span className="">
                                    {repoData?.stargazerCount}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <GitBranch className="h-4 w-4" />
                                <span className="">{repoData?.forkCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {project.repo_link && (
                        <Link
                            href={project.repo_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0033A0] dark:hover:text-blue-600 transition"
                        >
                            <Github className="h-4 w-4" />
                        </Link>
                    )}
                    {project.repo_link && project.link && ' | '}
                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0033A0] dark:hover:text-blue-600 transition"
                        >
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({project}) => {
    return (
        <Suspense fallback={<Loading />}>
            <ProjectCardComponent project={project} />
        </Suspense>
    );
};

export default ProjectCard;
