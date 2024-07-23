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

    const { width } = useWindowSize();
    const isMobile = width < 480;

    useEffect(() => {
        // Event listener for mouse movement
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX + 10,
                y: e.clientY - 10,
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

    return isMobile ? (
        <></>
    ) : (
        <>
            <div
                style={{ top: position.y, left: position.x }}
                ref={cursorRef}
                className={`fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 ease-in duration-300 z-[99999]
				${clicked ? 'scale-150' : ''}`}
            >
                <FontAwesomeIcon icon="fa-solid fa-wand-magic-sparkles text-accent" />
            </div>
        </>
    );
};

export default CustomCursor;
