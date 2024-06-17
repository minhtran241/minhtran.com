import Contact from '@/components/Contact/contact';
import { Handshake } from 'lucide-react';

const PAGE_TITLE = 'Contact Information';
const PAGE_DESCRIPTION =
    "Feel free to get in touch and let's have a discussion about how we can work together.";

const ContactPage = () => {
    return (
        <div className="container mt-12">
            <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-1.5 text-2xl font-semibold">
                    <Handshake className="mr-1 h-6 w-6" />
                    <h1 className="capitalize">{PAGE_TITLE}</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    {PAGE_DESCRIPTION}
                </p>
            </div>
            <Contact />
        </div>
        //     </div>
        // </div>
    );
};

export default ContactPage;
