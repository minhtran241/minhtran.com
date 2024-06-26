import { FolderOpen, Newspaper, ScrollText } from 'lucide-react';
import { ARTICLE_LIST, PAPER_LIST } from '../../../data/read/readingList';
import LinkPreviewCard from '@/components/Reads/LinkPreviewCard';
import Breakline from '@/common/elements/breakline';
import Breadcrumbs from '@/components/Common/breadcrumbs/Breadcrumbs';

export const maxDuration = 60;

const PAGE_TITLE = 'Reading List';
const PAGE_DESCRIPTION =
    'List of articles and papers that I have read and found interesting and informative.';
const SHOWED_ARTICLE_LIST = ARTICLE_LIST.reverse();
const SHOWED_PAPER_LIST = PAPER_LIST.reverse();

const BREADCRUMBS = [
    {
        href: '/reads',
        icon: (
            <FolderOpen className="stroke-current lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
        ),
        text: 'Reads',
    },
];

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    };
};

const ReadsPage = () => {
    return (
        <>
            <div className="container flex flex-col gap-4 mt-12">
                <Breadcrumbs breadcrumbs={BREADCRUMBS} />
                <div className="flex flex-col gap-4">
                    <section className="flex flex-col gap-8">
                        <div className="flex items-center gap-1.5 text-xl font-medium text-[#0033A0] dark:text-white">
                            <ScrollText className="mr-1 h-5 w-5" />
                            <h1 className="capitalize">Papers</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 md:gap-x-4 lg:gap-x-6 xl:grid-cols-3">
                            {SHOWED_PAPER_LIST.map((item, index) => (
                                <LinkPreviewCard key={index} url={item} />
                            ))}
                        </div>
                    </section>
                    <Breakline />
                    <section className="flex flex-col gap-8">
                        <div className="flex items-center gap-1.5 text-xl font-medium text-[#0033A0] dark:text-white">
                            <Newspaper className="mr-1 h-5 w-5" />
                            <h1 className="capitalize">Articles</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 md:gap-x-4 lg:gap-x-6 xl:grid-cols-3">
                            {SHOWED_ARTICLE_LIST.map((item, index) => (
                                <LinkPreviewCard key={index} url={item} />
                            ))}
                        </div>
                    </section>
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
