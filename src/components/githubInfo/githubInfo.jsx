'use client';

import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import PublicReposCard from './publicReposCard';
import GHUserCard from './ghUserCard';
import ContributionChart from './contributionChart';

const GitHubInfoComponent = ({ username, reposNum }) => {
    const [ghInfo, setGHInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `/api/github?username=${username}&reposNum=${reposNum}`,
                    {
                        next: { revalidate: 10 },
                    }
                );
                const data = await response.json();
                setGHInfo(data);
            } catch (error) {
                console.error('Error fetching GitHub info:', error);
            }
        };

        fetchData();
    }, [username, reposNum]);

    if (!ghInfo) {
        return <Loading />;
    }

    const sectionTitle = 'GitHub Stats';
    const sectionDescription = `GitHub is where I spend most of my time. You can find me on GitHub at @${username}. Here are some stats about my GitHub account.`;

    return (
        <div className="items-center justify-center py-12 bg-gray-200 dark:bg-gray-900">
            <div className="container">
                <SectionLabel
                    title={sectionTitle}
                    description={sectionDescription}
                />
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
                    <GHUserCard ghInfo={ghInfo} username={username} />
                    <PublicReposCard ghInfo={ghInfo} username={username} />
                </div>
                <div className="mt-8">
                    <ContributionChart
                        contributionCollection={
                            ghInfo.user.contributionsCollection
                        }
                    />
                </div>
            </div>
        </div>
    );
};

const GitHubInfo = () => {
    const username = process.env.GITHUB_USERNAME || 'minhtran241';
    const reposNum = process.env.GITHUB_REPOS_NUM || 6;

    return (
        <Suspense fallback={<Loading />}>
            <GitHubInfoComponent username={username} reposNum={reposNum} />
        </Suspense>
    );
};

export default GitHubInfo;
