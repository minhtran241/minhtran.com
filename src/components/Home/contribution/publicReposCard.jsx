import { userBasicInfo } from '@/common/constants/userBasic';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Link from 'next/link';
import { TIMEZONE } from '@/common/constants/timezone';
import { formatDistanceToNowStrict } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

const PublicReposCard = ({ ghInfo }) => {
    return (
        <div className="bg-base-100 border rounded-box p-4">
            <div className="flex flex-col items-start gap-3">
                <div className="flex flex-col">
                    <h1 className="card-title lg:text-lg text-base">
                        {userBasicInfo.fullName}&apos;s Repositories
                    </h1>
                    <p className="text-sm opacity-70">
                        {ghInfo.user.repositories.nodes.length}/
                        {ghInfo.user.repositories.totalCount} Repositories
                    </p>
                </div>
                <p className="lg:text-base md:text-base text-sm">
                    Public repositories that recently updated
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
                            <li
                                key={index}
                                className="flex gap-2 items-center hover:text-primary"
                            >
                                <span className="fa-li">
                                    <FontAwesomeIcon icon="fa-duotone fa-book-bookmark" />
                                </span>
                                <Link
                                    href={repo.url}
                                    target="_blank"
                                    className=""
                                >
                                    {repo.name} ({distance})
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PublicReposCard;
