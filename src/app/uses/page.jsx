import { FolderOpen } from 'lucide-react';
import Devices from '@/components/Uses/devices';
import DevTools from '@/components/Uses/devtools';
import Breakline from '@/common/elements/breakline';
import Breadcrumbs from '@/components/Common/breadcrumbs/Breadcrumbs';

const PAGE_TITLE = 'Used Devices and Tools';
const PAGE_DESCRIPTION =
    'List of devices and tools that I use for development and daily tasks.';

const BREADCRUMBS = [
    {
        href: '/uses',
        icon: (
            <FolderOpen className="stroke-current lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
        ),
        text: 'Uses',
    },
];

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    };
};

const UsesPage = () => {
    return (
        <>
            <div className="container mt-12">
                {/* <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-1.5 text-2xl font-semibold text-[#0033A0] dark:text-white">
                        <GalleryHorizontalEnd className="mr-1 h-6 w-6" />
                        <h1 className="capitalize">{PAGE_TITLE}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {PAGE_DESCRIPTION}
                    </p>
                </div> */}
                <Breadcrumbs breadcrumbs={BREADCRUMBS} />
                <div className="flex flex-col gap-4 mt-4">
                    {/* Accessories section: laptop, iphone, .... */}
                    {/* Laptop first */}
                    <Devices />
                    <Breakline />
                    <DevTools />
                </div>
            </div>
        </>
    );
};

export default UsesPage;
