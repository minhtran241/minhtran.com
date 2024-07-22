import Link from 'next/link';
import { Suspense } from 'react';
import ProjectCard from '../projectCard/projectCard';
import SectionLabel from '../../Home/sectionLabel/sectionLabel';
import { userBasicInfo } from '@/common/constants/userBasic';
import axios from 'axios';
import { PROJECT_LIST } from '../../../../data/projectList';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const PROJECT_FETCH_LIMIT = 3;

const SECTION_TITLE = 'Development Projects';
const SECTION_DESCRIPTION =
    'A collection of my open-source side projects, professional work projects, and research endeavors. Most of them are available on my GitHub.';

const ProjectsComponent = async () => {
    const username = userBasicInfo.githubUsername;
    const BASE_URL =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : process.env.NEXT_PUBLIC_BASE_URL;

    const repoData = await axios.get(
        `${BASE_URL}/api/github?username=${username}`
    );

    if (!repoData) {
        return (
            <div className="grid w-full place-items-center overflow-x-scroll lg:overflow-visible fa-2x p-6">
                <FontAwesomeIcon icon="fa-duotone fa-cog fa-spin text-primary" />
            </div>
        );
    }

    const projects = repoData?.data?.user?.repositories?.nodes
        ?.filter((repo) => PROJECT_LIST.includes(repo.name))
        .slice(0, PROJECT_FETCH_LIMIT);

    return (
        <div className="bg-primary text-primary-content">
            <div className="container py-12">
                <SectionLabel
                    title={SECTION_TITLE}
                    description={SECTION_DESCRIPTION}
                    primary={false}
                />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {projects.map((project, index) => (
                        // same height for all cards
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                {/* See More */}
                <div className="flex justify-center mt-8">
                    <Link href="/projects">
                        <div className="flex flex-row items-center gap-2 font-semibold hover:text-primary cursor-pointer transition lg:text-lg text-base">
                            See More
                            <FontAwesomeIcon icon="fa-duotone fa-chevrons-right" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <Suspense
            fallback={
                <div className="grid w-full place-items-center overflow-x-scroll lg:overflow-visible fa-2x p-6">
                    <FontAwesomeIcon icon="fa-duotone fa-cog fa-spin text-primary" />
                </div>
            }
        >
            <ProjectsComponent />
        </Suspense>
    );
};

export default Projects;
