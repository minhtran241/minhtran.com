import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import {
    Braces,
    Server,
    Database,
    BrainCircuit,
    BarChart,
    TextSearch,
} from 'lucide-react';
import { fileSystemInfo } from '@/common/constants/fileSystem';

const icons = {
    'Programming Languages': (
        <Braces className="text-white lg:h-4 lg:w-4 h-3 w-3" />
    ),
    'Web Development': <Server className="text-white lg:h-4 lg:w-4 h-3 w-3" />,
    'Big Data': <TextSearch className="text-white lg:h-4 lg:w-4 h-3 w-3" />,
    Databases: <Database className="text-white lg:h-4 lg:w-4 h-3 w-3" />,
    'ML/DL': <BrainCircuit className="text-white lg:h-4 lg:w-4 h-3 w-3" />,
    'Monitoring and others': (
        <BarChart className="text-white lg:h-4 lg:w-4 h-3 w-3" />
    ),
};

const DATA_ATTRS_DIR = path.join(
    process.cwd(),
    fileSystemInfo.dataFetchDir,
    'skill'
);
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'skills.json');

// * FETCH SKILLS FROM LOCAL JSON
const getSKills = async () => {
    const skillsData = await fs.readFile(path.join(DATA_ATTRS_FILE), 'utf-8');
    const skills = JSON.parse(skillsData);
    return skills;
};

const SECTION_TITLE = 'Mainly working with';
const SECTION_DESCRIPTION =
    'I have experience working with these technologies and tools. I am always open to learning new things and working with new technologies.';

const SkillsComponent = async () => {
    const skills = await getSKills();

    return (
        <div className="items-center justify-center mt-12  py-12 bg-gray-200 dark:bg-gray-900">
            <div className="container">
                <SectionLabel
                    title={SECTION_TITLE}
                    description={SECTION_DESCRIPTION}
                />
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2 mt-8">
                    {skills.map((skill, index) => (
                        <div
                            className="rounded-lg p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out"
                            key={index}
                        >
                            <div className="flex items-center gap-2 mb-5">
                                <div className="lg:w-6 lg:h-6 w-5 h-5 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-[#0033A0] dark:bg-blue-600 text-white">
                                    {icons[skill.name]}
                                </div>
                                <h2 className="title-font font-medium lg:text-lg text-base">
                                    {skill.name}
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skill.technologies.map((badge, index) => (
                                    <div key={index} className="rounded">
                                        <img
                                            src={badge}
                                            alt="skill"
                                            className="!rounded w-auto lg:h-6 h-5"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <Suspense fallback={<Loading />}>
            <SkillsComponent />
        </Suspense>
    );
};

export default Skills;
