import Image from 'next/image';
import Link from 'next/link';
import { Github, Radio } from 'lucide-react';

const ProjectMetadata = ({ project }) => {
    return (
        <>
            <div className="flex flex-wrap gap-2 mb-5 rounded">
                {project.tech_stack.map((badge, index) => (
                    <img
                        key={index}
                        src={badge}
                        alt="skill"
                        className="!rounded h-6 w-auto"
                    />
                ))}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                {project.repo_link && (
                    <div className="flex items-center gap-2 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer font-semibold transition">
                        <Github className="h-5 w-5" />
                        <Link href={project.repo_link}>Code repository</Link>
                    </div>
                )}
                {project.link && (
                    <div className="flex items-center gap-2 hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer font-semibold transition">
                        <Radio className="h-5 w-5" />
                        <Link href={project.link}>
                            Live product or documentation
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectMetadata;
