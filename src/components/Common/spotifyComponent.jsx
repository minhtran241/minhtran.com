'use client';

import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
// import NowPlayingBar from '@/common/elements/spotify/NowPlayingBar';
// import NowPlayingCard from '@/common/elements/spotify/NowPlayingCard';
// import { useWindowSize } from '@uidotdev/usehooks';
import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/common/libs/fetcher';
// import { Popover } from '@headlessui/react';
import Image from 'next/image';
import AnimatedBars from '@/common/elements/spotify/AnimatedBars';
// import DevicePopover from '@/common/elements/spotify/DevicePopover';
// import { PAIR_DEVICES } from '../../../data/uses';
import Link from 'next/link';

const SpotifyComponent = ({ isExpand = false }) => {
    // const { width } = useWindowSize();
    // const isMobile = width < 480;

    const [expand, setExpand] = useState(isExpand);

    // const [isShowDeviceList, setShowDeviceList] = useState(false);

    const { data: playingData } = useSWR('/api/spotify/now-playing', fetcher);

    // const { data: devicesData = [] } = useSWR(
    //     '/api/spotify/available-devices',
    //     fetcher
    // );

    // const listDevices = devicesData?.map((device) => ({
    //     ...device,
    //     icon: PAIR_DEVICES[device?.type]?.icon || (
    //         <FontAwesomeIcon icon="fa-duotone fa-speaker fa-sm" />
    //     ),
    // }));

    // if (!playingData?.songUrl) return null;
    const handleMusicToggle = () => setExpand(!expand);

    return !expand ? (
        <div
            className="fixed bottom-0 m-10 shadow-lg z-[99998] left-0  rounded-full bg-black transition-all duration-100"
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
        <div className="fixed bottom-0 m-10 rounded-box shadow-lg bg-green-400 z-[99998] left-0">
            {playingData?.songUrl ? (
                <div className="flex gap-3 items-center justify-between rounded-box bg-green-400 p-3 font-sora text-neutral-800">
                    <div className="flex items-center gap-3">
                        {playingData?.albumImageUrl && (
                            <Image
                                className="rounded-md"
                                unoptimized
                                alt={playingData?.album}
                                src={playingData?.albumImageUrl}
                                width={60}
                                height={60}
                            />
                        )}
                        <Link
                            href={playingData?.songUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col pt-0.5 hover:"
                        >
                            <p className="text-sm font-medium line-clamp-2">
                                {playingData?.title}
                            </p>
                            <div className="flex items-center gap-2 text-xs">
                                <FontAwesomeIcon icon="fa-duotone fa-solid fa-album" />
                                <span className="opacity-80 line-clamp-1">
                                    {playingData?.album}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <AnimatedBars />
                                <span className="pt-1 text-[14px] opacity-80 line-clamp-1">
                                    {playingData?.artist}
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex " onClick={handleMusicToggle}>
                        <FontAwesomeIcon icon="fa-duotone fa-circle-xmark  pt-0.5" />
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-3 justify-between rounded-box bg-green-400 p-3 font-sora text-neutral-800">
                    <Image
                        src="/logos/spotify.svg"
                        alt="Spotify"
                        width={16}
                        height={16}
                        className="animate-pulse"
                    />
                    <p className="text-sm font-medium">No song is playing</p>
                    <div className="flex " onClick={handleMusicToggle}>
                        <FontAwesomeIcon icon="fa-duotone fa-circle-xmark  pt-0.5" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpotifyComponent;
