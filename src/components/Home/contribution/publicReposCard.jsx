import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Link from 'next/link';

const PublicReposCard = ({ ghInfo, username }) => {
    return (
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-box p-4">
            <div className="flex flex-col items-start">
                <h1 className="font-semibold lg:text-lg text-base">
                    Recent Pushed Repositories (Public)
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {ghInfo.user.repositories.nodes.length}/
                    {ghInfo.user.repositories.totalCount} Repositories
                </p>
            </div>
            {/* 2 cols */}
            <div className="grid grid-cols-3 gap-2 mt-4">
                {ghInfo.user.repositories.nodes.map((repo, index) => (
                    <Link
                        key={index}
                        href={repo.url}
                        target="_blank"
                        className="flex flex-row items-center gap-1 px-2 py-1 text-xs font-semibold border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:text-[#0033A0] dark:hover:text-blue-600 transition-colors duration-300 hover:border-[#0033A0] dark:hover:border-blue-600"
                    >
                        <FontAwesomeIcon icon="fa-duotone fa-bookmark" />
                        {repo.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PublicReposCard;
