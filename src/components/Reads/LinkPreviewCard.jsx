import Link from 'next/link';
import axios from 'axios';
import { extractMetaTags } from '@/app/actions';
import Image from 'next/image';
import Loading from '@/app/loading';
import { ExternalLink } from 'lucide-react';

const LinkPreviewCard = async ({ url }) => {
    //here calling the function
    const response = await axios.get(url);
    const data = await extractMetaTags(response);

    if (!data) {
        return (
            <div className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <Loading />
            </div>
        );
    }

    return (
        <div
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-box hover:border border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out tooltip dark:tooltip-info !text-start"
            data-tip={data.title}
        >
            <div className="absolute top-2 right-2">
                <ExternalLink className="h-3 w-3 text-[#0033A0] dark:text-blue-600" />
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
                    <p className="font-semibold text-sm line-clamp-1">
                        {data.title}
                    </p>
                    <p className="line-clamp-2 text-xs">{data.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default LinkPreviewCard;
