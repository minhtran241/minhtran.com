import Breakline from '@/common/elements/breakline';
import BookACall from './bookACall';
import ContactForm from './contactForm';
import SocialMediaList from './socialMediaList';
import { MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section className="space-y-6">
            <SocialMediaList />
            <Breakline />
            <BookACall />
            <Breakline />
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xl font-medium">
                        <MessageSquare className="mr-1 h-5 w-5" />
                        <h1 className="capitalize">Send me a message</h1>
                    </div>
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
