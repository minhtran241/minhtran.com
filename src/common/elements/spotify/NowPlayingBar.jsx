'use client';

import { Popover } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr';
import PlayerPopover from './PlayerPopover';
import AnimatedBars from './AnimatedBars';
import DevicePopover from './DevicePopover';
import { fetcher } from '@/common/libs/fetcher';

const NowPlayingBar = () => {
    const [isShowDeviceList, setShowDeviceList] = useState(false);
    const [isShowPlayingInfo, setShowPlayingInfo] = useState(false);

    const { data: playingData } = useSWR('/api/spotify/now-playing', fetcher);

    const { data: devicesData = [] } = useSWR(
        '/api/spotify/available-devices',
        fetcher
    );

    const activeDevice = devicesData?.find((device) => device.is_active);

    const handleOpenSongUrl = (url) => {
        url && window.open(url, '_blank');
    };

    if (!playingData?.songUrl) return null;

    return (
        <div className="fixed bottom-0 z-[99998] hidden w-full lg:block">
            <div className="flex justify-between bg-green-400 px-4 pb-0.5 pt-[2.5px] text-[14px] text-neutral-800 dark:bg-green-500 dark:text-neutral-900">
                {playingData?.songUrl ? (
                    <Popover className="relative">
                        <Popover.Button
                            as="div"
                            onMouseEnter={() => setShowPlayingInfo(true)}
                            onMouseLeave={() => setShowPlayingInfo(false)}
                        >
                            <div className="flex items-center gap-2">
                                <AnimatedBars />
                                <div className="hidden sm:block ">
                                    Now Playing :
                                </div>
                                <div className="flex items-center gap-2 transition-all duration-300">
                                    {playingData?.albumImageUrl && (
                                        <Image
                                            className="rounded-sm"
                                            unoptimized
                                            alt={playingData?.album}
                                            src={playingData?.albumImageUrl}
                                            width={18}
                                            height={18}
                                        />
                                    )}
                                    <div
                                        className="flex gap-1 hover: hover:underline"
                                        onClick={() =>
                                            handleOpenSongUrl(
                                                playingData?.songUrl
                                            )
                                        }
                                    >
                                        <span>{playingData?.artist} -</span>
                                        <span>{playingData?.title}</span>
                                    </div>
                                </div>
                            </div>
                        </Popover.Button>
                        <PlayerPopover
                            isShow={isShowPlayingInfo}
                            playing={playingData}
                        />
                    </Popover>
                ) : (
                    <div className="flex items-center gap-1">
                        <Image
                            src="/logos/spotify.svg"
                            alt="Spotify"
                            width={16}
                            height={16}
                            className="mr-1"
                        />
                        <div>Not Playing</div>
                    </div>
                )}

                {playingData?.songUrl && (
                    <Popover className="relative">
                        <Popover.Button
                            as="div"
                            onMouseEnter={() => setShowDeviceList(true)}
                            onMouseLeave={() => setShowDeviceList(false)}
                        >
                            <div className="flex items-center gap-1">
                                <Image
                                    src="/logos/spotify.svg"
                                    alt="Spotify"
                                    width={16}
                                    height={16}
                                    className="mr-0.5"
                                />
                                <div>
                                    Listening on{' '}
                                    <span className="font-medium">
                                        {activeDevice?.name}
                                    </span>
                                </div>
                            </div>
                        </Popover.Button>
                        <DevicePopover
                            isShow={isShowDeviceList}
                            devices={devicesData}
                        />
                    </Popover>
                )}
            </div>
        </div>
    );
};

export default NowPlayingBar;
