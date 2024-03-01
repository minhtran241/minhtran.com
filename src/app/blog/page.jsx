import PostCard from '@/components/postCard/postCard';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: "Minh Tran's Blog",
        description:
            'Explore insights on software engineering and data engineering with Minh Tran.',
    };
};

// * Fetch data from local JSON
const DATA_ATTRS_DIR = path.join(process.cwd(), 'data', 'blog');
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'blogs.json');
// * Fetch posts from file system
const getPosts = async (limit) => {
    try {
        // Read post data from JSON file
        const postsData = await fs.readFile(
            path.join(DATA_ATTRS_FILE),
            'utf-8'
        );
        const posts = JSON.parse(postsData);
        return posts.slice(0, limit);
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }
};

const BlogPage = async () => {
    const posts = await getPosts();
    const firstPost = posts[0];
    const otherPosts = posts.slice(1);
    return (
        <div className="items-center justify-center flex flex-col gap-16 mb-12">
            {/* // First post */}
            <div className="lg:-mx-6 lg:flex lg:items-center">
                <Link
                    href={`/blog/${firstPost.slug}`}
                    className="h-[218px] w-full object-cover dark:hover:shadow-black/30 lg:mx-6 lg:h-[327px] lg:w-1/2"
                >
                    <Image
                        className="h-[218px] w-full rounded-md lg:h-[327px] border-2 border-[#0033A0] dark:border-white"
                        src={firstPost.thumbnail}
                        alt={firstPost.title}
                        width={433}
                        height={218}
                    />
                </Link>
                <div className="mt-6 lg:mx-6 lg:mt-0 lg:w-1/2 ">
                    <p className="text-sm font-semibold uppercase text-[#0033A0] dark:text-blue-600">
                        {new Date(firstPost?.created_at).toLocaleDateString(
                            'en-GB',
                            {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }
                        )}
                    </p>
                    <Link
                        href={`/blog/${firstPost.slug}`}
                        className="mt-4 block text-2xl font-semibold transition hover:text-[#0033A0] dark:hover:text-blue-600 md:text-3xl"
                    >
                        {firstPost.title}
                    </Link>
                    <p className="text-md md:text-md mt-3 text-justify text-gray-600 dark:text-gray-300">
                        {firstPost.description}
                    </p>
                    <div className="flex flex-row gap-2 mt-4 text-[#0033A0] dark:text-blue-600">
                        <p>{firstPost.view_count} views</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                {otherPosts.map((post, i) => (
                    <div className="w-full" key={i}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
