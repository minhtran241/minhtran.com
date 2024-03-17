import Link from 'next/link';

const PublicReposCard = ({ ghInfo, topReposCount }) => {
    return (
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out rounded-lg p-4">
            <h1 className="text-xl font-semibold">Public Repositories</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {topReposCount}/{ghInfo.user.repositories.totalCount}{' '}
                repositories
            </p>
            <div className="flex flex-col gap-1 items-start mt-3">
                {ghInfo.user.repositories.nodes
                    .slice(
                        ghInfo.user.repositories.nodes.length - topReposCount,
                        ghInfo.user.repositories.nodes.length
                    )
                    .reverse()
                    .map((repo, index) => (
                        <Link
                            key={index}
                            href={repo.url}
                            target="_blank"
                            className="text-sm text-[#0033A0] dark:text-blue-600"
                        >
                            {repo.name}
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default PublicReposCard;
