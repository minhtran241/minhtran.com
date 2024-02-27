import Milestone from './milestone/milestone';
import fs from 'fs/promises';
import path from 'path';

// * FETCH MILESTONES FROM LOCAL JSON
const DATA_ATTRS_DIR = path.join(process.cwd(), 'data', 'milestone');
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'milestones.json');
const getMilestones = async () => {
    const milestonesData = await fs.readFile(
        path.join(DATA_ATTRS_FILE),
        'utf-8'
    );
    const milestones = JSON.parse(milestonesData);
    const sortedMilestones = milestones.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
    return sortedMilestones;
};

const Timeline = async () => {
    const milestones = await getMilestones();
    return (
        <div className="items-center justify-center mt-20">
            <div className="max-w-xl mx-auto">
                <div className="text-center ">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-5xl font-semibold leading-tight dark:text-white">
                            {' '}
                            Employment{' '}
                            <span className="text-[#0033A0]">History</span>{' '}
                        </h1>
                        <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-blue-200"></div>
                            <div className="flex-1 h-2 bg-blue-400"></div>
                            <div className="flex-1 h-2 bg-[#0033A0]"></div>
                        </div>
                    </div>
                    <p className="mb-16 text-base text-center text-gray-600">
                        My working has been in the field of software
                        development, performance optimization, and system
                        design.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center ">
                {/* lg:max-w-full */}
                <div className="w-full mx-auto">
                    <div className="relative">
                        <div className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#0033A0] lg:block left-1/2"></div>
                        <div className="space-y-2 lg:space-y-4">
                            {milestones.map((milestone, index) => (
                                <Milestone
                                    milestone={milestone}
                                    right={index % 2 === 0}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
