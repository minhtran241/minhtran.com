import Timeline from '@/components/timeline/timeline';
import Projects from '@/components/projects/projects';
import Hero from '@/components/hero/hero';
import Skills from '@/components/skills/skills';
import GitHubInfo from '@/components/githubInfo/githubInfo';

const PROJECT_LIMIT = 3;

export const generateMetadata = async () => {
    return {
        title: 'Minh Tran - Software Engineer & Data Engineer',
        description:
            "Welcome to Minh Tran's personal website. Explore insights on software engineering, data engineer, and more.",
        keywords: [
            'minhtran',
            'minh tran',
            'Minh Tran',
            'software engineer',
            'data engineer',
            'personal website',
            'software engineering',
            'data science',
        ],
        author: 'Minh Tran',
        url: 'https://minhtran.com',
        image: '/minhtran-ava.png',
    };
};

const Home = () => {
    return (
        <>
            <Hero />
            <GitHubInfo />
            <Timeline />
            <Skills />
            <Projects limit={PROJECT_LIMIT} />
        </>
    );
};

export default Home;
