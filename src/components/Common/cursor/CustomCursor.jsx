'use client';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
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

    return (
        <>
            <div
                style={{ top: position.y, left: position.x }}
                ref={cursorRef}
                className={`p-0 fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 ease-in duration-500 z-50 ${
                    clicked ? 'scale-150' : ''
                }`}
            >
                <FontAwesomeIcon icon="fa-duotone fa-poo lg:fa-xl md:fa-lg fa-lg" />
            </div>
        </>
    );
};

export default CustomCursor;
