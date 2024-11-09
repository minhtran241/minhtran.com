import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Image from 'next/image';

const ICONS_MAP = {
    'Programming Languages': (
        <FontAwesomeIcon icon="fa-solid fa-brackets-curly fa-sm" />
    ),
    'Web Development': <FontAwesomeIcon icon="fa-solid fa-browser fa-sm" />,
    'Big Data': <FontAwesomeIcon icon="fa-solid fa-arrow-up-big-small fa-sm" />,
    Databases: <FontAwesomeIcon icon="fa-solid fa-database fa-sm" />,
    'ML/DL': <FontAwesomeIcon icon="fa-solid fa-brain-circuit fa-sm" />,
    'Monitoring and others': (
        <FontAwesomeIcon icon="fa-solid fa-monitor-waveform fa-sm" />
    ),
};

const SKILLS_FILE_PATH = path.join(fileSystemInfo.dataFetchDir, 'skills.json');
const ASSETS_PATH = path.join(process.cwd(), 'public', 'assets', 'skills');

// Fetch skills from JSON and list associated images asynchronously
const fetchSkillsData = async () => {
    try {
        const data = await fs.readFile(SKILLS_FILE_PATH, 'utf-8');
        const skills = JSON.parse(data);

        await global.Promise.all(
            skills.map(async (skill) => {
                try {
                    skill.badges = await fs.readdir(
                        path.join(ASSETS_PATH, skill.assets_folder)
                    );
                } catch (error) {
                    console.error(
                        `Error reading assets for ${skill.name}:`,
                        error
                    );
                    skill.badges = [];
                }
            })
        );

        return skills;
    } catch (error) {
        console.error('Error loading skills data:', error);
        return [];
    }
};

const SECTION_HEADING = 'Mainly working with';
const SECTION_DESCRIPTION =
    'I have experience working with these technologies and tools. I am always open to learning new things and working with new technologies.';

const SkillsList = async () => {
    const skills = await fetchSkillsData();

    return (
        <div className="flex items-center justify-center">
            <div className="container pb-12">
                <SectionLabel
                    title={SECTION_HEADING}
                    description={SECTION_DESCRIPTION}
                />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-8 xl:grid-cols-2 mt-8">
                    {skills.map((skill, idx) => (
                        <div
                            className="rounded-box p-4 border shadow-lg bg-base-200 transition-shadow duration-300 hover:shadow-xl"
                            key={idx}
                        >
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-content">
                                    {ICONS_MAP[skill.name]}
                                </div>
                                <h2 className="card-title text-lg">
                                    {skill.name}
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skill.badges.map((badge, badgeIdx) => (
                                    <div key={badgeIdx} className="rounded">
                                        <Image
                                            src={`/assets/skills/${skill.assets_folder}/${badge}`}
                                            alt={`${skill.name} badge`}
                                            className="rounded w-auto h-6"
                                            width={100}
                                            height={50}
                                            loading="lazy"
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

const Skills = () => (
    <Suspense fallback={<Loading />}>
        <SkillsList />
    </Suspense>
);

export default Skills;
