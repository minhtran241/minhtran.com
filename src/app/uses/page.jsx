import { GalleryHorizontalEnd } from 'lucide-react';
import Devices from '@/components/Uses/devices';
import DevTools from '@/components/Uses/devtools';

const PAGE_TITLE = 'Used Devices and Tools';
const PAGE_DESCRIPTION =
    'List of devices and tools that I use for development and daily tasks.';

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
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-1.5 text-2xl font-semibold">
                        <GalleryHorizontalEnd className="mr-1 h-6 w-6" />
                        <h1 className="capitalize">{PAGE_TITLE}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {PAGE_DESCRIPTION}
                    </p>
                </div>
                <div className="flex flex-col gap-8">
                    {/* Accessories section: laptop, iphone, .... */}
                    {/* Laptop first */}
                    <Devices />
                    <DevTools />
                </div>
            </div>
        </>
    );
};

export default UsesPage;
