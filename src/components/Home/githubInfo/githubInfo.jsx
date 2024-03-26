'use client';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import PublicReposCard from './publicReposCard';
import GHUserCard from './ghUserCard';
import ContributionChart from './contributionChart';
import useSWR from 'swr';
import { fetcher } from '@/services/fetcher';
import { GITHUB_REPOS_NUM } from '@/common/constants/githubAPI';
import { userBasicInfo } from '@/common/constants/userBasic';

const GitHubInfo = () => {
    const username = userBasicInfo.githubUsername;
    const reposNum = GITHUB_REPOS_NUM;
    const BASE_URL =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : process.env.NEXT_PUBLIC_BASE_URL;

    const { data } = useSWR(
        `${BASE_URL}/api/github?username=${username}&reposNum=${reposNum}`,
        fetcher
    );

    if (!data) {
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
                    <GHUserCard ghInfo={data} username={username} />
                    <PublicReposCard ghInfo={data} username={username} />
                </div>
                <div className="mt-8">
                    <ContributionChart
                        contributionCollection={
                            data.user.contributionsCollection
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default GitHubInfo;
