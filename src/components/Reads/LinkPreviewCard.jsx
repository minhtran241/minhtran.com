import Link from 'next/link';
import axios from 'axios';
import { extractMetaTags } from '@/app/actions';
import Image from 'next/image';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Loading from '@/app/loading';

const LinkPreviewCard = async ({ url }) => {
    //here calling the function
    const response = await axios.get(url);
    const data = await extractMetaTags(response);

    if (!data) {
        return <Loading fullPage={false} />;
    }

    return (
        <div
            className="py-4 px-6 rounded-box bg-base-300 border border-base-100 hover:border-primary transition duration-300 ease-in-out tooltip !text-start"
            data-tip={data.title}
        >
            <div className="absolute top-2 right-2">
                <FontAwesomeIcon icon="fa-duotone fa-square-arrow-up-right text-secondary" />
            </div>
            <Link
                href={url}
                target="_blank"
                className="flex items-center gap-4"
            >
                <Image
                    src={data.image || '/56.svg'}
                    alt={`${data.title} image`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded avatar"
                />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold line-clamp-1 text-sm">
                        {data.title}
                    </p>
                    <p className="line-clamp-2 text-xs opacity-70">
                        {data.description}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default LinkPreviewCard;
