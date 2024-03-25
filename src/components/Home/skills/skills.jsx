import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import {
    Braces,
    Server,
    Database,
    LayoutTemplate,
    BarChart,
    TextSearch,
} from 'lucide-react';

const icons = {
    'Programming Languages': <Braces className="text-white h-4 w-4" />,
    Backend: <Server className="text-white h-4 w-4" />,
    'Big Data': <TextSearch className="text-white h-4 w-4" />,
    Databases: <Database className="text-white h-4 w-4" />,
    Frontend: <LayoutTemplate className="text-white h-4 w-4" />,
    'Monitoring and others': <BarChart className="text-white h-4 w-4" />,
};

const DATA_ATTRS_DIR = path.join(
    process.cwd(),
    process.env.DATA_FETCH_DIR,
    'skill'
);
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'skills.json');

// * FETCH SKILLS FROM LOCAL JSON
const getSKills = async () => {
    const skillsData = await fs.readFile(path.join(DATA_ATTRS_FILE), 'utf-8');
    const skills = JSON.parse(skillsData);
    return skills;
};
// bg-gradient-to-r from-[#0033A0] to-[#00A3FF] dark:from-blue-600 dark:to-blue-900
const SkillsComponent = async () => {
    const skills = await getSKills();
    const sectionTitle = 'Mainly working with';
    const sectionDescription =
        'I have experience working with these technologies and tools. I am always open to learning new things and working with new technologies.';
    return (
        <div className="items-center justify-center mt-12  py-12 bg-gray-200 dark:bg-gray-900">
            <div className="container">
                <SectionLabel
                    title={sectionTitle}
                    description={sectionDescription}
                />
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2 mt-8">
                    {skills.map((skill, index) => (
                        <div
                            className="rounded-lg p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out"
                            key={index}
                        >
                            <div className="flex flex-row gap-2 mb-5">
                                <div className="w-7 h-7 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-[#0033A0] dark:bg-blue-600 text-white">
                                    {icons[skill.name]}
                                </div>
                                <h2 className=" text-xl title-font font-medium">
                                    {skill.name}
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {skill.technologies.map((badge, index) => (
                                    <div key={index}>
                                        <Image
                                            src={badge}
                                            alt="skill"
                                            width={0}
                                            height={0}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                            }}
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
