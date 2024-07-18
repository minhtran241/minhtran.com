import Loading from '@/app/loading';
import Milestone from './milestone/milestone';
import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import SectionLabel from '../sectionLabel/sectionLabel';
import { fileSystemInfo } from '@/common/constants/fileSystem';

// * FETCH MILESTONES FROM LOCAL JSON
const DATA_ATTRS_FILE = path.join(fileSystemInfo.dataFetchDir, 'milestones.json');
const getMilestones = async () => {
    const milestonesData = await fs.readFile(
        path.join(DATA_ATTRS_FILE),
        'utf-8'
    );
    const milestones = JSON.parse(milestonesData);
    const sortedMilestones = milestones.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    return sortedMilestones;
};

const SECTION_TITLE = 'Employment History';
const SECTION_DESCRIPTION =
    'My working has been in the field of software development, performance optimization, system design, and ML/AI. Here are some of the milestones in my career.';

const TimelineComponent = async () => {
    const milestones = await getMilestones();

    return (
        <div className="">
            <div className="container py-12">
                <SectionLabel
                    title={SECTION_TITLE}
                    description={SECTION_DESCRIPTION}
                />
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {milestones.map((milestone, index) => (
                        <Milestone
                            milestone={milestone}
                            first={index === 0}
                            last={index === milestones.length - 1}
                            timeline_end={index % 2 === 0}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Timeline = () => {
    return (
        <Suspense fallback={<Loading />}>
            <TimelineComponent />
        </Suspense>
    );
};

export default Timeline;
