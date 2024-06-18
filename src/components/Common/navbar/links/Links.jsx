import Link from 'next/link';
import { MENU_TABS } from '@/common/constants/menu';

const Links = () => {
    return (
        <>
            {MENU_TABS.slice(1).map((item, index) => (
                <li key={index}>
                    <Link href={item.href} className="font-semibold">
                        {item.title}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default Links;
