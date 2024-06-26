import { FolderOpen } from 'lucide-react';
import ProjectCard from '@/components/Project/projectCard/projectCard';
import Breadcrumbs from '@/components/Common/breadcrumbs/Breadcrumbs';
import { userBasicInfo } from '@/common/constants/userBasic';
import Loading from '../loading';
import { PROJECT_LIST } from '../../../data/project/projectList';
import axios from 'axios';

const PAGE_TITLE = 'Development Projects';
const PAGE_DESCRIPTION =
    'Diverse array of my projects, including open-source side projects, professional work, and research initiatives.';

const BREADCRUMBS = [
    {
        href: '/project',
        icon: (
            <FolderOpen className="stroke-current lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
        ),
        text: 'Projects',
    },
];

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    };
};

const ProjectPage = async () => {
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

    const projects = repoData?.data?.user?.repositories?.nodes?.filter((repo) =>
        PROJECT_LIST.includes(repo.name)
    );

    return (
        <>
            <div className="flex flex-col container mt-12 gap-8">
                <Breadcrumbs breadcrumbs={BREADCRUMBS} />
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        // same height for all cards
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
