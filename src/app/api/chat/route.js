import { streamText } from 'ai';
import { cohere } from '@ai-sdk/cohere';

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export const POST = async (request) => {
    // Extract the `prompt` from the body of the request
    const { prompt } = await request.json();

    const body = JSON.stringify({
        prompt,
        model: 'command-nightly',
        max_tokens: 300,
        stop_sequences: [],
        temperature: 0.9,
        return_likelihoods: 'NONE',
        stream: true,
    });

    // const response = await fetch('https://api.cohere.ai/v2/chat', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
    //     },
    //     body,
    // });

    const stream = streamText({
        model: cohere('command-nightly'),
        prompt,
        max_tokens: 300,
        stop_sequences: [],
        temperature: 0.9,
        return_likelihoods: 'NONE',
        stream: true,
    });

    return stream.toDataStreamResponse();
};
