'use client';

import { useState, useEffect } from 'react';
import { EyeIcon, Clock, Minus, PenLine } from 'lucide-react';

// Get post view count and update every 30 seconds

const PostMetadata = ({ post }) => {
    const [viewCount, setViewCount] = useState(post.view_count);
    useEffect(() => {
        const interval = setInterval(async () => {
            const res = await fetch(
                `http://localhost:8080/post/${post.slug}/view`,
                {
                    method: 'GET',
                }
            );
            const data = await res.json();
            // change the value of the view count in the post object like a flip animation
            document.getElementById('view').classList.add('flip');
            setTimeout(() => {
                document.getElementById('view').classList.remove('flip');
            }, 1000);
            setViewCount(data.view_count);
        }, 30000);
        return () => clearInterval(interval);
    }, [post.slug]);

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
                        <span id="view"> {viewCount} views</span>
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
