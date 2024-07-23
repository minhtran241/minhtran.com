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
        <div className="fixed bottom-0 left-0 m-10 z-[99998]">
            {isExpanded ? (
                <div
                    className="relative animate-bounce rounded-full shadow-lg flex items-center justify-center p-2 md:p-3 bg-accent tooltip tooltip-open tooltip-accent"
                    data-tip="Hi there! Let's chat!"
                >
                    <Link href="/contact" role="button" className="">
                        <Image
                            src="/memoji/memojialo.png"
                            alt="headshot"
                            className="max-w-xs md:max-w-sm rounded-full border-2 border-accent-content shadow-md"
                            width={80}
                            height={80}
                        />
                    </Link>
                    <button
                        onClick={handleToggle}
                        className="btn btn-circle btn-sm absolute top-0 right-0 bg-accent text-accent-content fa-sm"
                    >
                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleToggle}
                    className="animate-bounce rounded-full shadow-lg flex items-center justify-center p-2 md:p-3 bg-accent"
                >
                    <Image
                        src="/memoji/memojialo.png"
                        alt="headshot"
                        className="max-w-xs md:max-w-sm rounded-full border border-accent-content shadow-md"
                        width={30}
                        height={30}
                    />
                </button>
            )}
        </div>
    );
};

export default LetschatBubble;
