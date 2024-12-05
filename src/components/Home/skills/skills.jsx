import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import Image from 'next/image';

const SKILLS_FILE_PATH = path.join(fileSystemInfo.dataFetchDir, 'skills.json');
const ASSETS_PATH = path.join(process.cwd(), 'public', 'assets', 'skills');

// Utility function to read a file and parse JSON
const readJsonFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Failed to read JSON file at ${filePath}:`, error);
        throw new Error('Could not load skills data');
    }
};

// Utility function to fetch badges for a skill
const fetchSkillBadges = async (assetsFolder) => {
    try {
        return await fs.readdir(path.join(ASSETS_PATH, assetsFolder));
    } catch (error) {
        console.warn(`Failed to read badges in ${assetsFolder}:`, error);
        return [];
    }
};

// Fetch and prepare skills data with badges
const fetchSkillsData = async () => {
    try {
        const skills = await readJsonFile(SKILLS_FILE_PATH);

        await global.Promise.all(
            skills.map(async (skill) => {
                skill.badges = await fetchSkillBadges(skill.assets_folder);
            })
        );

        return skills;
    } catch (error) {
        console.error('Error fetching skills data:', error);
        return [];
    }
};

// Utility to shuffle an array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

// Component to render badges in a carousel
const BadgesCarousel = ({ badges, direction = 'normal' }) => (
    <div className="relative overflow-hidden space-y-6">
        <div
            className={`relative flex items-center gap-4 ${
                direction === 'reverse'
                    ? 'animate-infinite-slider-reverse'
                    : 'animate-infinite-slider'
            }`}
        >
            {badges.map((badge, idx) => (
                <div key={idx} className="flex-shrink-0 p-2">
                    <Image
                        src={`/assets/skills/${badge}`}
                        alt={`Badge for ${badge}`}
                        className="object-contain w-auto"
                        width={150}
                        height={100}
                    />
                </div>
            ))}
        </div>
    </div>
);

// Main Skills List component
const SkillsList = async () => {
    const skills = await fetchSkillsData();
    const allBadges = shuffleArray(
        skills.flatMap((skill) =>
            skill.badges.map((badge) => path.join(skill.assets_folder, badge))
        )
    );

    const halfway = Math.ceil(allBadges.length / 2);
    const firstHalf = allBadges.slice(0, halfway);
    const secondHalf = allBadges.slice(halfway);

    return (
        <div className="flex items-center justify-center">
            <div className="container pb-12">
                <SectionLabel
                    title="Mainly working with"
                    description="I have experience working with these technologies and tools. I am always open to learning new things and working with new technologies."
                />
                <div className="p-6 rounded-box border border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col items-center justify-center space-y-4  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] dark:bg-black dark:[mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]">
                        <BadgesCarousel badges={firstHalf} />
                        <BadgesCarousel
                            badges={secondHalf}
                            direction="reverse"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Skills component with suspense fallback
const Skills = () => (
    <Suspense fallback={<Loading />}>
        <SkillsList />
    </Suspense>
);

export default Skills;
