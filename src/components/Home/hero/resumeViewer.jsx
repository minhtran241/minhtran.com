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
                    <div className="modal-box md:max-w-[800px] max-w-[400px]">
                        {/* Close button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            aria-label="Close"
                        >
                            <FontAwesomeIcon icon="fa-duotone fa-times" />
                        </button>
                        <h3 className="font-bold md:text-lg text-base">
                            Minh&apos;s Resume
                        </h3>
                        <div className="mt-4">
                            <iframe
                                src={fileSystemInfo.resumeLink}
                                className="w-full md:h-[800px] h-[500px]"
                                title="Resume Preview"
                                aria-label="Resume Preview"
                                width="100%"
                                height={500}
                                tabIndex={0}
                            ></iframe>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ResumeViewer;
