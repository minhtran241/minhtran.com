import { Clock, Minus, PenLine, Calculator } from 'lucide-react';

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
            <div className="mb-5 flex flex-col text-sm font-medium text-gray-600 dark:text-gray-400">
                <div className="mr-5 flex items-center">
                    <span className="">
                        <Calculator className="h-[1.2rem] w-[1.2rem]" />
                    </span>
                    <p className="ml-2">
                        <span id="view">{post.word_count} words</span>
                    </p>
                    <span className="ml-2">
                        <Minus className="h-[1.2rem] w-[1.2rem]" />
                    </span>
                    <span className="ml-2">
                        <Clock className="h-[1.2rem] w-[1.2rem]" />
                    </span>
                    <span className="ml-2">{post.read_time}</span>
                </div>
                <p className="mr-5 flex items-center">
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
