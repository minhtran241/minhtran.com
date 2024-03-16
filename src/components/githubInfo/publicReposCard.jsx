import Link from 'next/link'

const PublicReposCard = ({ ghInfo, topReposCount }) => {
	return (
		<div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out rounded p-4 mt-12 min-h-[150px]">
                        <h1 className="text-xl font-semibold">
                            Public Repositories
                        </h1>
                        <p className="text-sm">
                            {topReposCount}/
                            {ghInfo.user.repositories.totalCount} repositories
                        </p>
                        <div className="flex flex-col gap-1 items-start mt-3">
                            {ghInfo.user.repositories.nodes
                                .slice(
                                    ghInfo.user.repositories.nodes.length - 5,
                                    ghInfo.user.repositories.nodes.length
                                )
                                .reverse()
                                .map((repo, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row items-center justify-center"
                                    >
                                        <Link
                                            href={repo.url}
                                            className="text-sm text-[#0033A0] dark:text-blue-600"
                                        >
                                            {repo.url.length <= 80
                                                ? repo.url
                                                : `${repo.url.slice(0, 75)}...`}
                                        </Link>
                                    </div>
                                ))}
                        </div>
        </div>
	)
}

export default PublicReposCard