import { FolderGit2 } from 'lucide-react';
import path from 'path';
import fs from 'fs/promises';
import ProjectCard from '@/components/Project/projectCard/projectCard';
import { fileSystemInfo } from '@/common/constants/fileSystem';

const PROJECT_FETCH_LIMIT = 100;
const DATA_ATTRS_DIR = path.join(
    process.cwd(),
    fileSystemInfo.dataFetchDir,
    'project'
);
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'projects.json');

const PAGE_TITLE = 'Development Projects';
const PAGE_DESCRIPTION =
    'Diverse array of my projects, including open-source side projects, professional work, and research initiatives.';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    };
};

// * Fetch projects from file system
const getProjects = async (limit) => {
    try {
        // Read project data from JSON file
        const projectsData = await fs.readFile(
            path.join(DATA_ATTRS_FILE),
            'utf-8'
        );
        const projects = JSON.parse(projectsData);
        projects.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        return projects.slice(0, limit);
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Failed to fetch projects');
    }
};

const ProjectPage = async () => {
    const projects = await getProjects(PROJECT_FETCH_LIMIT);
    return (
        <>
            <div className="flex flex-col container mt-12 gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-2xl font-semibold text-[#0033A0] dark:text-white">
                        <FolderGit2 className="mr-1 h-6 w-6" />
                        <h1 className="capitalize">{PAGE_TITLE}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {PAGE_DESCRIPTION}
                    </p>
                </div>
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
