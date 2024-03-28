import Contributions from '@/components/Dashboard/contributions/contributions';
import CodingActive from '@/components/Dashboard/wakatime/codingActive';
import { Cpu } from 'lucide-react';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: 'Minh Tran - Tech Dashboard',
        description:
            "Minh Tran's personal dashboard, built with Next.js API routes deployed as serverless functions.",
    };
};

const DashboardPage = () => {
    const sectionTitle = "Minh's Dashboard";
    const sectionDescription =
        'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';
    return (
        <>
            <div className="container mt-12">
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-1.5 text-3xl font-semibold text-gray-800 dark:text-gray-300">
                        <Cpu className="mr-1" />
                        <h1 className="capitalize">{sectionTitle}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {sectionDescription}
                    </p>
                </div>
                <div className="flex flex-col gap-8">
                    <CodingActive />
                    <Contributions />
					
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
