import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import Image from 'next/image';

const SKILLS_FILE_PATH = path.join(fileSystemInfo.dataFetchDir, 'skills.json');
const ASSETS_PATH = path.join(process.cwd(), 'public', 'assets', 'skills');

// Utility function to fetch skills data
const fetchSkillsData = async () => {
    try {
        const data = await fs.readFile(SKILLS_FILE_PATH, 'utf-8');
        const skills = JSON.parse(data);

        await Promise.all(
            skills.map(async (skill) => {
                try {
                    skill.badges = await fs.readdir(
                        path.join(ASSETS_PATH, skill.assets_folder)
                    );
                } catch {
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

const SkillsList = async () => {
    const skills = await fetchSkillsData();
    const allBadges = skills.reduce((acc, skill) => {
        return acc.concat(
            skill.badges.map((badge) => path.join(skill.assets_folder, badge))
        );
    }, []);
    // shuffle the badges
    allBadges.sort(() => Math.random() - 0.5);

    return (
        <div className="flex items-center justify-center">
            <div className="container pb-12">
                <SectionLabel
                    title="Mainly working with"
                    description="I have experience working with these technologies and tools. I am always open to learning new things and working with new technologies."
                />
                {/* Skills Carousel */}
                <div className="relative overflow-hidden space-y-6">
                    <div className="relative flex items-center gap-4 animate-infinite-slider">
                        {allBadges
                            .slice(0, allBadges.length / 2)
                            .map((badge, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 p-2 rounded"
                                >
                                    <Image
                                        src={`/assets/skills/${badge}`}
                                        alt={`Badge for ${badge}`}
                                        className="object-contain rounded-box w-auto h-6"
                                        width={100}
                                        height={50}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="relative flex items-center gap-4 animate-infinite-slider-reverse">
                        {allBadges
                            .slice(allBadges.length / 2)
                            .map((badge, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 p-2 rounded"
                                >
                                    <Image
                                        src={`/assets/skills/${badge}`}
                                        alt={`Badge for ${badge}`}
                                        className="object-contain rounded w-auto h-6"
                                        width={100}
                                        height={50}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                    </div>
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
