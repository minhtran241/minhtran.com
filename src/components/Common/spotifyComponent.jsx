'use client';

import NowPlayingBar from '@/common/elements/spotify/NowPlayingBar';
import NowPlayingCard from '@/common/elements/spotify/NowPlayingCard';
import { useWindowSize } from '@uidotdev/usehooks';

const SpotifyComponent = () => {
    const { width } = useWindowSize();
    const isMobile = width < 480;

    return <>{isMobile ? <NowPlayingCard /> : <NowPlayingBar />}</>;
};

export default SpotifyComponent;
