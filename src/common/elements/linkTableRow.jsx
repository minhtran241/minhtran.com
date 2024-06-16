import Link from 'next/link';
import Loading from '@/app/loading';
import axios from 'axios';
import { extractMetaTags } from '@/app/actions';

const LinkTableRow = async ({ url, index }) => {
    //here calling the function
    const response = await axios.get(url);
    const data = await extractMetaTags(response);

    if (!data) {
        return <Loading />;
    }

    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
            <td>{index}</td>
            <td>
                {data?.title?.length > 40
                    ? `${data?.title?.slice(0, 40)}...`
                    : data.title}
            </td>
            <td>
                {data?.description?.length > 80
                    ? `${data?.description?.slice(0, 80)}...`
                    : data.description}
            </td>
            <td>
                {url?.length > 40 ? (
                    <Link
                        href={url}
                        className="hover:text-[#0033A0] dark:hover:text-blue-600 hover:underline"
                    >{`${url?.slice(0, 40)}...`}</Link>
                ) : (
                    <Link
                        href={url}
                        className="hover:text-[#0033A0] dark:hover:text-blue-600 hover:underline"
                    >
                        {url}
                    </Link>
                )}
            </td>
        </tr>
    );
};

export default LinkTableRow;
