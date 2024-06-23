'use client';

import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Clock, Loader } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

const FormSchema = z.object({
    name: z.string().optional(),
    email: z
        .string()
        .min(1, 'Email address is required')
        .email('Invalid email address'),
    subject: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
    'h-captcha-response': z.string().min(1, 'Please complete the captcha'),
});

const formInitialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    'h-captcha-response': '',
};

const ContactForm = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: formInitialState,
    });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/contact', {
                formData: {
                    ...data,
                },
            });
            if (response.data.data.success) {
                toast.success('Message sent successfully!');
                form.reset();
            } else {
                toast.error(
                    'Failed to send message, please try again or contact directly through email'
                );
            }
        } catch (error) {
            console.error(error);
            toast.error(
                'Failed to send message, please try again or contact directly through email'
            );
        } finally {
            // Reset the captcha
            form.setValue('h-captcha-response', '');
            setIsLoading(false);
        }
    };

    const onHCaptchaChange = (token) => {
        form.setValue('h-captcha-response', token);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex flex-row leading-none">
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="name"
                                            placeholder="Your name"
                                            {...form.register('name')}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex flex-row leading-none">
                                        Email address
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Your email address"
                                            {...form.register('email')}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex flex-row leading-none">
                                Subject
                            </FormLabel>
                            <FormControl>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="subject"
                                    placeholder="Your subject"
                                    {...form.register('subject')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex flex-row leading-none">
                                Message <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    {...form.register('message')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="h-captcha-response"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <HCaptcha
                                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                    onVerify={onHCaptchaChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button
                    type="submit"
                    className={clsx(
                        'btn btn-sm sm:btn-sm md:btn-md lg:btn-md w-full bg-[#0033A0] dark:bg-blue-600 text-white transition-all duration-300 hover:bg-[#00257D] dark:hover:bg-blue-700',
                        isLoading
                            ? 'bg-gray-400 dark:bg-gray-700 cursor-not-allowed'
                            : 'hover:bg-[#00257D] dark:hover:bg-blue-600'
                    )}
                    disabled={isLoading}
                >
                    {isLoading ? <Loader /> : 'Send Message'}
                </button>
                <div className="mt-3 flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <div className="">
                        <span className="font-medium">Avg. response:</span> 1-2
                        Hours (Working Hours, GMT+7)
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default ContactForm;
