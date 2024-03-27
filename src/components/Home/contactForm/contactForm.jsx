'use client';

import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'sonner';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('xeqwaeal');

    if (state.succeeded) {
        // Clear form
        document.getElementById('contact-form').reset();
        toast.success('Message sent!');
    }
    return (
        <div>
            <p className="font-semibold text-white mb-4 text-2xl">Contact me</p>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                id="contact-form"
            >
                {/* <Input
                    type="text"
                    placeholder="Name and Surname"
                    id="name"
                    name="name"
                /> */}
                <Input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <Textarea
                    placeholder="Type your message here."
                    className="dark:bg-black"
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button
                    className="bg-[#0033A0] text-white hover:bg-blue-800"
                    type="submit"
                    disabled={state.submitting}
                >
                    <Send className="mr-2 h-4 w-4" /> Send message
                </Button>
                <ValidationError
                    errors={state.errors}
                    className="border-l-4 border-[#0033A0] p-2"
                />
            </form>
        </div>
    );
};

export default ContactForm;
