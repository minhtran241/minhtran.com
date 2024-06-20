import Link from 'next/link';
import Loading from '@/app/loading';
import axios from 'axios';
import { extractMetaTags } from '@/app/actions';
import Image from 'next/image';

const LinkTableRow = async ({ url, index }) => {
    //here calling the function
    const response = await axios.get(url);
    const data = await extractMetaTags(response);

    if (!data) {
        return (
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <Loading />
            </tr>
        );
    }

    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
            <td className="text-[#0033A0] dark:text-blue-600">{index}</td>
            <td className="avatar">
                <Image
                    src={data.image || '/40.svg'}
                    alt={`${data.title} image`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded"
                />
            </td>
            <td className="text-ellipsis overflow-hidden">{data.title}</td>
            <td className="text-ellipsis overflow-hidden">
                {data.description}
            </td>
            <td className="text-ellipsis overflow-hidden">
                <Link
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#0033A0] dark:hover:text-blue-600 hover:underline"
                >
                    {url}
                </Link>
            </td>
        </tr>
    );
};

export default LinkTableRow;
