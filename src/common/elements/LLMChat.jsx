'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { readStreamableValue } from 'ai/rsc';
import { continueConversation } from '@/app/actions';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import rehypeRaw from 'rehype-raw'; // Allows parsing HTML in Markdown
import remarkGfm from 'remark-gfm'; // Enables GitHub-flavored Markdown

function ChatMessage({ message, isUser }) {
    return isUser ? (
        <div className="chat chat-end">
            <div className="chat-bubble">{message.content}</div>
        </div>
    ) : (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-8 h-8 rounded-full bg-secondary">
                    <img
                        alt="Assistant avatar"
                        src="/assets/llmchat/ai-headshot-2.png"
                    />
                </div>
            </div>
            <div className="chat-bubble">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        a: ({ href, children }) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline hover:text-blue-500"
                            >
                                {children}
                            </a>
                        ),
                        img: ({ src, alt }) => (
                            <img
                                src={src}
                                alt={alt}
                                className="rounded-lg max-w-full"
                            />
                        ),
                        ul: ({ children }) => (
                            <ul className="list-disc list-inside mb-2">
                                {children}
                            </ul>
                        ),
                        ol: ({ children }) => (
                            <ol className="list-decimal list-inside mb-2">
                                {children}
                            </ol>
                        ),
                        li: ({ children }) => (
                            <li className="mb-1">{children}</li>
                        ),
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-gray-300 pl-2 italic mb-2">
                                {children}
                            </blockquote>
                        ),
                    }}
                >
                    {message.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default function LLMChat() {
    const [conversation, setConversation] = useState([
        {
            role: 'assistant',
            content:
                'Hello! I&#39;m Minh&#39;s virtual assistant. How can I help you today?',
        },
    ]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [conversation]);

    const toggleChat = () => setIsOpen((prev) => !prev);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input.trim() };
        setConversation((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const { messages, newMessage } = await continueConversation([
                ...conversation,
                userMessage,
            ]);

            let textContent = '';
            for await (const delta of readStreamableValue(newMessage)) {
                textContent += delta;
                setConversation((prev) => [
                    ...messages,
                    { role: 'assistant', content: textContent },
                ]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-0 right-0 z-[99999]">
            {!isOpen && (
                <div
                    className="m-8 cursor-pointer tooltip tooltip-left tooltip-secondary"
                    onClick={toggleChat}
                    aria-label="Open chat"
                    data-tip="Minh's Virtual Assistant"
                >
                    <div className="avatar online">
                        <div className="ring-secondary ring-offset-base-100 w-[42px] h-[42px] rounded-full ring ring-offset-0">
                            <img
                                src="/assets/llmchat/ai-headshot-2.png"
                                alt="virtual assistant"
                            />
                        </div>
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="rounded-box shadow-lg bg-base-300 w-[22rem] h-[28rem] flex flex-col m-4">
                    <div className="h-[3.5rem] bg-secondary flex justify-between items-center px-2 rounded-t-box">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="avatar online">
                                <div className="w-8 rounded-full">
                                    <img
                                        src="/assets/llmchat/ai-headshot-2.png"
                                        alt="virtual assistant"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-secondary-content">
                                    Minh&apos;s Virtual Assistant
                                </h1>
                                <p className="text-xs text-secondary-content opacity-90">
                                    I reply in real-time
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="btn btn-sm btn-circle btn-ghost"
                            aria-label="Minimize chat"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-minus text-secondary-content" />
                        </button>
                    </div>

                    <div
                        className="h-[24.5rem] overflow-y-auto p-2 text-sm"
                        ref={chatContainerRef}
                    >
                        {conversation.map((message, index) => (
                            <ChatMessage
                                key={index}
                                message={message}
                                isUser={message.role === 'user'}
                            />
                        ))}
                    </div>

                    <form
                        className="flex items-center gap-2 p-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendMessage();
                        }}
                    >
                        <input
                            type="text"
                            className="input input-primary w-full input-sm"
                            placeholder="Questions about Minh?"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className={`btn btn-circle btn-active btn-secondary btn-sm ${
                                isLoading ? 'animate-pulse' : ''
                            }`}
                            disabled={isLoading}
                            aria-label="Send message"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-paper-plane text-secondary-content text-sm" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
