import Breakline from '@/common/elements/breakline';
import BookACall from './bookACall';
import ContactForm from './contactForm';
import SocialMediaList from './socialMediaList';

const Contact = () => {
    return (
        <section className="space-y-6">
            <SocialMediaList />
            <Breakline />
            <BookACall />
            <Breakline />
            <div className="space-y-5">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Send me a message</h3>
                    <p className="text-gray-600 dark:text-gray-400">
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
