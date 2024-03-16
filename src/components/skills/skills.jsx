import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';

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
                <div className="flex flex-col items-center justify-center gap-10 grid-cols-2 lg:grid lg:grid-cols-2">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded items-center justify-center gap-4 p-4 min-h-[150px] bg-white dark:bg-black border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out"
                        >
                            <h1 className="text-xl font-semibold">
                                {skill.name}
                            </h1>
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
