import { ARTICLE_LIST, PAPER_LIST } from '../../../data/readingList';
import LinkPreviewCard from '@/components/Reads/LinkPreviewCard';
import Breakline from '@/common/elements/Breakline';
import Breadcrumbs from '@/common/elements/Breadcrumbs';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

export const maxDuration = 60;

const PAGE_TITLE = 'Reading List';
const PAGE_DESCRIPTION =
    'List of articles and papers that I have read and found interesting and informative.';
const SHOWED_ARTICLE_LIST = ARTICLE_LIST.reverse();
const SHOWED_PAPER_LIST = PAPER_LIST.reverse();

const BREADCRUMBS = [
    {
        href: '/reads',
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
            <div className="container flex flex-col gap-4 py-12">
                <Breadcrumbs breadcrumbs={BREADCRUMBS} />
                <div className="flex flex-col gap-4">
                    <section className="flex flex-col gap-8">
                        <div className="flex flex-row items-center gap-2 text-primary font-semibold lg:text-xl md:text-lg text-base">
                            <FontAwesomeIcon icon="fa-duotone fa-file-magnifying-glass" />
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
                        <div className="flex flex-row items-center gap-2 text-primary font-semibold lg:text-xl md:text-lg text-base">
                            <FontAwesomeIcon icon="fa-duotone fa-newspaper" />
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
