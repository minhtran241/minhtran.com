import { Laptop, Smartphone, Tablet } from 'lucide-react';

const iconSize = 24;
const iconClassName = 'w-auto text-neutral-700 dark:text-neutral-300';

export const PAIR_DEVICES = {
    Computer: {
        icon: <Laptop className={iconClassName} size={iconSize} />,
        model: 'MacBook Pro M1',
        id: 'minhtran-mac',
    },
    Smartphone: {
        icon: <Smartphone className={iconClassName} size={iconSize} />,
        model: 'iPhone 13',
        id: 'minhtran-iphone',
    },
    Tablet: {
        icon: <Tablet className={iconClassName} size={iconSize} />,
        model: 'iPad Pro 2021',
        id: 'minhtran-ipad',
    },
};
