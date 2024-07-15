import Contact from '@/components/Contact/contact';
import Breadcrumbs from '@/components/Common/breadcrumbs/Breadcrumbs';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

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
        icon: <FontAwesomeIcon icon="fa-duotone fa-browser" />,
        text: 'Contact',
    },
];

const ContactPage = () => {
    return (
        <>
            <div className="container flex flex-col py-12 gap-4">
                <Breadcrumbs breadcrumbs={BREADCRUMBS} />
                <Contact />
            </div>
        </>
    );
};

export default ContactPage;
