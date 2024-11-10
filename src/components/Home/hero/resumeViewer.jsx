'use client';

import { useState } from 'react';
import { fileSystemInfo } from '@/common/constants/fileSystem';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const ResumeViewer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button
                className="btn btn-active btn-accent"
                aria-label="View Resume"
                onClick={() => setIsModalOpen(true)}
            >
                <FontAwesomeIcon icon="fa-duotone fa-file-user" />
                View Resume
            </button>

            {isModalOpen && (
                <dialog className="modal modal-open">
                    <div className="modal-box w-11/12 max-w-5xl">
                        {/* Close button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            aria-label="Close"
                        >
                            <FontAwesomeIcon icon="fa-duotone fa-times" />
                        </button>

                        <h3 className="font-bold md:text-lg text-base">
                            Minh's Resume
                        </h3>
                        <div className="mt-4">
                            <iframe
                                src={fileSystemInfo.resumeLink}
                                className="w-full h-[75vh]" // Adjust height as needed
                                title="Resume Preview"
                                aria-label="Resume Preview"
                            ></iframe>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ResumeViewer;
