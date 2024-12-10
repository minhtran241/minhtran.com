import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
    const createdAt = new Date(post.created_at);
    const month = createdAt.toLocaleString('default', { month: 'long' });
    const date = createdAt.getDate();

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4 bg-base-100 shadow-lg rounded-box border border-base-300">
            {/* Image Section */}
            <Link href={`/blogs/${post.slug}`} className="lg:w-1/3 w-full">
                <div className="relative w-full h-48 lg:h-full">
                    <Image
                        className="rounded-lg object-cover"
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        loading="lazy"
                    />
                    <div className="absolute right-4 top-4 flex flex-col items-center justify-center rounded-full px-4 text-sm h-12 w-12 bg-secondary text-secondary-content border border-secondary-content">
                        <span className="font-bold">{date}</span>
                        <small>{month}</small>
                    </div>
                </div>
            </Link>

            {/* Content Section */}
            <div className="lg:w-2/3 w-full flex flex-col justify-center">
                <Link
                    href={`/blogs/${post.slug}`}
                    className="card-title text-xl font-semibold transition hover:text-primary mb-2"
                >
                    {post.title}
                </Link>
                <div
                    className="tooltip !text-start mb-4"
                    data-tip={post.description}
                >
                    <p className="line-clamp-3 text-sm text-opacity-70">
                        {post.description}
                    </p>
                </div>
                {/* Tags (if enabled) */}
                {post.tags && (
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-semibold text-primary border border-gray-300 rounded-md italic hover:border-primary"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostCard;
