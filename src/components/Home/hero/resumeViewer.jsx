'use client';

import { useState } from 'react';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const Resume = () => {
    return (
        <dialog id="resume_viewer" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                    {/* Close button */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        <FontAwesomeIcon icon="fa-solid fa-times" />
                    </button>
                </form>
                <h3 className="font-bold md:text-lg text-base">
                    Minh&apos;s Resume
                </h3>
                <div className="mt-4">
                    <iframe
                        src={fileSystemInfo.resumeLink}
                        className="w-full h-96"
                        title="Resume Preview"
                        aria-label="Resume Preview"
                    ></iframe>
                </div>
            </div>
        </dialog>
    );
};

const ResumeViewer = () => {
    return (
        <div>
            <button
                className="btn btn-active btn-accent"
                aria-label="View Resume"
                onClick={() =>
                    document.getElementById('resume_viewer')?.showModal()
                }
            >
                <FontAwesomeIcon icon="fa-duotone fa-file-user" />
                View Resume
            </button>
            <Resume />
        </div>
    );
};

export default ResumeViewer;
