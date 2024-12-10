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
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-base-100 shadow-lg rounded-box border border-base-300">
            {/* Left Side: Image */}
            <div className="flex-shrink-0 w-full md:w-1/3">
                <Link
                    href={project?.homepageUrl || project?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={
                            project.thumbnail
                                ? `/projects/${project.thumbnail}`
                                : project?.openGraphImageUrl
                        }
                        alt={projectName}
                        width={400}
                        height={300}
                        className="rounded-box object-cover"
                        loading="lazy"
                    />
                </Link>
            </div>

            {/* Right Side: Info */}
            <div className="flex-grow w-full md:w-2/3 flex flex-col gap-4">
                {/* Title */}
                <Link
                    href={project?.homepageUrl || project?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold hover:text-primary transition"
                >
                    {projectName}
                </Link>

                {/* Description */}
                <p className="text-sm line-clamp-3">{project?.description}</p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                    {project?.repositoryTopics?.nodes?.map((node, index) => (
                        <span
                            key={index}
                            className="badge badge-primary badge-outline text-xs"
                        >
                            {node?.topic?.name}
                        </span>
                    ))}
                </div>

                {/* Details */}
                <div className="flex flex-wrap justify-between text-sm">
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <div
                                className="rounded-full h-3 w-3"
                                style={{
                                    backgroundColor: `${project?.primaryLanguage?.color}`,
                                }}
                            ></div>
                            <span>{project?.primaryLanguage?.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon="fa-duotone fa-star" />
                            {project?.stargazerCount}
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon="fa-duotone fa-code-fork" />
                            {project?.forkCount}
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon="fa-duotone fa-solid fa-users" />
                            {project?.collaborators?.nodes?.length}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon="fa-duotone fa-solid fa-scale-balanced" />
                        <span>{licenseName || 'No License'}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between text-xs">
                    <div>
                        <FontAwesomeIcon icon="fa-duotone fa-calendar-days" />{' '}
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
                    <div>
                        <FontAwesomeIcon icon="fa-duotone fa-up-from-line" />{' '}
                        {pushedAtDistance}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
