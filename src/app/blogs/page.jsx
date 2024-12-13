import PostCard from '@/components/Post/postCard/postCard';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import Breadcrumbs from '@/common/elements/Breadcrumbs';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
// import Breakline from '@/common/elements/Breakline';

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
const DATA_ATTRS_DIR = path.join(fileSystemInfo.dataFetchDir, 'blogs');
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
        name: 'ML/DL',
        icon: <FontAwesomeIcon icon="fa-duotone fa-head-side-gear" />,
    },
    {
        name: 'Web Development',
        icon: <FontAwesomeIcon icon="fa-duotone fa-browser" />,
    },
    {
        name: 'Databases',
        icon: <FontAwesomeIcon icon="fa-duotone fa-database" />,
    },
];

const BREADCRUMBS = [
    {
        href: '/blogs',
        text: 'Blogs',
    },
];

const BlogPage = async () => {
    const posts = await getPosts();
    const firstPost = posts[0];
    const otherPosts = posts.slice(1);
    // group posts based on categories but follow order of the latest post
    const groupedPosts = CATEGORIES.map((category) => {
        const posts = otherPosts.filter(
            (post) => post.category === category.name
        );
        return {
            ...category,
            posts,
        };
    });

    const sortedGroupedPosts = groupedPosts.sort((a, b) => {
        const latestPostA = a.posts[0];
        const latestPostB = b.posts[0];
        return (
            new Date(latestPostB.created_at) - new Date(latestPostA.created_at)
        );
    });

    return (
        <>
            <div className="flex flex-col container py-12 gap-12 mt-16">
                <Breadcrumbs breadcrumbs={BREADCRUMBS} />
                {/* // First post */}
                <div className="lg:flex lg:items-center lg:gap-12">
                    <Link
                        href={`/blogs/${firstPost.slug}`}
                        className="w-full object-cover lg:w-1/2"
                    >
                        <Image
                            className="lg:min-h-[270px] w-full rounded-box border-2 border-primary"
                            src={firstPost.thumbnail}
                            alt={firstPost.title}
                            width={433}
                            height={218}
                            loading="lazy"
                        />
                    </Link>
                    <div className="mt-4 lg:mt-0 lg:w-1/2 flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2 justify-between">
                            <p className="text-sm font-semibold uppercase text-primary">
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
                            <div className="badge badge-secondary flex items-center gap-2 p-3">
                                <FontAwesomeIcon icon="fa-duotone fa-sparkles" />
                                Latest {firstPost.category}
                            </div>
                        </div>
                        <Link
                            href={`/blogs/${firstPost.slug}`}
                            className="block lg:text-2xl md:text-xl text-lg font-black transition hover:text-primary"
                        >
                            {firstPost.title}
                        </Link>
                        <p className="lg:text-base md:text-base text-sm text-justify">
                            {firstPost.description}
                        </p>
                        <div className="card-actions">
                            {firstPost.tags?.map((tag, index) => (
                                <div
                                    key={index}
                                    // href={`/blogs?tag=${tag}`}
                                    className="badge badge-outline flex items-center gap-1"
                                >
                                    <FontAwesomeIcon icon="fa-duotone fa-tag" />
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <Breakline /> */}
                <div className="flex flex-col gap-12">
                    {sortedGroupedPosts.map((category, index) => (
                        <div key={index}>
                            <section className="flex flex-col gap-8">
                                <div className="flex flex-row items-center gap-2 font-bold lg:text-2xl md:text-xl sm:text-lg text-lg">
                                    {category.icon}
                                    {category.name}
                                </div>
                                <div className="flex flex-col gap-4">
                                    {category.posts.map((post, index) => (
                                        <PostCard key={index} post={post} />
                                    ))}
                                </div>
                            </section>
                            {/* {index !== groupedPosts.length - 1 && <Breakline />} */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogPage;
