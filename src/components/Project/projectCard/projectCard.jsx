import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNowStrict } from 'date-fns';
import { toZonedTime, fromZonedTime } from 'date-fns-tz';
import { TIMEZONE } from '@/common/constants/timezone';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const ProjectCard = async ({ project }) => {
    const projectName = project?.name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    let pushedAtDistance = '';
    if (project?.pushedAt) {
        const zonedDate = toZonedTime(
            fromZonedTime(project?.pushedAt, TIMEZONE),
            TIMEZONE
        );
        pushedAtDistance = formatDistanceToNowStrict(zonedDate, {
            addSuffix: true,
        });
    }
    const licenseName = project?.licenseInfo?.name;

    return (
        <div className="flex flex-col p-4 rounded-box gap-3 bg-base-200 border">
            <div className="justify-end card-actions">
                <div className="badge badge-secondary flex items-center gap-2 rounded-full">
                    <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                    {project?.createdAt &&
                        new Date(project?.createdAt).toLocaleDateString(
                            'en-GB',
                            {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            }
                        )}
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
                    className="rounded-box"
                    loading="lazy"
                />
            </Link>
            <Link
                href={project?.homepageUrl || project?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-title hover:text-primary transition lg:text-xl md:text-lg text-lg"
            >
                {projectName}
            </Link>
            <div
                className="tooltip !text-start "
                data-tip={project?.description}
            >
                <p className="line-clamp-3 text-sm">{project?.description}</p>
            </div>
            <div className="card-actions">
                {project?.repositoryTopics?.nodes?.map((node, index) => (
                    <p key={index} className="badge badge-outline">
                        {node?.topic?.name}
                    </p>
                ))}
            </div>
            <div className="flex-grow"></div>
            {/* Make this down to bottom of the card */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap justify-between text-sm">
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
                                <div className="flex leading-none gap-1">
                                    <FontAwesomeIcon icon="fa-duotone fa-solid fa-star" />
                                    {project?.stargazerCount}
                                </div>
                                <div className="flex leading-none gap-1">
                                    <FontAwesomeIcon icon="fa-duotone fa-solid fa-code-fork" />
                                    {project?.forkCount}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {project?.homepageUrl && (
                            <Link
                                href={project?.homepageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                <FontAwesomeIcon icon="fa-duotone fa-solid fa-eye" />
                            </Link>
                        )}
                        {project?.homepageUrl && ' | '}
                        {project?.url && (
                            <Link
                                href={project?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition"
                            >
                                <FontAwesomeIcon icon="fa-brands fa-github" />
                            </Link>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2  text-sm justify-between">
                    <div className="flex leading-none gap-2">
                        <FontAwesomeIcon icon="fa-duotone fa-solid fa-scale-balanced" />
                        <p>{licenseName || 'No License'}</p>
                    </div>
                    <div className="flex leading-none gap-2">
                        <FontAwesomeIcon icon="fa-duotone fa-solid fa-up-from-line" />
                        <p>{pushedAtDistance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
