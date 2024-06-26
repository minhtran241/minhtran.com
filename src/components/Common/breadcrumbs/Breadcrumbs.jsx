import Link from 'next/link';
import { FolderOpen } from 'lucide-react';
import { userBasicInfo } from '@/common/constants/userBasic';

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <div className="breadcrumbs lg:text-xl md:text-lg text-base font-semibold text-gray-600 dark:text-gray-400">
            <ul>
                <li>
                    <Link
                        href={'/'}
                        className="flex items-center gap-2 hover:text-[#0033A0] dark:hover:text-blue-600 transition"
                    >
                        <FolderOpen className="lg:w-6 lg:h-6 w-5 h-5" />
                        {userBasicInfo.fullName}
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <Link
                            href={breadcrumb.href}
                            className={`flex items-center gap-2 hover:text-[#0033A0] dark:hover:text-blue-600 transition ${
                                index === breadcrumbs.length - 1 &&
                                'text-[#0033A0] dark:text-blue-600'
                            }`}
                        >
                            {breadcrumb.icon}
                            {breadcrumb.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
