import { EyeIcon, Clock, Minus, PenLine } from 'lucide-react';

// Get post view count and update every 30 seconds

const PostMetadata = ({ post }) => {
    const updatedAtText = new Date(post.updated_at).toLocaleDateString(
        'en-US',
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    );
    return (
        <div className="flex flex-col items-center">
            <div className="mb-5 flex flex-col text-[#0033A0] dark:text-blue-600">
                <div className="mr-5 flex items-center">
                    <span className="">
                        {' '}
                        <EyeIcon className="h-[1.2rem] w-[1.2rem]" />
                    </span>
                    {/* change the view count in the post object with style effect like YouTube */}
                    <p className="ml-2">
                        <span id="view"> {post.view_count} views</span>
                    </p>
                    <span className="ml-2">
                        <Minus className="h-[1.2rem] w-[1.2rem]" />
                    </span>
                    <span className="ml-2">
                        {' '}
                        <Clock className="h-[1.2rem] w-[1.2rem]" />
                    </span>
                    <span className="ml-2">{post.read_time} min read</span>
                </div>
                <p className="mr-5 flex text-base items-center">
                    <span className="mr-2">
                        <PenLine className="h-[1.2rem] w-[1.2rem]" />
                    </span>
                    <span className="mr-2">
                        Last updated on {updatedAtText}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default PostMetadata;
