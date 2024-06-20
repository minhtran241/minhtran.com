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

    const dataTip = `Title: ${data.title}\nDescription: ${data.description}\n`;

    return (
        <div
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:border border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out tooltip !text-start"
            data-tip={dataTip}
        >
            <div className="absolute top-2 right-2">
                <ExternalLink className="h-4 w-4 text-[#0033A0] dark:text-blue-600" />
            </div>
            <Link
                href={url}
                target="_blank"
                className="flex items-center gap-4"
            >
                <Image
                    src={data.image || '/40.svg'}
                    alt={`${data.title} image`}
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px] rounded avatar"
                />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm line-clamp-1">
                        {data.title || 'No title found'}
                    </p>
                    <p className="line-clamp-2 text-xs">
                        {data.description || 'No description found'}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default LinkPreviewCard;
