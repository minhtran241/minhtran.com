'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FontAwesomeIcon from './FontAwesomeIcon';

const LetschatBubble = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="fixed top-1/4 right-0 z-[99998] m-10">
            {isExpanded ? (
                <div
                    className="relative animate-bounce rounded-full shadow-lg flex items-center justify-center bg-accent tooltip tooltip-open tooltip-left tooltip-accent"
                    data-tip="Hi there! Let's chat!"
                >
                    <Link href="/contact" role="button" className="">
                        <Image
                            src="/memoji/memojialo.png"
                            alt="headshot"
                            className="max-w-xs md:max-w-sm rounded-full shadow-lg"
                            width={60}
                            height={60}
                        />
                    </Link>
                    <button
                        onClick={handleToggle}
                        className="btn btn-circle btn-xs absolute top-0 right-0 bg-accent text-accent-content"
                    >
                        <FontAwesomeIcon icon="fa-solid fa-minus fa-sm" />
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleToggle}
                    className="animate-bounce rounded-full shadow-lg flex items-center justify-center bg-accent"
                >
                    <Image
                        src="/memoji/memojialo.png"
                        alt="headshot"
                        className="max-w-xs md:max-w-sm rounded-full shadow-lg"
                        width={44}
                        height={44}
                    />
                </button>
            )}
        </div>
    );
};

export default LetschatBubble;
