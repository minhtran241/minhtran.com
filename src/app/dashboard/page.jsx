import Contributions from '@/components/Dashboard/contributions/contributions';
import CodingActive from '@/components/Dashboard/wakatime/codingActive';
import SectionLabel from '../../components/Common/sectionLabel/sectionLabel';

const DashboardPage = () => {
    const sectionTitle = 'Dashboard';
    const sectionDescription =
        'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';
    return (
        <div className=" container mt-12">
            {/* Title */}
            <SectionLabel
                title={sectionTitle}
                description={sectionDescription}
            />
            <div className="flex flex-col gap-8">
                <CodingActive />
                <Contributions />
            </div>
        </div>
    );
};

export default DashboardPage;
