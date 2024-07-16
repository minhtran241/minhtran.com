'use client';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import { useWindowSize } from '@uidotdev/usehooks';
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    // Reference to the cursor element
    const cursorRef = useRef(null);
    // State to track cursor position
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // State to track click event
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        // Event listener for mouse movement
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };
        // Event listener for mouse click
        const handleMouseDown = () => {
            setClicked(true);
            // Reset click state after 800 milliseconds
            setTimeout(() => {
                setClicked(false);
            }, 800);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, []); // useEffect runs only once on mount

    const { width } = useWindowSize();
    const isMobile = width < 480;

    return isMobile ? (
        <></>
    ) : (
        <>
            <div
                style={{ top: position.y, left: position.x }}
                ref={cursorRef}
                className={`fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 ease-in duration-300 z-50 w-6 h-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 fa-sm
				${clicked ? 'scale-150' : ''}`}
            >
                <FontAwesomeIcon icon="fa-duotone fa-wand-magic-sparkles text-white" />
            </div>
        </>
    );
};

export default CustomCursor;
