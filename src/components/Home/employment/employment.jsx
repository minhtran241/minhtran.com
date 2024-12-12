import Loading from '@/app/loading';
import Milestone from '../milestone/milestone';
import fs from 'fs/promises';
import path from 'path';
import { Suspense } from 'react';
import SectionLabel from '../sectionLabel/sectionLabel';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

// * FETCH MILESTONES FROM LOCAL JSON
const DATA_ATTRS_FILE = path.join(
    fileSystemInfo.dataFetchDir,
    'employment.json'
);
const getMilestones = async () => {
    const milestonesData = await fs.readFile(
        path.join(DATA_ATTRS_FILE),
        'utf-8'
    );
    const milestones = JSON.parse(milestonesData);
    const sortedMilestones = milestones.sort((a, b) => {
        return new Date(b.start_date) - new Date(a.start_date);
    });
    return sortedMilestones;
};

const SECTION_TITLE = 'Employment History';
const SECTION_DESCRIPTION = '';

const EmploymentComponent = async () => {
    const milestones = await getMilestones();

    return (
        <div className="container">
            <div className="bg-base-100 rounded-box p-8">
                <SectionLabel
                    title={SECTION_TITLE}
                    description={SECTION_DESCRIPTION}
                    icon=<FontAwesomeIcon icon="fa-duotone fa-briefcase" />
                />
                {/* <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"> */}
                <ul className="flex flex-col border-l-2 border-primary list-none p-0">
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

const Employment = () => {
    return (
        <Suspense fallback={<Loading />}>
            <EmploymentComponent />
        </Suspense>
    );
};

export default Employment;
