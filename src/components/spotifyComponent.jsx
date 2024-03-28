'use client';

import NowPlayingBar from '@/common/elements/nowPlayingBar';
import NowPlayingCard from '@/common/elements/nowPlayingCard';
import { useWindowSize } from '@uidotdev/usehooks';

const SpotifyComponent = () => {
    const { width } = useWindowSize();
    const isMobile = width < 480;

    return <>{isMobile ? <NowPlayingCard /> : <NowPlayingBar />}</>;
};

export default SpotifyComponent;
