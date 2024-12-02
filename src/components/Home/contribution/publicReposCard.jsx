import { userBasicInfo } from '@/common/constants/userBasic';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Link from 'next/link';
import { TIMEZONE } from '@/common/constants/timezone';
import { formatDistanceToNowStrict } from 'date-fns';
import { toZonedTime, fromZonedTime } from 'date-fns-tz';
import Image from 'next/image';

const PublicReposCard = ({ ghInfo }) => {
    return (
        <div className="rounded-box p-4 border shadow border-gray-200">
            <div className="flex flex-col items-start gap-3">
                <div className="flex flex-row items-center justify-center gap-4">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <Image
                                src="/memoji/memojimac-styled.png"
                                alt="avatar"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="card-title lg:text-lg text-base">
                            {userBasicInfo.fullName}&apos;s Repositories
                        </h1>
                        <p className="text-sm">
                            {ghInfo.user.repositories.nodes.length}/
                            {ghInfo.user.repositories.totalCount} Repositories
                        </p>
                    </div>
                </div>
                <p className="lg:text-base md:text-base text-sm">
                    Public repositories that recently updated
                </p>
                <ul
                    className="fa-ul md:text-base text-sm"
                    style={{ '--fa-li-width': '4em' }}
                >
                    {ghInfo.user.repositories.nodes.map((repo, index) => {
                        const zonedDate = toZonedTime(
                            fromZonedTime(repo.pushedAt, TIMEZONE),
                            TIMEZONE
                        );
                        const distance = formatDistanceToNowStrict(zonedDate, {
                            addSuffix: true,
                        });
                        return (
                            <li
                                key={index}
                                className="flex gap-2 items-center text-primary"
                            >
                                <span className="fa-li">
                                    <FontAwesomeIcon icon="fa-duotone fa-book-bookmark" />
                                </span>
                                <Link
                                    href={repo.url}
                                    target="_blank"
                                    className="link link-hover"
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
