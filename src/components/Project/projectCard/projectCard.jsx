import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Github, Radio } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="flex flex-col p-4 rounded-lg border dark:border-gray-700 border-gray-200 ">
            {/* Created at */}
            <div className="flex flex-row justify-end leading-none text-[#0033A0] dark:text-blue-600 gap-2 mb-4">
                <CalendarDays className="h-4 w-4" />
                <span className="italic">
                    {new Date(project.created_at).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </span>
            </div>
            <Link href={`/project/${project.slug}`}>
                <Image
                    className="rounded-lg relative w-full border-2 border-[#0033A0] dark:border-white lg:h-52 md:h-48 sm:h-40 h-40"
                    src={project.thumbnail}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </Link>

            <Link
                href={`/project/${project.slug}`}
                className="text-xl font-bold mt-4 hover:text-[#0033A0] dark:hover:text-blue-600 transition"
            >
                {project.title}
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
                {project.description?.length > 150
                    ? `${project.description?.substring(0, 150)}...`
                    : project.description}
            </p>
            {project.repo_link && (
                <div className="flex items-center gap-2 mt-4 font-medium text-md leading-none">
                    <Link
                        href={project.repo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-1 text-[#0033A0] dark:text-blue-600 hover:underline"
                    >
                        <Github className="h-4 w-4" />
                        Code repository
                    </Link>
                </div>
            )}
            {project.link && (
                <div className="flex items-center gap-2 mt-2 font-medium text-medium leading-none">
                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-1 text-[#0033A0] dark:text-blue-600 hover:underline"
                    >
                        <Radio className="h-4 w-4" />
                        Live product or documentation
                    </Link>
                </div>
            )}
            <div className="flex flex-wrap gap-2 mt-4 rounded">
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
                        className="!rounded"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
