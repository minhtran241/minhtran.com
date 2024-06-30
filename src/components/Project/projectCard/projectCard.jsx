import Image from 'next/image';
import Link from 'next/link';
import {
    CalendarDays,
    Github,
    ExternalLink,
    Star,
    GitFork,
    Eye,
    ArrowUpFromLine,
    Scale,
} from 'lucide-react';
import { formatDistanceToNowStrict } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { TIMEZONE } from '@/common/constants/timezone';

const ProjectCard = async ({ project }) => {
    const projectName = project?.name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    let pushedAtDistance = '';
    if (project?.pushedAt) {
        const zonedDate = utcToZonedTime(
            zonedTimeToUtc(project?.pushedAt, TIMEZONE),
            TIMEZONE
        );
        pushedAtDistance = formatDistanceToNowStrict(zonedDate, {
            addSuffix: true,
        });
    }
    const licenseName = project?.licenseInfo?.name;

    return (
        <div className="flex flex-col p-4 rounded-lg border dark:border-gray-700 border-gray-200 gap-3">
            <div className="flex flex-row justify-between">
                <div className="flex items-center gap-2 justify-start text-[#0033A0] dark:text-blue-600 text-sm">
                    <CalendarDays className="h-4 w-4" />
                    <span className="">
                        {project?.createdAt &&
                            new Date(project?.createdAt).toLocaleDateString(
                                'en-GB',
                                {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                }
                            )}
                    </span>
                </div>
            </div>
            <Link
                href={project?.homepageUrl || project?.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* open graph image */}
                <Image
                    src={project?.openGraphImageUrl}
                    alt={projectName}
                    width={500}
                    height={250}
                    className="rounded-lg border border-[#0033A0] dark:border-blue-600"
                />
            </Link>
            <Link
                href={project?.homepageUrl || project?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-[#0033A0] dark:hover:text-blue-600 transition lg:text-xl md:text-lg text-lg"
            >
                {projectName}
            </Link>
            <div
                className="tooltip dark:tooltip-info !text-start cursor-pointer"
                data-tip={project?.description}
            >
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 lg:text-base md:text-base text-sm">
                    {project?.description}
                </p>
            </div>
            <div className="flex flex-wrap gap-2 rounded">
                {project?.repositoryTopics?.nodes?.map((node, index) => (
                    <p
                        key={index}
                        className="text-sm bg-blue-100 dark:bg-blue-900 text-[#0033A0] dark:text-blue-200 px-2 py-1 rounded-lg"
                    >
                        {node?.topic?.name}
                    </p>
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
                                        backgroundColor: `${project?.primaryLanguage?.color}`,
                                    }}
                                ></div>
                                <span className="">
                                    {project?.primaryLanguage?.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4" />
                                    <span className="">
                                        {project?.stargazerCount}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitFork className="h-4 w-4" />
                                    <span className="">
                                        {project?.forkCount}
                                    </span>
                                </div>
                                {/* <div className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span className="">
                                        {project?.watchers?.totalCount}
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {project?.homepageUrl && (
                            <Link
                                href={project?.homepageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#0033A0] dark:hover:text-blue-600 transition"
                            >
                                <ExternalLink className="h-4 w-4" />
                            </Link>
                        )}
                        {project?.homepageUrl && ' | '}
                        {project?.url && (
                            <Link
                                href={project?.url}
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
                    <div className="flex items-center gap-2">
                        <Scale className="h-4 w-4" />
                        <p>{licenseName || 'No License'}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <ArrowUpFromLine className="h-4 w-4" />
                        <p>{pushedAtDistance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
