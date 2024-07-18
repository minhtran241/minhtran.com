'use client';

import Link from 'next/link';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const Error = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center h-screen">
            <p className="text-6xl md:text-7xl lg:text-9xl font-black tracking-wider text-primary">
                Oops!
            </p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider mt-4">
                Something went wrong.
            </p>
            <p className="mt-4 pb-4 border-b-2 text-center">
                Sorry, the page you are looking for could not be found.
            </p>
            <Link
                href="/"
                className="btn btn-active btn-primary mt-4"
                title="Return Home"
                role="button"
            >
                <FontAwesomeIcon icon="fa-duotone fa-arrow-left" />
                <span>Return Home</span>
            </Link>
        </div>
    );
};

export default Error;
