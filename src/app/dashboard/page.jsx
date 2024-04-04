import Contributions from '@/components/Dashboard/contributions/contributions';
import CodingActive from '@/components/Dashboard/wakatime/codingActive';
import { Cpu } from 'lucide-react';

const PAGE_TITLE = "Minh's Dashboard";
const PAGE_DESCRIPTION = "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.";

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    };
};

const DashboardPage = () => {
    return (
        <>
            <div className="container mt-12">
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-1.5 text-3xl font-semibold">
                        <Cpu className="mr-1 h-6 w-6" />
                        <h1 className="capitalize">{PAGE_TITLE}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {PAGE_DESCRIPTION}
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
