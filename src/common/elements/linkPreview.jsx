import { JSDOM } from 'jsdom';
import Link from 'next/link';
import Image from 'next/image';

// Function to fetch Open Graph details for a given URL
const extractMetaTags = async (url) => {
    try {
        // Fetch the content of the URL
        const response = await fetch(url);
        const html = await response.text();

        // Parse the HTML using JSDOM
        const dom = new JSDOM(html);
        const document = dom.window.document;

        // Extract meta tags from the document
        const metaTags = Array.from(document.querySelectorAll('meta')).reduce(
            (tags, meta) => {
                // Get the name, property, or itemprop attribute of the meta tag
                const name =
                    meta.getAttribute('name') ||
                    meta.getAttribute('property') ||
                    meta.getAttribute('itemprop');

                // Get the content attribute of the meta tag
                const content = meta.getAttribute('content');

                // If both name and content exist, add them to the tags object
                if (name && content) {
                    tags[name] = content;
                }

                return tags;
            },
            {}
        );

        // Return an object containing title, description, and image
        return {
            title:
                document.title ||
                metaTags['og:title'] ||
                metaTags['twitter:title'],
            description:
                metaTags.description ||
                metaTags['og:description'] ||
                metaTags['twitter:description'],
            image:
                metaTags.image ||
                metaTags['og:image'] ||
                metaTags['twitter:image'],
        };
    } catch (error) {
        // Handle errors if fetching or parsing fails
        console.error('Error fetching Open Graph details', error);
    }
};

async function LinkPreview({ url }) {
    //here calling the function
    const data = await extractMetaTags(url);

    if (!data) {
        return <p>Failed to fetch link preview.</p>;
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
}

export default LinkPreview;
