import PostCard from '@/components/Post/postCard/postCard';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { BellRing, NotebookPen } from 'lucide-react';
import { fileSystemInfo } from '@/common/constants/fileSystem';

const PAGE_TITLE = 'Blogs';
const PAGE_DESCRIPTION =
    'A collection of my learnings, thoughts, and experiences. I write about backend development, data, AI, and software engineering in general.';

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    };
};

// * Fetch data from local JSON
const DATA_ATTRS_DIR = path.join(
    process.cwd(),
    fileSystemInfo.dataFetchDir,
    'blog'
);
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, 'blogs.json');
// * Fetch posts from file system
const getPosts = async (limit) => {
    try {
        // Read post data from JSON file
        const postsData = await fs.readFile(
            path.join(DATA_ATTRS_FILE),
            'utf-8'
        );
        let posts = JSON.parse(postsData);
        posts = posts.map((post) => ({
            ...post,
            // Splitting tags into an array
            tags: post.tags.split(',').map((tag) => tag.trim()),
        }));

        // Sort posts by creation date in descending order
        posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
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
        <>
            <div className="container mt-12">
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-1.5 text-2xl font-semibold">
                        <NotebookPen className="mr-1 h-6 w-6" />
                        <h1 className="capitalize">{PAGE_TITLE}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {PAGE_DESCRIPTION}
                    </p>
                </div>
                {/* // First post */}
                <div className="lg:flex lg:items-center lg:gap-12 mb-8">
                    <Link
                        href={`/blog/${firstPost.slug}`}
                        className="w-full object-cover dark:hover:shadow-black/30 lg:w-1/2"
                    >
                        <Image
                            className="lg:min-h-[270px] w-full rounded-md border-2 border-[#0033A0] dark:border-blue-600"
                            src={firstPost.thumbnail}
                            alt={firstPost.title}
                            width={433}
                            height={218}
                        />
                    </Link>
                    <div className="mt-4 lg:mt-0 lg:w-1/2 ">
                        <div className="flex flex-row justify-between">
                            <p className="text-sm font-semibold uppercase text-[#0033A0] dark:text-blue-600">
                                {new Date(
                                    firstPost?.created_at
                                ).toLocaleDateString('en-GB', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                            {/* Latest label */}
                            <div className="flex flex-row gap-2 bg-[#0033A0] dark:bg-blue-600 text-white px-2 py-1 rounded-md">
                                <BellRing className="h-4 w-4" />
                                <p className="text-xs font-semibold">Latest</p>
                            </div>
                        </div>
                        <Link
                            href={`/blog/${firstPost.slug}`}
                            className="mt-2 block text-xl font-semibold transition hover:text-[#0033A0] dark:hover:text-blue-600 md:text-2xl"
                        >
                            {firstPost.title}
                        </Link>
                        <p className="text-md md:text-md mt-3 text-justify text-gray-600 dark:text-gray-400">
                            {firstPost.description}
                        </p>
                        <div className="flex flex-wrap leading-none gap-2 mt-4 text-[#0033A0] dark:text-blue-600">
                            {firstPost.tags?.map((tag, index) => (
                                <div
                                    key={index}
                                    // href={`/blog?tag=${tag}`}
                                    className="px-2 py-1 text-xs font-semibold text-[#0033A0] dark:text-blue-600 border border-gray-300 dark:border-gray-600 rounded-md italic hover:border-[#0033A0] dark:hover:border-blue-600 cursor-pointer"
                                >
                                    #{tag}
                                </div>
                            ))}
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
        </>
    );
};

export default BlogPage;
