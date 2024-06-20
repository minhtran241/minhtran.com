import { BookCheck } from 'lucide-react';
// import LinkTableRow from '@/common/elements/linkTableRow';
import READING_LIST from '../../../data/read/readingList';
import LinkPreviewCard from '@/components/Reads/LinkPreviewCard';

const PAGE_TITLE = 'Reading List';
const PAGE_DESCRIPTION =
    'List of articles, blogs, and books that I have read and found useful.';
const SHOWED_READING_LIST = READING_LIST.reverse();

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    };
};

const ReadsPage = async () => {
    return (
        <>
            <div className="container mt-12">
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-1.5 text-2xl font-semibold">
                        <BookCheck className="mr-1 h-6 w-6" />
                        <h1 className="capitalize">{PAGE_TITLE}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {PAGE_DESCRIPTION}
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 md:gap-x-4 lg:gap-x-6 xl:grid-cols-3">
                    {SHOWED_READING_LIST.map((item, index) => (
                        <LinkPreviewCard key={index} url={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ReadsPage;

// <div className="overflow-x-auto">
// <table className="table table-md">
// 	{/* head */}
// 	<thead>
// 		<tr>
// 			<th className="text-[#0033A0] dark:text-blue-600">
// 				Index
// 			</th>
// 			<th className="text-[#0033A0] dark:text-blue-600">
// 				Image
// 			</th>
// 			<th className="text-[#0033A0] dark:text-blue-600">
// 				Title
// 			</th>
// 			<th className="text-[#0033A0] dark:text-blue-600">
// 				Description
// 			</th>
// 			<th className="text-[#0033A0] dark:text-blue-600">
// 				Access Link
// 			</th>
// 		</tr>
// 	</thead>
// 	<tbody>
// 		{SHOWED_READING_LIST.map((item, index) => (
// 			<LinkTableRow
// 				key={index}
// 				url={item}
// 				index={index + 1}
// 			/>
// 		))}
// 	</tbody>
// </table>
// </div>
