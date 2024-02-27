import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';

const DATA_ATTRS_DIR = path.join(process.cwd(), 'data', 'skill');
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'skills.json');

// * FETCH SKILLS FROM LOCAL JSON
const getSKills = async () => {
    const skillsData = await fs.readFile(path.join(DATA_ATTRS_FILE), 'utf-8');
    const skills = JSON.parse(skillsData);
    return skills;
};

const Brands = async () => {
    const skills = await getSKills();
    return (
        <div className="items-center justify-center mt-20">
            <div className="max-w-xl mx-auto">
                <div className="text-center ">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-5xl font-semibold leading-tight dark:text-white">
                            <span className="text-black dark:text-white">
                                Mainly
                            </span>{' '}
                            <span className="text-[#0033A0]">working with</span>{' '}
                        </h1>
                        <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-blue-200"></div>
                            <div className="flex-1 h-2 bg-blue-400"></div>
                            <div className="flex-1 h-2 bg-[#0033A0]"></div>
                        </div>
                    </div>
                    <p className="mb-16 text-base text-center text-gray-600">
                        I have experience working with these technologies and
                        tools. I am always open to learning new things and
                        working with new technologies.
                    </p>
                </div>
            </div>
            {/* Skill Boxes and with title is the key and content is badge list (value), each key is a card with title is key and badges are content of the card, 4 cards */}
            <div className="flex flex-col items-center justify-center gap-10 grid-cols-2 lg:grid lg:grid-cols-2">
                {/* {Object.keys(skills).map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-4 shadow-lg p-4 rounded dark:border dark:border-gray-700 hover:shadow-2xl min-h-[150px]"
                    >
                        <h1 className="text-xl font-semibold">{skill}</h1>
                        <div className="flex flex-wrap gap-4">
                            {skillSets[skillSet].map((badge, index) => (
                                <div key={index}>
                                    <Image
                                        src={badge}
                                        alt="skill"
                                        width={0}
                                        height={0}
                                        // sizes="100vw"
                                        style={{
                                            width: 'auto',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))} */}
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
                                        // sizes="100vw"
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

export default Brands;
