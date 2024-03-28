'use client';

import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';
import { Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formInitialState = {
    name: '',
    email: '',
    message: '',
};

const ContactForm = () => {
    const [formData, setFormData] = useState(formInitialState);

    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: value ? undefined : `${name} is required`,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hasErrors = Object.values(formErrors).some((error) => error);

        if (!hasErrors) {
            setIsLoading(true);
            try {
                const response = await axios.post('/api/contact', { formData });
                if (response.status === 200) {
                    toast.success('Message sent successfully');
                    setFormData(formInitialState);
                }
            } catch (error) {
                console.error(error);
                toast.error('An error occurred. Please try again later');
            }
            setIsLoading(false);
        } else {
            toast.error('Please fill in all required fields');
        }
    };

    const isSubmitDisabled = Object.values(formErrors).some((error) => error);

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-grow flex-col gap-5">
                <div className="flex flex-col gap-5 md:flex-row">
                    <Input
                        className="border border-[#0033A0] dark:border-blue-600"
                        type="text"
                        placeholder="Name*"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        className="border border-[#0033A0] dark:border-blue-600"
                        type="email"
                        placeholder="Email*"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Textarea
                    className="border border-[#0033A0] dark:border-blue-600"
                    rows={5}
                    placeholder="Message*"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className={clsx(
                        'w-full rounded-md bg-[#0033A0] dark:bg-blue-600 text-white transition-all duration-300 hover:bg-[#00257D] dark:hover:bg-blue-700',
                        isSubmitDisabled
                            ? 'bg-gray-400 dark:bg-gray-700 cursor-not-allowed'
                            : 'hover:bg-[#00257D] dark:hover:bg-blue-600'
                    )}
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
            </div>

            <div className="my-5 flex items-center gap-2 dark:text-gray-400">
                <Clock className='w-5 h-5' />
                <div className="text-sm">
                    <span className="font-medium">Avg. response:</span> 1-2
                    Hours (Working Hours, GMT+7)
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
