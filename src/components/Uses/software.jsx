import Image from 'next/image';
import Link from 'next/link';
import { USES } from '../../../data/uses';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const SOFTWARES = USES.Softwares;

const Softwares = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-2 font-bold lg:text-2xl md:text-xl sm:text-lg text-lg">
                <FontAwesomeIcon icon="fa-duotone fa-cubes" />
                <h1 className="capitalize">Softwares</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {SOFTWARES?.map((item, index) => (
                    <Link
                        href={item.href}
                        target="_blank"
                        key={index}
                        className="flex flex-col gap-4 hover:text-primary border border-gray-200 rounded-box p-4 hover:border-primary"
                    >
                        <div className="flex items-center justify-center">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="rounded-box lg:w-20 lg:h-20 md:w-16 md:h-16 w-12 h-12 object-cover"
                                loading="lazy"
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
        </section>
    );
};

export default Softwares;
