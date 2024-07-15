import { userBasicInfo } from '@/common/constants/userBasic';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Link from 'next/link';
import { TIMEZONE } from '@/common/constants/timezone';
import { formatDistanceToNowStrict } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

const PublicReposCard = ({ ghInfo }) => {
    return (
        <div className="flex flex-col gap-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-box p-4">
            <div className="flex flex-col">
                <h1 className="font-semibold lg:text-lg text-base">
                    {userBasicInfo.fullName}&apos;s Repositories
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {ghInfo.user.repositories.nodes.length}/
                    {ghInfo.user.repositories.totalCount} Repositories
                </p>
            </div>
            <p className="lg:text-base md:text-base text-sm">
                Public repositories that recently updated.
            </p>
            <ul
                className="fa-ul md:text-base text-sm"
                style={{ '--fa-li-width': '4em' }}
            >
                {ghInfo.user.repositories.nodes.map((repo, index) => {
                    const zonedDate = utcToZonedTime(
                        zonedTimeToUtc(repo.pushedAt, TIMEZONE),
                        TIMEZONE
                    );
                    const distance = formatDistanceToNowStrict(zonedDate, {
                        addSuffix: true,
                    });
                    return (
                        <li key={index} className="flex gap-2 items-center">
                            <span className="fa-li">
                                <FontAwesomeIcon icon="fa-duotone fa-code-commit" />
                            </span>
                            <Link
                                href={repo.url}
                                target="_blank"
                                className="text-[#0033A0] dark:text-blue-600 hover:underline"
                            >
                                {repo.name}
                            </Link>
                            <span className="text-gray-600 dark:text-gray-400">
                                ({distance})
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PublicReposCard;
