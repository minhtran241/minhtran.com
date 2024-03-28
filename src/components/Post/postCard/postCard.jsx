import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
    const createdAt = new Date(post.created_at);
    const month = createdAt.toLocaleString('default', { month: 'long' });
    const date = new Date(post.created_at).getDate();
    return (
        <div
            className="wow fadeInUp relative overflow-hidden"
            data-wow-delay=".1s"
        >
            <div className="overflow-hidden">
                <Link href={`/blog/${post.slug}`}>
                    <div className="relative w-full lg:h-56 md:h-52 sm:h-44 h-44">
                        <Image
                            className="border rounded-lg border-[#0033A0] "
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                        />
                        <div className="absolute right-0 top-0 mr-3 mt-3 flex h-[75px] w-[75px] flex-col items-center justify-center rounded-full px-4 text-sm transition duration-500 ease-in-out bg-[#0033A0] dark:bg-blue-600 text-white  border border-[#0033A0] dark:border-blue-600">
                            <span className="font-bold">{date}</span>
                            <small>{month}</small>
                        </div>
                    </div>
                </Link>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags?.map((tag, index) => (
                        <div
                            key={index}
                            // href={`/blog?tag=${tag}`}
                            className="px-2 py-1 text-xs font-semibold text-[#0033A0] dark:text-blue-600 border border-gray-300 dark:border-gray-600 rounded-md italic hover:border-[#0033A0] dark:hover:border-blue-600 cursor-pointer"
                        >
                            #{tag}
                        </div>
                    ))}
                </div>
                <div className="mt-2">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-block text-lg font-semibold transition hover:text-[#0033A0] dark:hover:text-blue-600"
                    >
                        {post.title}
                    </Link>
                    <p className="text-md text-justify font-light italic text-gray-600 dark:text-gray-400">
                        {post.description?.length > 150
                            ? `${post.description?.substring(0, 150)}...`
                            : post.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
