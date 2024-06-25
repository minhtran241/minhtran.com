import Link from 'next/link';
import { FolderOpen } from 'lucide-react';

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <div className="breadcrumbs text-base">
            <ul>
                <li>
                    <Link href={'/'} className="flex items-center gap-2">
                        <FolderOpen className="h-4 w-4 stroke-current" />
                        Minh Tran
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <Link
                            href={breadcrumb.href}
                            className="flex items-center gap-2 text-[#0033A0] dark:text-blue-600"
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
