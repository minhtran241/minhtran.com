import Timeline from '@/components/timeline/timeline';
import Brands from '@/components/brands/brands';
import Projects from '@/components/projects/projects';
import Hero from '@/components/hero/hero';

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
        <div className="mb-12">
            <Hero />
            <Timeline />
            <Brands />
            <Projects limit={PROJECT_LIMIT} />
        </div>
    );
};

export default Home;
