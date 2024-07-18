import Link from 'next/link';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import Loading from '@/app/loading';
import axios from 'axios';
import { extractMetaTags } from '@/app/actions';
import { getImageBuffer } from '../helpers';

const LinkPreview = async ({ url }) => {
    //here calling the function
    const response = await axios.get(url);
    const data = await extractMetaTags(response);

    if (!data) {
        return <Loading />;
    }

    const buffer = data?.image ? await getImageBuffer(data.image) : null;
    const { base64 } = buffer ? await getPlaiceholder(buffer) : {};

    return (
        <Link href={url} className="mockup-window border">
            <div className="flex justify-center px-4 py-8 border-t">
                <div className="flex flex-col gap-4 items-center">
                    <Image
                        src={data?.image ? data.image : '/readme/home-dark.png'}
                        alt={data.title}
                        width={400}
                        height={200}
                        className="rounded-lg"
                        placeholder="blur"
                        blurDataURL={
                            data?.image ? base64 : '/readme/home-dark.png'
                        }
                    />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold">{data.title}</h2>
                        <p className="text-sm text-base-content-secondary">
                            {data.description}
                        </p>
                        <p className="text-sm text-base-content-secondary hover:text-primary underline">
                            {url}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LinkPreview;
