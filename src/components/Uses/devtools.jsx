import Image from 'next/image';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { USES } from '../../../data/use/uses';

const DEVTOOLS = USES.DevTools;

const DevTools = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex items-center gap-2 text-[#0033A0] dark:text-white font-semibold lg:text-xl md:text-lg text-base">
                <Code2 className="lg:h-6 lg:w-6 h-5 w-5" />
                <h1 className="capitalize">Development Tools</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {DEVTOOLS?.map((item, index) => (
                    <Link
                        href={item.href}
                        target="_blank"
                        key={index}
                        className="flex flex-col gap-4 hover:scale-[101%] transition-all duration-300"
                    >
                        <div className="flex items-center justify-center">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={112}
                                height={112}
                                className="rounded-box lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20"
                            />
                        </div>
                        <div className="flex flex-col gap-1 items-center justify-center">
                            <h3 className="font-semibold lg:text-lg md:text-base text-sm">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 lg:text-base md:text-sm text-xs">
                                {item.metadata}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default DevTools;
