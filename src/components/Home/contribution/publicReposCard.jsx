import Link from 'next/link';

const PublicReposCard = ({ ghInfo }) => {
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
                        className="flex btn btn-xs lg:btn-sm md:btn-sm btn-active btn-link text-[#0033A0] dark:text-blue-600"
                    >
                        {repo.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PublicReposCard;
