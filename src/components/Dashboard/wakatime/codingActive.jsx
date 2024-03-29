'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { formatDistanceToNowStrict } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import Link from 'next/link';
import CodingActiveList from './codingActiveList';
import Overview from './overview';
import { fetcher } from '@/services/fetcher';
import { SiWakatime as WakatimeIcon } from 'react-icons/si';
import SectionHeading from '../sectionHeading/sectionHeading';
import SectionSubHeading from '../sectionHeading/sectionSubHeading';
import { WAKATIME_USERNAME } from '@/common/constants/wakatimeAPI';
import { TIMEZONE } from '@/common/constants/timezone';

const CodingActive = ({ lastUpdate }) => {
    const BASE_URL =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : process.env.NEXT_PUBLIC_BASE_URL;

    const { data } = useSWR(`${BASE_URL}/api/wakatime`, fetcher);
    const [formattedLastUpdate, setFormattedLastUpdate] = useState(null);

    useEffect(() => {
        const formatLastUpdate = () => {
            const lastUpdateDate = lastUpdate || data?.last_update;
            if (lastUpdateDate) {
                const zonedDate = utcToZonedTime(
                    zonedTimeToUtc(lastUpdateDate, TIMEZONE),
                    TIMEZONE
                );
                const distance = formatDistanceToNowStrict(zonedDate, {
                    addSuffix: true,
                });
                setFormattedLastUpdate(distance);
            }
        };

        formatLastUpdate();
    }, [lastUpdate, data]);

    const renderLastUpdate = () => {
        if (formattedLastUpdate) {
            return <span>{formattedLastUpdate}</span>;
        }
        return null;
    };

    return (
        <section className="flex flex-col gap-y-2 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <SectionHeading
                title="Weekly Stats"
                icon={<WakatimeIcon className="mr-1 h-5 w-5" />}
            />
            <SectionSubHeading>
                <div className="md:flex-row md:items-center">
                    <span>My </span>
                    <Link
                        href={`https://wakatime.com/@${WAKATIME_USERNAME}`}
                        target="_blank"
                        className="hover:text-[#0033A0] hover:dark:text-blue-600"
                    >
                        WakaTime
                    </Link>
                    <span> last 7 days stats.</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-500">
                    Last update: {renderLastUpdate()}
                </div>
            </SectionSubHeading>

            <Overview data={data} />
            <CodingActiveList data={data} />
        </section>
    );
};

export default CodingActive;
