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
    GitFork,
    Eye,
    ArrowUpFromLine,
    Scale,
} from 'lucide-react';
import useSWR from 'swr';
import { fetcher } from '@/services/fetcher';
import { userBasicInfo } from '@/common/constants/userBasic';
import { formatDistanceToNowStrict } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { TIMEZONE } from '@/common/constants/timezone';

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
        return <Loading />;
    }

    const createdAt = repoData?.createdAt;

    const pushedAt = repoData?.pushedAt;
    const zonedDate = utcToZonedTime(
        zonedTimeToUtc(pushedAt, TIMEZONE),
        TIMEZONE
    );
    const pushedAtDistance = formatDistanceToNowStrict(zonedDate, {
        addSuffix: true,
    });
    const licenseName = repoData?.licenseInfo?.name;
    const homepageUrl = repoData?.homepageUrl || project?.repo_link;

    return (
        <div className="flex flex-col p-4 rounded-lg border dark:border-gray-700 border-gray-200 gap-3">
            {/* Created at */}
            <div className="flex flex-row justify-between">
                <div className="flex items-center gap-2 justify-start text-[#0033A0] dark:text-blue-600 text-sm">
                    <CalendarDays className="h-4 w-4" />
                    <span className="">
                        {new Date(createdAt).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </span>
                </div>
                {project?.research_purpose && (
                    <div className="flex items-center gap-2 justify-start text-[#0033A0] dark:text-blue-600 text-sm">
                        <ScrollText className="h-4 w-4" />
                        <span className="">Research Purpose</span>
                    </div>
                )}
            </div>
            <Link href={homepageUrl} target="_blank" rel="noopener noreferrer">
                <Image
                    className="rounded-lg relative w-full border-2 border-[#0033A0] dark:border-white lg:h-52 md:h-48 sm:h-40 h-40"
                    src={project?.thumbnail || repoData?.openGraphImageUrl}
                    alt={project?.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </Link>

            <Link
                href={homepageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:text-[#0033A0] dark:hover:text-blue-600 transition"
            >
                {project?.title}
            </Link>
            <div
                className="tooltip dark:tooltip-primary !text-start cursor-pointer"
                data-tip={repoData?.description}
            >
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {repoData?.description}
                </p>
                {/* <span className="text-sm text-[#0033A0] dark:text-blue-600">
                    [Hover to read more]
                </span> */}
            </div>
            <div className="flex flex-wrap gap-2 rounded">
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
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap justify-between text-gray-600 dark:text-gray-400 text-sm">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div
                                    className="rounded-full h-3 w-3"
                                    style={{
                                        backgroundColor: `${repoData?.primaryLanguage?.color}`,
                                    }}
                                ></div>
                                <span className="">
                                    {repoData?.primaryLanguage?.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4" />
                                    <span className="">
                                        {repoData?.stargazerCount}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitFork className="h-4 w-4" />
                                    <span className="">
                                        {repoData?.forkCount}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span className="">
                                        {repoData?.watchers?.totalCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {repoData?.homepageUrl && (
                            <Link
                                href={repoData?.homepageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#0033A0] dark:hover:text-blue-600 transition"
                            >
                                <ExternalLink className="h-4 w-4" />
                            </Link>
                        )}
                        {repoData?.homepageUrl && ' | '}
                        {project?.repo_link && (
                            <Link
                                href={project?.repo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#0033A0] dark:hover:text-blue-600 transition"
                            >
                                <Github className="h-4 w-4" />
                            </Link>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 text-gray-600 dark:text-gray-400 text-sm justify-between">
                    <p className="flex items-center gap-2">
                        <Scale className="h-4 w-4" />
                        <p>{licenseName || 'No License'}</p>
                    </p>
                    <p className="flex items-center gap-2">
                        <ArrowUpFromLine className="h-4 w-4" />
                        <p>{pushedAtDistance}</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <Suspense fallback={<Loading />}>
            <ProjectCardComponent project={project} />
        </Suspense>
    );
};

export default ProjectCard;
