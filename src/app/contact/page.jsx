import Contact from '@/components/Contact/contact';
import { Folder } from 'lucide-react';
import Breadcrumbs from '@/components/Common/breadcrumbs/Breadcrumbs';

const PAGE_TITLE = 'Contact Information';
const PAGE_DESCRIPTION =
    "Feel free to get in touch and let's have a discussion about how we can work together.";

// SEO metadata
export const generateMetadata = async () => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    };
};

const BREADCRUMBS = [
    {
        href: '/contact',
        icon: <Folder className="h-4 w-4 stroke-current" />,
        text: 'Contact',
    },
];

const ContactPage = () => {
    return (
        <div className="container flex flex-col mt-12 gap-4">
            {/* <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-1.5 text-2xl font-semibold text-[#0033A0] dark:text-white">
                    <Handshake className="mr-1 h-6 w-6" />
                    <h1 className="capitalize">{PAGE_TITLE}</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    {PAGE_DESCRIPTION}
                </p>
            </div> */}
			<Breadcrumbs breadcrumbs={BREADCRUMBS} />
            <Contact />
        </div>
    );
};

export default ContactPage;
