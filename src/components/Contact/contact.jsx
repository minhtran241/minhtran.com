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
                <h3 className="text-xl font-medium">Send me a message</h3>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
