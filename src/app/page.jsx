import Timeline from '@/components/timeline/timeline';
import Brands from '@/components/brands/brands';
import Projects from '@/components/projects/projects';
import Hero from '@/components/hero/hero';

const PROJECT_LIMIT = 3;

const Home = () => {
    return (
        <div>
            <Hero />
            <Timeline />
            {/* </div> */}
            <Brands />
            <Projects limit={PROJECT_LIMIT} />
        </div>
    );
};

export default Home;
