import Image from 'next/image';
import Link from 'next/link';
import { MonitorSmartphone } from 'lucide-react';
import { USES } from '../../../data/use/uses';

const DEVICES = USES.Devices;

const Devices = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex items-center gap-1.5 text-xl font-medium text-[#0033A0] dark:text-white">
                <MonitorSmartphone className="mr-1 h-5 w-5" />
                <h1 className="capitalize">Accessories</h1>
            </div>
            <div className="flex flex-col gap-8 mb-8">
                <Link
                    href={DEVICES[0]?.href || '#'}
                    target="_blank"
                    className="flex flex-col gap-4 hover:scale-[101%] transition-all duration-300"
                >
                    <div className="flex justify-center items-center w-full">
                        <Image
                            src={DEVICES[0]?.image}
                            alt={DEVICES[0]?.name}
                            width={1200}
                            height={600}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <h3 className="text-xl font-semibold">
                            {DEVICES[0]?.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {DEVICES[0]?.metadata}
                        </p>
                    </div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DEVICES?.slice(1)?.map((item, index) => (
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

export default Devices;
