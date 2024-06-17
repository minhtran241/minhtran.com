import Link from 'next/link';
import Loading from '@/app/loading';
import axios from 'axios';
import { extractMetaTags } from '@/app/actions';

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
            <td className="text-ellipsis overflow-hidden">
                {/* {data?.title?.length > 40
                    ? `${data?.title?.slice(0, 40)}...`
                    : data.title} */}
                {data.title}
            </td>
            <td className="text-ellipsis overflow-hidden">
                {/* {data?.description?.length > 80
                    ? `${data?.description?.slice(0, 80)}...`
                    : data.description} */}
                {data.description}
            </td>
            <td className="text-ellipsis overflow-hidden">
                {/* {url?.length > 40 ? (
                    <Link
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#0033A0] dark:hover:text-blue-600 hover:underline"
                    >{`${url?.slice(0, 40)}...`}</Link>
                ) : (
                    <Link
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#0033A0] dark:hover:text-blue-600 hover:underline"
                    >
                        {url}
                    </Link>
                )} */}
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
