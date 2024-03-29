import Link from 'next/link';
import Image from 'next/image';
import Loading from '@/app/loading';
import axios from 'axios';
import { extractMetaTags } from '@/app/actions';

const LinkPreview = async ({ url }) => {
    //here calling the function
    const response = await axios.get(url);
    const data = await extractMetaTags(response);

    if (!data) {
        return <Loading />;
    }
    return (
        <Link href={url} className="mockup-browser border border-base-300">
            <div className="mockup-browser-toolbar">
                <div className="input border border-base-300 text-black hover:text-[#0033A0] dark:hover:text-blue-600 hover:underline">
                    {url}
                </div>
            </div>
            <div className="flex justify-center px-4 py-8 border-t border-base-300">
                {/* Link Preview */}
                <div className="flex flex-col gap-4 items-center">
                    {data.image && (
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                    )}
                    <div className="">
                        <h2 className="text-lg font-semibold">{data.title}</h2>
                        <p className="text-sm text-base-content-secondary">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LinkPreview;
