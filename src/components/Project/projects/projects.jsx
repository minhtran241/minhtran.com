import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';
import { Suspense } from 'react';
import ProjectCard from '../projectCard/projectCard';
import Loading from '@/app/loading';
import SectionLabel from '../../Home/sectionLabel/sectionLabel';
import { userBasicInfo } from '@/common/constants/userBasic';
import axios from 'axios';
import { PROJECT_LIST } from '../../../../data/project/projectList';

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
        return <Loading />;
    }

    const projects = repoData?.data?.user?.repositories?.nodes
        ?.filter((repo) => PROJECT_LIST.includes(repo.name))
        .slice(0, PROJECT_FETCH_LIMIT);

    return (
        <div className="items-center justify-center mt-12 container">
            <SectionLabel
                title={SECTION_TITLE}
                description={SECTION_DESCRIPTION}
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {projects.map((project, index) => (
                    // same height for all cards
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            {/* See More */}
            <div className="flex justify-center mt-8">
                <Link href="/project">
                    <div className="flex flex-row items-center gap-2 font-semibold hover:text-[#0033A0] dark:hover:text-blue-600 cursor-pointer transition lg:text-lg text-base">
                        See More
                        <ChevronsRight className="lg:h-6 lg:w-6 h-5 w-5" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ProjectsComponent />
        </Suspense>
    );
};

export default Projects;
