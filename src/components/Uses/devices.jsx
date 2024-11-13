import Image from 'next/image';
import Link from 'next/link';
import { USES } from '../../../data/uses';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const DEVICES = USES.Devices;

const Devices = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-2 text-primary font-semibold lg:text-xl md:text-lg text-base">
                <FontAwesomeIcon icon="fa-duotone fa-laptop-mobile" />
                <h1 className="capitalize">Devices</h1>
            </div>
            <div className="flex flex-col gap-8 mb-8">
                <Link
                    href={DEVICES[0]?.href || '#'}
                    target="_blank"
                    className="flex flex-col gap-4 hover:scale-[101%] hover:text-primary transition-all duration-300"
                >
                    <div className="flex justify-center items-center w-full">
                        <Image
                            src={DEVICES[0]?.image}
                            alt={DEVICES[0]?.name}
                            width={800}
                            height={400}
                            className="rounded-box"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <h3 className="font-semibold lg:text-xl md:text-lg text-base">
                            {DEVICES[0]?.name}
                        </h3>
                        <p className="lg:text-base md:text-sm text-xs">
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
                            className="flex flex-col gap-4 hover:scale-[101%] hover:text-primary transition-all duration-300"
                        >
                            <div className="flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={400}
                                    height={300}
                                    className="rounded-box w-56 h-56"
                                />
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <h3 className="font-semibold lg:text-lg md:text-base text-sm">
                                    {item.name}
                                </h3>
                                <p className="lg:text-base md:text-sm text-xs">
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
