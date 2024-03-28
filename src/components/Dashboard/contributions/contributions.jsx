'use client';

import useSWR from 'swr';
import { fetcher } from '@/services/fetcher';
import { Github } from 'lucide-react'
import Link from 'next/link';
import Overview from './overview';
import Calendar from './calendar';
import SectionHeading from '../sectionHeading/sectionHeading';
import SectionSubHeading from '../sectionHeading/sectionSubHeading';
import Loading from '@/app/loading';
import { userBasicInfo } from '@/common/constants/userBasic';

const Contributions = () => {
    const BASE_URL =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : process.env.NEXT_PUBLIC_BASE_URL;
    const username = userBasicInfo.githubUsername;
    const { data } = useSWR(
        `${BASE_URL}/api/github?username=${username}`,
        fetcher
    );

    return (
        <section className="flex flex-col gap-y-2 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <SectionHeading
                title="GitHub Contributions"
                icon={<Github className="mr-1 w-5 h-5" />}
            />
            <SectionSubHeading>
                <p className="dark:text-gray-400">
                    My contributions from last year on github.
                </p>
                <Link
                    href={`https://github.com/${username}`}
                    target="_blank"
                    passHref
                    className="font-code text-sm text-gray-600 dark:text-gray-500 hover:text-[#0033A0] hover:dark:text-blue-600"
                >
                    @{username}
                </Link>
            </SectionSubHeading>

            {!data && <Loading />}
            {data && (
                <div className="space-y-3">
                    <Overview
                        data={
                            data?.user?.contributionsCollection
                                ?.contributionCalendar
                        }
                    />

                    <Calendar
                        data={
                            data?.user?.contributionsCollection
                                ?.contributionCalendar
                        }
                    />
                </div>
            )}
        </section>
    );
};

export default Contributions;
