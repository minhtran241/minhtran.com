'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { formatDistanceToNowStrict } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import CodingActiveList from './codingActiveList';
import Overview from './overview';
import { fetcher } from '@/services/fetcher';
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

    return (
        <section className="flex flex-col gap-y-2 rounded-lg border border-gray-200 dark:border-gray-700">
            <Overview data={data} />
            <CodingActiveList data={data} />
        </section>
    );
};

export default CodingActive;
