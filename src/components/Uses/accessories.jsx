import { USES } from '@/common/constants/devices';
import Image from 'next/image';
import Link from 'next/link';
import { MonitorSmartphone } from 'lucide-react';

const ACCESSORIES = USES.Accessories;

const Accessories = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex items-center gap-1.5 font-semibold lg:text-2xl md:text-xl text-xl">
                <MonitorSmartphone className="mr-1 h-6 w-6" />
                <h1 className="capitalize">Accessories</h1>
            </div>
            <div className="flex flex-col gap-8 mb-8">
                <Link
                    href={ACCESSORIES[0]?.href || '#'}
                    target="_blank"
                    className="flex flex-col gap-4 hover:scale-[101%] transition-all duration-300"
                >
                    <div className="flex justify-center items-center w-full">
                        <Image
                            src={ACCESSORIES[0]?.image}
                            alt={ACCESSORIES[0]?.name}
                            width={1200}
                            height={600}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <h3 className="text-xl font-semibold">
                            {ACCESSORIES[0]?.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {ACCESSORIES[0]?.metadata}
                        </p>
                    </div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ACCESSORIES?.slice(1)?.map((item, index) => (
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
                                    className="rounded-lg w-64 h-64"
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
            </div>
        </section>
    );
};

export default Accessories;
