import Breakline from '@/common/elements/breakline';
import BookACall from './bookACall';
import ContactForm from './contactForm';
import SocialMediaList from './socialMediaList';
import { Mailbox } from 'lucide-react';

const Contact = () => {
    return (
        <section className="space-y-6">
            <SocialMediaList />
            <Breakline />
            <BookACall />
            <Breakline />
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#0033A0] dark:text-white font-semibold lg:text-xl md:text-lg text-base">
                        <Mailbox className="lg:h-6 lg:w-6 h-5 w-5" />
                        <h1 className="capitalize">Send me a message</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 lg:text-base text-sm">
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
