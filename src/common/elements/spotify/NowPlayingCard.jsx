'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr';
import AnimatedBars from './AnimatedBars';
import FontAwesomeIcon from '../FontAwesomeIcon';
import { fetcher } from '@/common/libs/fetcher';

const NowPlayingCard = ({ isExpand = false }) => {
    const { data } = useSWR('/api/spotify/now-playing', fetcher);

    const [expand, setExpand] = useState(isExpand);

    const trimmedSongTitle =
        data?.title &&
        data?.title.slice(0, 40) + (data?.title?.length > 40 ? '...' : '');

    const trimmedSongArtist =
        data?.artist &&
        data?.artist.slice(0, 20) + (data?.artist?.length > 20 ? '...' : '');

    const handleOpenSongUrl = (url) => {
        url && window.open(url, '_blank');
    };

    const handleMusicToggle = () => setExpand(!expand);

    if (!data?.songUrl) return null;

    return (
        <div
            className={clsx(
                'z-50 fixed bottom-0 w-full p-3',
                !expand && 'flex justify-start'
            )}
        >
            {!expand ? (
                <div
                    className=" rounded-full bg-white dark:bg-neutral-950 transition-all duration-100"
                    onClick={handleMusicToggle}
                >
                    <Image
                        src="/logos/spotify-color.svg"
                        alt="Spotify"
                        width={44}
                        height={44}
                        className="animate-pulse"
                    />
                </div>
            ) : (
                <div className="mt-5 flex items-center justify-between rounded-md bg-green-400 px-3 py-2 font-sora text-neutral-800 dark:bg-green-500 dark:text-neutral-900 ">
                    <div className="flex items-center gap-3">
                        {data?.albumImageUrl && (
                            <Image
                                className="rounded-md"
                                unoptimized
                                alt={data?.album}
                                src={data?.albumImageUrl}
                                width={60}
                                height={60}
                            />
                        )}
                        <div
                            className="flex flex-col pt-0.5 hover: hover:underline"
                            onClick={() => handleOpenSongUrl(data?.songUrl)}
                        >
                            <div className="text-sm font-medium">
                                {trimmedSongTitle}
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <AnimatedBars />
                                <span className="pt-1 text-[14px] text-neutral-800">
                                    {trimmedSongArtist}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex gap-3 pr-0.5"
                        onClick={handleMusicToggle}
                    >
                        <FontAwesomeIcon icon="fa-duotone fa-circle-xmark fa-lg  pt-0.5" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NowPlayingCard;
