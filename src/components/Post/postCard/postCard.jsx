import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
    const createdAt = new Date(post.created_at);
    const month = createdAt.toLocaleString('default', { month: 'long' });
    const date = new Date(post.created_at).getDate();
    return (
        <div className="flex flex-col gap-2">
            <Link href={`/blogs/${post.slug}`}>
                <div className="relative w-full lg:h-56 md:h-52 sm:h-44 h-44">
                    <Image
                        className="rounded-box"
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                    />
                    <div className="absolute right-0 top-0 mr-3 mt-3 flex flex-col items-center justify-center rounded-full px-4 text-sm lg:h-[75px] lg:w-[75px] md:h-[65px] md:w-[65px] sm:h-[55px] sm:w-[55px] h-[55px] w-[55px] bg-secondary text-secondary-content border border-secondary-content">
                        <span className="font-bold">{date}</span>
                        <small>{month}</small>
                    </div>
                </div>
            </Link>
            {/* Tags */}
            {/* <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags?.map((tag, index) => (
                        <div
                            key={index}
                            // href={`/blog?tag=${tag}`}
                            className="px-2 py-1 text-xs font-semibold text-primary  border border-gray-300 dark:border-gray-600 rounded-md italic hover:border-primary dark:hover:border-blue-600 "
                        >
                            #{tag}
                        </div>
                    ))}
                </div> */}
            <Link
                href={`/blogs/${post.slug}`}
                className="inline-block card-title transition hover:text-primary"
            >
                {post.title}
            </Link>
            <div className="tooltip !text-start " data-tip={post.description}>
                <p className="line-clamp-3 text-sm opacity-70">
                    {post.description}
                </p>
            </div>
        </div>
    );
};

export default PostCard;
