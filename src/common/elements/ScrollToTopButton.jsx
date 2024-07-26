'use client';

import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import { useAnimationControls, motion, useScroll } from 'framer-motion';
// import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect } from 'react';

const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

const ScrollToTopButton = () => {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    // const { width } = useWindowSize();
    // const isMobile = width < 480;

    function scrollToTop() {
        // if (isMobile) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className="fixed bottom-0 rounded-full shadow-lg bg-accent z-[99997] m-10 right-0 w-[44px] h-[44px]"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon="fa-duotone fa-solid fa-plane-up text-accent-content" />
        </motion.button>
    );
};

export default ScrollToTopButton;
