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

export const USES = {
    Accessories: [
        {
            name: 'MacBook Pro M1 16 inch, 2021',
            metadata: '16GB RAM, 1TB SSD',
            href: 'https://www.apple.com/macbook-pro-14-and-16/',
            id: 'minhtran-mac',
            image: '/uses/accessories/macbook-pro.jpg',
        },
        {
            name: 'iPhone 13',
            metadata: 'Blue, 256GB',
            href: 'https://www.apple.com/iphone-13/',
            id: 'minhtran-iphone',
            image: '/uses/accessories/ip-13.jpg',
        },
        {
            name: 'iPad Pro, 2021',
            metadata: '12.9-inch, 256GB',
            href: 'https://www.apple.com/ipad-pro-12-9/',
            id: 'minhtran-ipad',
            image: '/uses/accessories/ipad-pro.jpg',
        },
        {
            name: 'AirPods Pro (2nd Gen)',
            metadata: 'Active Noise Cancellation',
            href: 'https://www.apple.com/airpods-pro/',
            id: 'minhtran-airpods',
            image: '/uses/accessories/airpods-pro.jpeg',
        },
    ],
    Coding: [
        {
            name: 'Visual Studio Code',
            metadata: 'Code Editor',
            href: 'https://code.visualstudio.com/',
            id: 'minhtran-vscode',
            image: '/uses/coding/vscode.svg',
        },
        {
            name: 'IntelliJ IDEA',
            metadata: 'Java IDE',
            href: 'https://www.jetbrains.com/idea/',
            id: 'minhtran-intellij',
            image: '/uses/coding/intellij.svg',
        },
        {
            name: 'Jupyter Notebook',
            metadata: 'Data Science IDE',
            href: 'https://jupyter.org/',
            id: 'minhtran-jupyter',
            image: '/uses/coding/jupyter.svg',
        },
        {
            name: 'Xcode',
            metadata: 'IDE for Apple uses',
            href: 'https://developer.apple.com/xcode/',
            id: 'minhtran-xcode',
            image: '/uses/coding/xcode.svg',
        },
        {
            name: 'Android Studio',
            metadata: 'IDE for Android uses',
            href: 'https://developer.android.com/studio',
            id: 'minhtran-androidstudio',
            image: '/uses/coding/androidstudio.svg',
        },
        {
            name: 'iTerm2',
            metadata: 'Terminal Emulator',
            href: 'https://iterm2.com/',
            id: 'minhtran-iterm',
            image: '/uses/coding/iterm.svg',
        },
        {
            name: 'Oh My Zsh',
            metadata: 'Shell Customization',
            href: 'https://ohmyz.sh/',
            id: 'minhtran-ohmyzsh',
            image: '/uses/coding/ohmyzsh.svg',
        },
        {
            name: 'Docker',
            metadata: 'Containerization Platform',
            href: 'https://www.docker.com/',
            id: 'minhtran-docker',
            image: '/uses/coding/docker.svg',
        },
        {
            name: 'Postman',
            metadata: 'API Client Software',
            href: 'https://www.postman.com/',
            id: 'minhtran-postman',
            image: '/uses/coding/postman.svg',
        },
        {
            name: 'Cloudflare',
            metadata: 'DNS, CDN & Security',
            href: 'https://www.cloudflare.com/',
            id: 'minhtran-cloudflare',
            image: '/uses/coding/cloudflare.svg',
        },
        {
            name: 'AWS',
            metadata: 'Cloud Services',
            href: 'https://aws.amazon.com/',
            id: 'minhtran-aws',
            image: '/uses/coding/aws.svg',
        },
        {
            name: 'Digital Ocean',
            metadata: 'Cloud Services',
            href: 'https://www.digitalocean.com/',
            id: 'minhtran-digitalocean',
            image: '/uses/coding/digitalocean.svg',
        },
    ],
};
