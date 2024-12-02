import Breakline from '@/common/elements/Breakline';
import BookACall from './bookACall';
import ContactForm from './contactForm';
import SocialMediaList from './socialMediaList';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const Contact = () => {
    return (
        <section className="flex flex-col gap-12 space-y-6">
            <SocialMediaList />
            {/* <Breakline /> */}
            <BookACall />
            {/* <Breakline /> */}
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex flex-row items-center gap-2 font-bold lg:text-2xl md:text-xl sm:text-lg text-lg">
                        <FontAwesomeIcon icon="fa-duotone fa-paper-plane" />
                        <h1 className="capitalize">Send me a message</h1>
                    </div>
                    <p className="lg:text-base md:text-base text-sm">
                        Fill out the form below to send me a message. I will get
                        back to you as soon as possible.
                    </p>
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
