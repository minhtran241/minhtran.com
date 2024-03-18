import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import { getGitHubUserInfo } from '@/lib/github';
import PublicReposCard from './publicReposCard';
import GHUserCard from './ghUserCard';
import ContributionChart from './contributionChart';

// bg-gradient-to-r from-[#0033A0] to-[#00A3FF] dark:from-blue-600 dark:to-blue-900
const GitHubInfoComponent = async () => {
    const username = process.env.GITHUB_USERNAME || 'minhtran241';
    const reposNum = process.env.GITHUB_REPOS_NUM || 7;
    // Send the request to GitHub API to get the user's information every time the component is rendered
    const ghInfo = await getGitHubUserInfo(username, reposNum);
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
                    <PublicReposCard ghInfo={ghInfo} />
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
    return (
        <Suspense fallback={<Loading />}>
            <GitHubInfoComponent />
        </Suspense>
    );
};

export default GitHubInfo;
