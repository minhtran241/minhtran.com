import { Suspense } from 'react';
import ShareButtons from '@/components/shareButtons/shareButtons';
import PostMetadata from '@/components/postMetadata/postMetadata';
import fs from 'fs/promises';
import path from 'path';
import MarkdownRender from '@/components/markdownRenderer/markdownRenderer';
import readingTime from 'reading-time';
import Loading from '@/app/loading';
import Image from 'next/image';

// SEO metadata
export const generateMetadata = async ({ params }) => {
    const p = getPost(params.slug);
    return {
        title: p.title,
        description: p.description,
        image: p.thumbnail,
        author: 'Minh Tran',
        keywords: p.tags,
    };
};

// * Fetch data from local JSON
const DATA_ATTRS_FILENAME = 'blogs.json';
const DATA_ATTRS_DIR = path.join(
    process.cwd(),
    process.env.DATA_FETCH_DIR,
    'blog'
);
const DATA_ATTRS_FILE = path.join(DATA_ATTRS_DIR, DATA_ATTRS_FILENAME);
const DATA_CONTENTS_DIR = path.join(DATA_ATTRS_DIR, 'contents');

const getPost = async (slug) => {
    try {
        // Read post data from JSON file
        const postsData = await fs.readFile(DATA_ATTRS_FILE, 'utf-8');
        const posts = JSON.parse(postsData);
        const post = posts.find((post) => post.slug === slug);
        post.tags = post.tags.split(',').map((tag) => tag.trim());
        const content = await fs.readFile(
            path.join(DATA_CONTENTS_DIR, `${slug}.md`),
            'utf-8'
        );
        post.content = content;

        const stats = readingTime(content);
        post.read_time = stats.text;
        post.word_count = stats.words;

        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw new Error('Failed to fetch post');
    }
};

const SinglePostContent = ({ post }) => {
    const createdAtText = new Date(post.created_at).toLocaleDateString(
        'en-US',
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    );

    return (
        <>
            <div className="content-center items-center justify-center mb-5">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full justify-center lg:w-9/12">
                        <h1 className="font-bold text-[#0033A0] dark:text-blue-600 text-4xl mb-3">
                            {post.title}
                        </h1>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {createdAtText}
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-center items-center justify-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full justify-center lg:w-9/12">
                        <div className="flex flex-wrap items-center justify-between">
                            <PostMetadata post={post} />
                            <div className="mb-5">
                                <ShareButtons />
                            </div>
                        </div>
                        <div className="mb-5">
                            <Image
                                src={post.thumbnail}
                                alt={post.title}
                                width={1200}
                                height={600}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>
                        <p className="mb-5 border-b border-[#e9e9e9] pb-[20px] text-justify dark:border-white dark:border-opacity-10">
                            {post.description}
                        </p>
                        <div className="flex flex-col gap-4">
                            <MarkdownRender mdString={post.content} />
                            <div className="items-center justify-between sm:flex">
                                <div className="mb-5 flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-semibold text-white bg-[#0033A0] dark:bg-blue-600 rounded-md italic"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <h5 className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-right">
                                        Share this blog :
                                    </h5>
                                    <div className="flex items-center sm:justify-end">
                                        <ShareButtons />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);

    return (
        <Suspense fallback={<Loading />}>
            <SinglePostContent post={post} />
        </Suspense>
    );
};

export default SinglePostPage;
