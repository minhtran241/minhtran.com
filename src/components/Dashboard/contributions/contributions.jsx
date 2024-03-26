'use client';

import useSWR from 'swr';
import { fetcher } from '@/services/fetcher';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import Link from 'next/link';
import Overview from './overview';
import Calendar from './calendar';
import SectionHeading from '../sectionHeading/sectionHeading';
import SectionSubHeading from '../sectionHeading/sectionSubHeading';
import { GITHUB_USERNAME } from '@/common/constants/userBasicInfo';

const Contributions = () => {
    const BASE_URL =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : process.env.NEXT_PUBLIC_BASE_URL;
    const username = GITHUB_USERNAME;
    const { data } = useSWR(
        `${BASE_URL}/api/github?username=${username}`,
        fetcher
    );

    return (
        <section className="flex flex-col gap-y-2 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <SectionHeading
                title="GitHub Contributions"
                icon={<GithubIcon className="mr-1" />}
            />
            <SectionSubHeading>
                <p className="dark:text-neutral-400">
                    My contributions from last year on github.
                </p>
                <Link
                    href={`https://github.com/${username}`}
                    target="_blank"
                    passHref
                    className="font-code text-sm text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 hover:dark:text-neutral-400"
                >
                    @{username}
                </Link>
            </SectionSubHeading>

            {!data && <div className="dark:text-neutral-400">No Data</div>}
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
