import { Suspense } from 'react';
import Loading from '@/app/loading';
import SectionLabel from '../sectionLabel/sectionLabel';
import { getGitHubUserInfo } from '@/lib/github';
import { BookMarked, FileCode, User, Users } from 'lucide-react';
import PublicReposCard from './publicReposCard';
import GHUserCard from './ghUserCard';
import GHInfoCard from './ghInfoCard';

const detailsData = (data) => {
    return [
        {
            id: 1,
            icon: <BookMarked />,
            title: 'Public Repos',
            value: data.repositories ? data.repositories.totalCount : 0,
            color: 'pink',
        },
        {
            id: 2,
            icon: <Users />,
            title: 'Current Followers',
            value: data.followers ? data.followers.totalCount : 0,
            color: 'green',
        },
        {
            id: 3,
            icon: <User />,
            title: 'Current Following',
            value: data.following ? data.following.totalCount : 0,
            color: 'purple',
        },
        {
            id: 4,
            icon: <FileCode />,
            title: 'Public Gists',
            value: data.gists ? data.gists.totalCount : 0,
            color: 'yellow', // color for the icon background
        },
    ];
};

// bg-gradient-to-r from-[#0033A0] to-[#00A3FF] dark:from-blue-600 dark:to-blue-900
const GitHubInfoComponent = async () => {
    const username = 'minhtran241';
    const topReposCount = 5;
    const ghInfo = await getGitHubUserInfo(username);
    const sectionTitle = 'GitHub Stats';
    const sectionDescription = `GitHub is where I spend most of my time. You can find me on GitHub at @${username}. Here are some stats about my GitHub account.`;
    return (
        <div className="items-center justify-center py-12 bg-gray-200 dark:bg-gray-900">
            <div className="container">
                <SectionLabel
                    title={sectionTitle}
                    description={sectionDescription}
                />
                <div className="flex flex-col gap-x-8 gap-y-10 md:gap-x-6 lg:gap-x-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
                        {detailsData(ghInfo.user).map((detail, index) => (
                            <GHInfoCard key={index} detail={detail} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2">
                        <GHUserCard ghInfo={ghInfo} username={username} />
                        <PublicReposCard
                            ghInfo={ghInfo}
                            topReposCount={topReposCount}
                        />
                    </div>
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
