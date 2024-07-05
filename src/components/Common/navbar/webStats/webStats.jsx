import Link from 'next/link';
import { getClient } from '@umami/api-client';
import Image from 'next/image';

const WebStats = async () => {
    const client = getClient();
    const { ok, status, data, error } = await client.getWebsiteStats(
        process.env.UMAMI_WEBSITE_ID,
        {
            // startAt: new Date().getTime() - 24 * 60 * 60 * 1000, // 24 hours ago
            startAt: 0,
            endAt: new Date().getTime(),
        }
    );
    if (!ok || error) {
        console.error('Error fetching website stats', status, error);
    }

    const webstats = {
        Pageviews: data?.pageviews?.value,
        // Visits: data?.visits?.value,
        Visitors: data?.visitors?.value,
    };
    return (
        <div
            className="tooltip tooltip-bottom dark:tooltip-info"
            data-tip="Powered by Umami"
        >
            <Link
                href={process.env.UMAMI_SHARE_URL}
                target="_blank"
                tabIndex={0}
                className="lg:hidden items-center flex btn btn-ghost btn-circle"
            >
                <Image
                    src="/logos/umami-color.svg"
                    width={0}
                    height={0}
                    alt="Umami logo"
                    className="filter invert lg:h-6 lg:w-6 h-5 w-5"
                />
            </Link>
            <Link
                href={process.env.UMAMI_SHARE_URL}
                target="_blank"
                className="hidden lg:flex btn btn-ghost"
            >
                <ul className="flex items-center gap-4">
                    {Object.keys(webstats).map((key, index) => (
                        <li key={index} className="flex flex-col">
                            <span className="text-xs">{key}</span>
                            <span className="text-lg">
                                {webstats[key]?.toLocaleString()}
                            </span>
                        </li>
                    ))}
                </ul>
            </Link>
        </div>
    );
};

export default WebStats;
