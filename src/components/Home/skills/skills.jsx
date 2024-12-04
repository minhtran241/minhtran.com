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
    'DevOps & Automation': (
        <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench fa-sm" />
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
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 xl:grid-cols-3">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="bg-base-100 relative">
                            <div className="flex items-center justify-between font-bold">
                                {skill.name}
                            </div>
                            <div className="relative overflow-hidden rounded-box border border-gray-200 mt-4">
                                <div className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-8 before:bg-gradient-to-r before:from-base-100 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-8 after:bg-gradient-to-l after:from-base-100 after:to-transparent after:z-10">
                                    <div className="relative flex h-24 animate-[scroll_10s_linear_infinite] items-center">
                                        {skill.badges.map((badge, badgeIdx) => (
                                            <div
                                                key={badgeIdx}
                                                className="flex-shrink-0 p-2 rounded"
                                            >
                                                <Image
                                                    src={`/assets/skills/${skill.assets_folder}/${badge}`}
                                                    alt={`${skill.name} badge`}
                                                    className="object-contain rounded w-auto h-6"
                                                    width={100}
                                                    height={50}
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                        {skill.badges.map((badge, badgeIdx) => (
                                            <div
                                                key={`clone-${badgeIdx}`}
                                                className="flex-shrink-0 w-24 h-24 p-2"
                                            >
                                                <Image
                                                    src={`/assets/skills/${skill.assets_folder}/${badge}`}
                                                    alt={`${skill.name} badge`}
                                                    className="object-contain"
                                                    width={96}
                                                    height={96}
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
