import { sendMessage } from '@/services/contact';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to auto

const FORM_API_KEY = process.env.CONTACT_FORM_API_KEY;

export const GET = async (request) => {
    try {
        const { formData } = request.body;

        const updatedFormData = new FormData();
        updatedFormData.append('access_key', FORM_API_KEY);

        for (const key in formData) {
            updatedFormData.append(key, formData[key]);
        }

        const response = await sendMessage(updatedFormData);

        return NextResponse.json(response);
    } catch (error) {
        console.error(error);
        return NextResponse.json(error);
    }
};
