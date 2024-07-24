'use client';

import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const FormSchema = z.object({
    name: z.string().optional(),
    email: z
        .string()
        .min(1, 'Email address is required')
        .email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
    'h-captcha-response': z.string().min(1, 'Please complete the captcha'),
});

const formInitialState = {
    name: '',
    email: '',
    message: '',
    'h-captcha-response': '',
};

const ContactForm = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: formInitialState,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/contact', {
                formData: {
                    ...data,
                },
            });
            if (response.data.data.success) {
                document.getElementById('success_dialog').showModal();
                form.reset();
            } else {
                setError(
                    'Failed to send message, please try again or contact directly through email'
                );
            }
        } catch (error) {
            setError(
                'Failed to send message, please try again or contact directly through email'
            );
            console.error(error);
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
        // Daisy UI contact form
        <div>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <label className="input input-sm sm:input-sm md:input-md lg:input-md input-bordered flex flex-row items-center gap-2">
                    <FontAwesomeIcon icon="fa-duotone fa-user" />
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="grow"
                        placeholder="Name"
                        {...form.register('name')}
                    />
                </label>
                <span className="text-error text-sm">
                    {form.formState.errors['name']?.message}
                </span>
                <label className="input input-sm sm:input-sm md:input-md lg:input-md input-bordered flex flex-row items-center gap-2">
                    <FontAwesomeIcon icon="fa-duotone fa-envelope" />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="grow"
                        placeholder="Email*"
                        {...form.register('email')}
                    />
                </label>
                <span className="text-error text-sm">
                    {form.formState.errors['email']?.message}
                </span>
                <textarea
                    className="textarea textarea-bordered flex items-center gap-2 w-full"
                    id="message"
                    name="message"
                    {...form.register('message')}
                    placeholder="Message*"
                ></textarea>
                <span className="text-error text-sm">
                    {form.formState.errors['message']?.message}
                </span>
                <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    onVerify={onHCaptchaChange}
                />
                <span className="text-error text-sm">
                    {form.formState.errors['h-captcha-response']?.message}
                </span>
                <button
                    type="submit"
                    className={clsx(
                        'btn btn-active btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-md w-full',
                        isLoading ? 'cursor-not-allowed' : ''
                    )}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <FontAwesomeIcon icon="fa-duotone fa-atom-simple fa-spin" />
                    ) : (
                        'Send Message'
                    )}
                </button>
                {error && (
                    <div role="alert" className="alert alert-error">
                        <FontAwesomeIcon icon="fa-duotone fa-circle-xmark" />
                        <span>{error}</span>
                    </div>
                )}
                <div className="flex flex-row items-center gap-2 text-sm sm:text-xs">
                    <FontAwesomeIcon icon="fa-duotone fa-clock" />
                    <div className="">
                        <span className="font-medium">Avg. response:</span> 1-2
                        Hours (Working Hours, GMT+7)
                    </div>
                </div>
            </form>
            <dialog
                id="success_dialog"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">
                        Message Sent
                    </h3>
                    <p className="py-4">
                        Thank you for reaching out! I will get back to you as
                        soon as possible.
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-active btn-primary">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ContactForm;
