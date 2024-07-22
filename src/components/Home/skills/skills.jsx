import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const icons = {
    'Programming Languages': (
        <FontAwesomeIcon icon="fa-duotone fa-brackets-curly fa-sm" />
    ),
    'Web Development': <FontAwesomeIcon icon="fa-solid fa-browser" />,
    'Big Data': <FontAwesomeIcon icon="fa-solid fa-arrow-up-big-small" />,
    Databases: <FontAwesomeIcon icon="fa-solid fa-database" />,
    'ML/DL': <FontAwesomeIcon icon="fa-solid fa-head-side-gear" />,
    'Monitoring and others': (
        <FontAwesomeIcon icon="fa-solid fa-monitor-waveform" />
    ),
};

const DATA_ATTRS_FILE = path.join(fileSystemInfo.dataFetchDir, 'skills.json');

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
        <div className="flex items-center justify-center">
            <div className="container pb-12">
                <SectionLabel
                    title={SECTION_TITLE}
                    description={SECTION_DESCRIPTION}
                />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-8 xl:grid-cols-2 mt-8">
                    {skills.map((skill, index) => (
                        <div
                            className="rounded-box p-4 border shadow-lg bg-base-200 transition-shadow duration-300 hover:shadow-xl"
                            key={index}
                        >
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
                                    {icons[skill.name]}
                                </div>
                                <h2 className="card-title text-lg">
                                    {skill.name}
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skill.technologies.map((badge, index) => (
                                    <div key={index} className="rounded">
                                        <img
                                            src={badge}
                                            alt={`${skill.name} badge`}
                                            className="rounded w-auto h-6"
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
