'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Loading from '@/app/loading';
import { SOCIAL_MEDIA } from '@/common/constants/menu';

const ContactInfoModal = () => (
    <dialog id="contact_info_modal" className="modal">
        <div className="modal-box">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                <span className="text-primary">
                    <FontAwesomeIcon icon="fa-solid fa-info-circle" />
                </span>
                Contact Information
            </h3>
            <ul className="fa-ul space-y-2">
                {SOCIAL_MEDIA.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className="fa-li">{item.icon}</span>
                        <p>{item.name}:</p>
                        <Link
                            href={item.href}
                            target="_blank"
                            className="link link-primary"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>Close</button>
        </form>
    </dialog>
);

const HeroComponent = () => {
    const handleShowModal = () => {
        document.getElementById('contact_info_modal')?.showModal();
    };

    return (
        <div className="pt-28 text-base-content container">
            <div className="mx-auto bg-base-100 rounded-box p-8">
                <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
                    {/* Profile Picture */}
                    <div className="avatar">
                        <div className="rounded-full ring ring-primary ring-offset-2 w-32 h-32 overflow-hidden">
                            <Image
                                src="/home/headshot.png"
                                alt={`${userBasicInfo.fullName} headshot`}
                                width={128}
                                height={128}
                            />
                        </div>
                    </div>

                    {/* User Information */}
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        {/* Name and Description */}
                        <div className="space-y-2">
                            <h1 className="text-2xl lg:text-3xl font-bold">
                                {userBasicInfo.fullName}
                                <span className="text-sm"> (He/Him)</span>
                            </h1>
                            <p className="text-md">
                                CS & MATH @ GVSU | SWE/DE @ GVSU Applied
                                Computing Institute
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start lg:justify-between">
                            {/* Contact Details */}
                            <ul className="fa-ul space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="fa-li text-primary">
                                        <FontAwesomeIcon icon="fa-solid fa-location-arrow" />
                                    </span>
                                    Grand Rapids, MI, USA
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="fa-li text-primary">
                                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                    </span>
                                    <Link
                                        href={`mailto:${userBasicInfo.email}`}
                                        className="link link-primary"
                                    >
                                        {userBasicInfo.email}
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="fa-li text-primary">
                                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                                    </span>
                                    <Link
                                        href={userBasicInfo.linkedinLink}
                                        target="_blank"
                                        className="link link-primary"
                                    >
                                        {userBasicInfo.linkedinUsername}
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="fa-li text-primary">
                                        <FontAwesomeIcon icon="fa-solid fa-info-circle" />
                                    </span>
                                    <button
                                        onClick={handleShowModal}
                                        className="font-semibold link link-primary link-hover"
                                    >
                                        More Info
                                    </button>
                                </li>
                            </ul>

                            {/* Call-to-Action Button */}
                            <div className="flex flex-col gap-4">
                                <Link
                                    href={fileSystemInfo.resumeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary flex items-center gap-2"
                                >
                                    <FontAwesomeIcon icon="fa-duotone fa-file-user" />
                                    Download Resume
                                </Link>
                                <Link
                                    href={userBasicInfo.bookACallLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary flex items-center gap-2"
                                >
                                    <FontAwesomeIcon icon="fa-duotone fa-headset" />
                                    Book a Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactInfoModal />
        </div>
    );
};

const Hero = () => (
    <Suspense fallback={<Loading fullPage={false} />}>
        <HeroComponent />
    </Suspense>
);

export default Hero;
