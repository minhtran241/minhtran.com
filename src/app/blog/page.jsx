import PostCard from '@/components/postCard/postCard';
import fs from 'fs/promises';
import path from 'path';

// * Fetch data from local JSON
const DATA_ATTRS_DIR = path.join(process.cwd(), 'data', 'blog');
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'blogs.json');
// * Fetch projects from file system
const getPosts = async (limit) => {
    try {
        // Read project data from JSON file
        const projectsData = await fs.readFile(
            path.join(DATA_ATTRS_FILE),
            'utf-8'
        );
        const projects = JSON.parse(projectsData);
        return projects.slice(0, limit);
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Failed to fetch projects');
    }
};

const BlogPage = async () => {
    const posts = await getPosts();
    return (
        // <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {posts.map((post, i) => (
                <div className="w-full" key={i}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
        // </div>
    );
};

export default BlogPage;
