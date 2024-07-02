import Loading from '@/app/loading';
import { sumTotalFromArray } from '@/common/helpers';
import Progress from './progress';
import clsx from 'clsx';
import Link from 'next/link';
import { formatDistanceToNowStrict } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { WAKATIME_USERNAME } from '@/common/constants/wakatimeAPI';
import { TIMEZONE } from '@/common/constants/timezone';

const CodingActiveList = ({ data }) => {
    const getLanguagesTotalHours = sumTotalFromArray(
        data?.languages || [],
        'hours'
    );
    const getLanguagesTotalMinutes = sumTotalFromArray(
        data?.languages || [],
        'minutes'
    );
    const getLanguagesTotalTimeDisplay = `${
        Math.floor((getLanguagesTotalMinutes % 3600) / 60) +
        getLanguagesTotalHours
    } hrs ${getLanguagesTotalMinutes} mins`;

    const getEditorTotalHours = sumTotalFromArray(
        data?.categories || [],
        'hours'
    );
    const getEditorTotalMinutes = sumTotalFromArray(
        data?.categories || [],
        'minutes'
    );
    const getEditorTotalTimeDisplay = `${
        Math.floor((getEditorTotalMinutes % 3600) / 60) + getEditorTotalHours
    } hrs ${getEditorTotalMinutes} mins`;

    const lastUpdateDate = data?.last_update;
    let distance = '';
    if (lastUpdateDate) {
        const zonedDate = utcToZonedTime(
            zonedTimeToUtc(lastUpdateDate, TIMEZONE),
            TIMEZONE
        );
        distance = formatDistanceToNowStrict(zonedDate, {
            addSuffix: true,
        });
    }

    const actives = [
        {
            title: 'Languages',
            total: getLanguagesTotalTimeDisplay,
            data: data?.languages,
            styles: {
                bg: 'bg-gradient-to-r from-[#0033A0] to-blue-600 dark:from-blue-600 dark:to-blue-900',
            },
        },
        {
            title: 'Categories',
            total: getEditorTotalTimeDisplay,
            data: data?.categories,
            styles: {
                bg: 'bg-gradient-to-r from-[#0033A0] to-blue-600 dark:from-blue-600 dark:to-blue-900',
            },
        },
    ];

    if (!data) {
        return <Loading />;
    }

    return (
        <div className="mt-2 flex flex-col gap-6 sm:flex-row sm:gap-4">
            {actives.map((item) => (
                <div
                    key={item?.title}
                    className={clsx(
                        // item?.styles?.bg,
                        'h-full w-full relative flex flex-1 flex-col gap-2 border border-gray-200 dark:border-gray-700 rounded-box bg-white dark:bg-black p-4'
                    )}
                >
                    <div className="flex items-center justify-between">
                        <p className="font-semibold lg:text-lg text-base text-gray-800 dark:text-gray-100">
                            {item?.title}
                        </p>
                        <Link
                            href={`https://wakatime.com/@${WAKATIME_USERNAME}`}
                            target="_blank"
                            className="text-sm text-[#0033A0] dark:text-blue-600 hover:underline items-baseline flex"
                        >
                            [More Info]
                        </Link>
                    </div>
                    <p className="text-sm text-[#0033A0] dark:text-blue-600">
                        WakaTime - Last updated {distance}
                    </p>
                    <ul className="flex flex-col gap-1 py-3">
                        {item?.data?.slice(0, 3)?.map((subItem) => (
                            <li key={subItem?.name}>
                                <Progress
                                    data={subItem}
                                    className={item?.styles?.bg}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CodingActiveList;
