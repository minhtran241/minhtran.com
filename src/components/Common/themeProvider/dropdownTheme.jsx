'use client';

import { Sun, MoonStar } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const DropdownTheme = () => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="bg-transparent text-white hover:bg-white/20 hover:text-white"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-gray-900">
                <DropdownMenuItem
                    onClick={() => setTheme('light')}
                    className="dark:hover:bg-gray-800"
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                    className="dark:hover:bg-gray-800"
                >
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('system')}
                    className="dark:hover:bg-gray-800"
                >
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownTheme;
