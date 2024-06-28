import { Suspense } from 'react';
import ShareButtons from '@/components/Common/shareButtons/shareButtons';
import PostMetadata from '@/components/Post/postMetadata/postMetadata';
import fs from 'fs/promises';
import path from 'path';
import MarkdownRender from '@/components/Common/markdownRenderer/markdownRenderer';
import readingTime from 'reading-time';
import Loading from '@/app/loading';
import Image from 'next/image';
import Link from 'next/link';
import {
    ChevronsLeft,
    ChevronsRight,
    FileText,
    FolderOpen,
} from 'lucide-react';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import Breadcrumbs from '@/components/Common/breadcrumbs/Breadcrumbs';

// SEO metadata
export const generateMetadata = async ({ params }) => {
    const p = getPost(params.slug);
    return {
        title: p.title,
        description: p.description,
        image: p.thumbnail,
        author: 'Minh Tran',
        keywords: p.tags,
        canonical: process.env.NEXT_PUBLIC_BASE_URL + `/blog/${p.slug}`,
        openGraph: {
            type: 'article',
            article: {
                publishedTime: p?.created_at,
                authors: ['Minh Tran'],
            },
            url: process.env.NEXT_PUBLIC_BASE_URL + `/blog/${p?.slug}`,
            images: [
                {
                    url: p?.thumbnail,
                },
            ],
            siteName: 'Blog Minh Tran',
        },
    };
};

// * Fetch data from local JSON
const DATA_ATTRS_FILENAME = 'blogs.json';
const DATA_ATTRS_DIR = path.join(
    process.cwd(),
    fileSystemInfo.dataFetchDir,
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

        const prevId = post.id > 1 ? post.id - 1 : null;
        const nextId = post.id < posts.length ? post.id + 1 : null;

        post.prev = prevId ? posts.find((post) => post.id === prevId) : null;
        post.next = nextId ? posts.find((post) => post.id === nextId) : null;

        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw new Error('Failed to fetch post');
    }
};

const SinglePostContent = ({ post }) => {
    const BREADCRUMBS = [
        {
            href: '/blog',
            icon: (
                <FolderOpen className="stroke-current lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
            ),
            text: 'Blogs',
        },
        {
            href: `/blog/${post.slug}`,
            icon: (
                <FileText className="stroke-current lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
            ),
            text: post.title,
        },
    ];

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
        <div className="container flex flex-col gap-4 mt-12">
            <Breadcrumbs breadcrumbs={BREADCRUMBS} />
            <div className="content-center items-center justify-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full justify-center lg:w-9/12">
                        <h1 className="font-bold text-[#0033A0] dark:text-blue-600 mb-3 lg:text-3xl md:text-2xl sm:text-xl text-xl">
                            {post.title}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
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
                        <p className="mb-5 font-semibold border-b border-[#e9e9e9] pb-[20px] dark:border-white dark:border-opacity-10 lg:text-base md:text-base sm:text-sm text-sm text-gray-600 dark:text-gray-400">
                            {post.description}
                        </p>
                        <div className="flex flex-col gap-4">
                            <MarkdownRender mdString={post.content} />
                            <div className="flex flex-row gap-2">
                                <h5 className="mb-3 font-semibold">Tags:</h5>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-semibold text-[#0033A0] dark:text-blue-600 border border-gray-300 dark:border-gray-600 rounded-md italic hover:border-[#0033A0] dark:hover:border-blue-600 cursor-pointer"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Prev and Next cards */}
                            <div className="justify-between grid grid-cols-1 gap-8 md:grid-cols-2">
                                {post.prev && (
                                    <div className="flex flex-col gap-1 border border-gray-300 dark:border-gray-600 p-4 rounded-md hover:border-[#0033A0] dark:hover:border-blue-600 cursor-pointer">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Older Blog
                                        </p>
                                        <Link
                                            href={`/blog/${post.prev.slug}`}
                                            className="flex flex-row gap-2 text-[#0033A0] dark:text-blue-600 font-semibold"
                                        >
                                            <ChevronsLeft className="w-6 h-6" />
                                            {post.prev.title.length > 100
                                                ? post.prev.title.slice(
                                                      0,
                                                      100
                                                  ) + '...'
                                                : post.prev.title}
                                        </Link>
                                    </div>
                                )}
                                {post.next && (
                                    <div className="flex flex-col gap-1 border border-gray-300 dark:border-gray-600 p-4 rounded-md hover:border-[#0033A0] dark:hover:border-blue-600 cursor-pointer">
                                        <p className="text-sm text-right text-gray-600 dark:text-gray-400">
                                            Newer Blog
                                        </p>
                                        <Link
                                            href={`/blog/${post.next.slug}`}
                                            className="flex flex-row gap-2 text-[#0033A0] dark:text-blue-600 font-semibold text-right"
                                        >
                                            {post.next.title.length > 100
                                                ? post.next.title.slice(
                                                      0,
                                                      100
                                                  ) + '...'
                                                : post.next.title}{' '}
                                            <ChevronsRight className="w-6 h-6" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
