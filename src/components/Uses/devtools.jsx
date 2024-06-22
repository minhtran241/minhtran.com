import Image from 'next/image';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { USES } from '../../../data/use/uses';

const DEVTOOLS = USES.DevTools;

const DevTools = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex items-center gap-1.5 text-xl font-medium text-[#0033A0] dark:text-white">
                <Code2 className="mr-1 h-5 w-5" />
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
                                width={400}
                                height={300}
                                className="rounded-lg lg:w-36 lg:h-36 md:w-32 md:h-32 w-28 h-28"
                            />
                        </div>
                        <div className="flex flex-col gap-1 items-center justify-center">
                            <h3 className="text-lg font-semibold">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
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
