import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Image from 'next/image';
import Link from 'next/link';

const detailsData = (data) => {
    return [
        {
            icon: <FontAwesomeIcon icon="fa-duotone fa-book-bookmark" />,
            title: 'Public Repos',
            value: data.repositories ? data.repositories.totalCount : 0,
        },
        {
            icon: <FontAwesomeIcon icon="fa-duotone fa-users" />,
            title: 'Followers',
            value: data.followers ? data.followers.totalCount : 0,
        },
        {
            icon: <FontAwesomeIcon icon="fa-duotone fa-user" />,
            title: 'Following',
            value: data.following ? data.following.totalCount : 0,
        },
        {
            icon: <FontAwesomeIcon icon="fa-duotone fa-file-code" />,
            title: 'Gists',
            value: data.gists ? data.gists.totalCount : 0,
        },
    ];
};

const GHUserCard = ({ ghInfo, username }) => {
    return (
        <div className="rounded-box p-4 border shadow bg-base-200">
            <div className="flex flex-col items-start gap-3">
                <div className="flex flex-row items-center justify-center gap-4">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <Image
                                src="/memoji/memojinormal-styled.png"
                                alt="avatar"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="card-title lg:text-lg text-base">
                            {ghInfo.user.name}
                        </h1>
                        <Link
                            href={`https://github.com/${username}`}
                            target="_blank"
                            className="text-sm text-primary link link-hover"
                        >
                            @{username}
                        </Link>
                    </div>
                </div>
                <p className="lg:text-base md:text-base text-sm">
                    {ghInfo.user.bio}
                </p>
                <ul
                    className="fa-ul md:text-base text-sm"
                    style={{ '--fa-li-width': '4em' }}
                >
                    <li>
                        <span class="fa-li">
                            <FontAwesomeIcon icon="fa-duotone fa-location-dot" />
                        </span>
                        {ghInfo.user.location}
                    </li>
                    {detailsData(ghInfo.user).map((item, index) => (
                        <li key={index}>
                            <span className="fa-li">{item.icon}</span>
                            {item.value} {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GHUserCard;
