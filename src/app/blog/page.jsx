import PostCard from '@/components/Post/postCard/postCard';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import {
    BellRing,
    Newspaper,
    BrainCircuit,
    Database,
    Server,
} from 'lucide-react';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import Breakline from '@/common/elements/breakline';

const PAGE_TITLE = 'Tech Blogs';
const PAGE_DESCRIPTION =
    'My write-ups on various topics, including software technologies, data related concepts and AI world.';

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

const CATEGORIES = [
    {
        name: 'Machine Learning & Deep Learning',
        icon: <BrainCircuit className="mr-1 w-5 h-5" />,
    },
    {
        name: 'Web Development',
        icon: <Server className="mr-1 w-5 h-5" />,
    },
    {
        name: 'Databases',
        icon: <Database className="mr-1 w-5 h-5" />,
    },
];

const BlogPage = async () => {
    const posts = await getPosts();
    const firstPost = posts[0];
    const otherPosts = posts.slice(1);
    const groupedPosts = CATEGORIES.map((category) => ({
        ...category,
        posts: otherPosts.filter(
            (post) =>
                post.category.toLowerCase() === category.name.toLowerCase()
        ),
    }));

    return (
        <>
            <div className="flex flex-col container mt-12 gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-2xl font-semibold text-[#0033A0] dark:text-white">
                        <Newspaper className="mr-1 h-6 w-6" />
                        <h1 className="capitalize">{PAGE_TITLE}</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {PAGE_DESCRIPTION}
                    </p>
                </div>
                {/* // First post */}
                <div className="lg:flex lg:items-center lg:gap-12">
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
                    <div className="mt-4 lg:mt-0 lg:w-1/2 flex flex-col gap-4">
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
                                <p className="text-xs font-semibold">
                                    Latest {firstPost.category}
                                </p>
                            </div>
                        </div>
                        <Link
                            href={`/blog/${firstPost.slug}`}
                            className="block text-xl font-semibold transition hover:text-[#0033A0] dark:hover:text-blue-600 md:text-2xl"
                        >
                            {firstPost.title}
                        </Link>
                        <p className="text-md md:text-md text-justify text-gray-600 dark:text-gray-400">
                            {firstPost.description}
                        </p>
                        {/* <div className="flex flex-wrap leading-none gap-2 text-[#0033A0] dark:text-blue-600">
                            {firstPost.tags?.map((tag, index) => (
                                <div
                                    key={index}
                                    // href={`/blog?tag=${tag}`}
                                    className="px-2 py-1 text-xs font-semibold text-[#0033A0] dark:text-blue-600 border border-gray-300 dark:border-gray-600 rounded-md italic hover:border-[#0033A0] dark:hover:border-blue-600 cursor-pointer"
                                >
                                    #{tag}
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {groupedPosts.map((category, index) => (
                        <div key={index}>
                            <section className="flex flex-col gap-8">
                                <div className="flex items-center gap-1.5 text-xl font-medium text-[#0033A0] dark:text-white">
                                    {category.icon}
                                    <h1 className="capitalize">
                                        {category.name}
                                    </h1>
                                </div>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 md:gap-x-4 lg:gap-x-6 xl:grid-cols-3">
                                    {category.posts.map((post, index) => (
                                        <PostCard key={index} post={post} />
                                    ))}
                                </div>
                            </section>
                            {index !== groupedPosts.length - 1 && <Breakline />}
                        </div>
                    ))}
                </div>
                {/* {groupedPosts.map((category, index) => (
                    <div key={index} className="mt-8">
                        <div className="flex items-center gap-1.5 text-xl font-semibold">
                            {category.icon}
                            <h2 className="capitalize">{category.name}</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                            {category.posts.map((post, index) => (
                                <PostCard key={index} post={post} />
                            ))}
                        </div>
                    </div>
                ))} */}
            </div>
        </>
    );
};

export default BlogPage;
