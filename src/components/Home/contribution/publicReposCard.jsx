import Link from 'next/link';

const PublicReposCard = ({ ghInfo, username, colorTheme = 'blue' }) => {
    return (
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex flex-col items-start">
                <h1 className="font-semibold lg:text-lg text-base">
                    Recent Pushed Repositories (Public)
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {ghInfo.user.repositories.nodes.length}/
                    {ghInfo.user.repositories.totalCount} Repositories
                </p>
            </div>
            <div className="flex flex-col gap-1 items-start mt-3">
                {ghInfo.user.repositories.nodes.map((repo, index) => (
                    <Link
                        key={index}
                        href={repo.url}
                        target="_blank"
                        className={`text-sm hover:underline ${
                            colorTheme === 'blue'
                                ? 'text-[#0033A0] dark:text-blue-600'
                                : 'text-green-600'
                        }`}
                    >
                        {username}/{repo.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PublicReposCard;
