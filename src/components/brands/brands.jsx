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

const BrandsComponent = async () => {
    const skills = await getSKills();
    const sectionTitle = 'Mainly working with';
    const sectionDescription =
        'I have experience working with these technologies and tools. I am always open to learning new things and working with new technologies.';
    return (
        <div className="items-center justify-center mt-12">
            <SectionLabel
                title={sectionTitle}
                description={sectionDescription}
            />
            <div className="flex flex-col items-center justify-center gap-10 grid-cols-2 lg:grid lg:grid-cols-2">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-4 shadow-lg p-4 rounded border border-gray-200 dark:border-gray-700 hover:shadow-2xl min-h-[150px]"
                    >
                        <h1 className="text-xl font-semibold">{skill.name}</h1>
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
    );
};

const Brands = () => {
    return (
        <Suspense fallback={<Loading />}>
            <BrandsComponent />
        </Suspense>
    );
};

export default Brands;
