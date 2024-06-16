import { GalleryHorizontalEnd } from 'lucide-react';
import LinkTableRow from '@/common/elements/linkTableRow';
import READING_LIST from '@/common/constants/readingList';

const PAGE_TITLE = "Minh's Reading List";
const PAGE_DESCRIPTION =
    'This is a list of my favorite articles that I read daily.';

const ReadsPage = async () => {
    return (
        <>
            <div className="container mt-12">
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-1.5 text-3xl font-semibold">
                        <GalleryHorizontalEnd className="mr-1 h-6 w-6" />
                        <h1 className="capitalize">{PAGE_TITLE}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {PAGE_DESCRIPTION}
                    </p>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-[#0033A0] dark:text-blue-600">
                                        Index
                                    </th>
                                    <th className="text-[#0033A0] dark:text-blue-600">
                                        Title
                                    </th>
                                    <th className="text-[#0033A0] dark:text-blue-600">
                                        Description
                                    </th>
                                    <th className="text-[#0033A0] dark:text-blue-600">
                                        Link
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {READING_LIST.reverse().map((item, index) => (
                                    <LinkTableRow
                                        key={index}
                                        url={item}
                                        index={index + 1}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReadsPage;
