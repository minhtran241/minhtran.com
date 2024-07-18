import Link from 'next/link';
import { userBasicInfo } from '@/common/constants/userBasic';

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <div className="breadcrumbs lg:text-xl md:text-lg text-base font-black leading-relaxed">
            <ul>
                <li>
                    <Link
                        href={'/'}
                        className="hover:text-primary transition text-gray-500"
                    >
                        {userBasicInfo.fullName}
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <Link
                            href={breadcrumb.href}
                            className={`hover:text-primary transition ${
                                index !== breadcrumbs.length - 1 &&
                                'text-gray-500'
                            } ${
                                index === breadcrumbs.length - 1 &&
                                'text-primary'
                            }`}
                        >
                            {breadcrumb.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
