import Image from 'next/image';
import Link from 'next/link';
import { USES } from '../../../data/uses';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const DEVTOOLS = USES.DevTools;

const DevTools = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-2 text-primary font-semibold lg:text-xl md:text-lg text-base">
                <FontAwesomeIcon icon="fa-duotone fa-code" />
                <h1 className="capitalize">Development Tools</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {DEVTOOLS?.map((item, index) => (
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
                                width={112}
                                height={112}
                                className="rounded-box lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20"
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

export default DevTools;
