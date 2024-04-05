'use client';

import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';
import { Clock, Info } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const formInitialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const ContactForm = () => {
    const [formData, setFormData] = useState(formInitialState);

    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [capchaToken, setCapchaToken] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Except: Subject
        if (name !== 'subject') {
            setFormErrors({
                ...formErrors,
                [name]: value ? undefined : `${name} is required`,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hasErrors =
            Object.values(formErrors).some((error) => error) || !capchaToken;

        if (!hasErrors) {
            setIsLoading(true);
            try {
                const response = await axios.post(
                    '/api/contact',
                    { formData },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
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

    const onHCaptchaChange = (token) => {
        setCapchaToken(token);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-grow flex-col gap-5">
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-2 w-full">
                        <Label htmlFor="name">
                            Name<span className="text-red-500">*</span>
                        </Label>
                        <Input
                            className="border border-gray-300 dark:border-gray-700"
                            type="text"
                            // placeholder="Name*"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <Label htmlFor="email">
                            Email<span className="text-red-500">*</span>
                        </Label>
                        <Input
                            className="border border-gray-300 dark:border-gray-700"
                            type="email"
                            // placeholder="Email*"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                        className="border border-gray-300 dark:border-gray-700"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="message">
                        Message<span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                        className="border border-gray-300 dark:border-gray-700"
                        rows={5}
                        // placeholder="Message*"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    onVerify={onHCaptchaChange}
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
            {/* Mark is required */}
            <div className="mt-5 flex items-center gap-2 text-sm">
                <Info className="w-4 h-4" />
                <div className="">
                    <span className="text-red-500">*</span> Marked fields are
                    required
                </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <div className="">
                    Avg. response: 1-2 Hours (Working Hours, GMT+7)
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
