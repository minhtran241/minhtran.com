'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { readStreamableValue } from 'ai/rsc';
import { continueConversation } from '@/app/actions';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

function ChatMessage({ message, isUser }) {
    return isUser ? (
        <div className="chat chat-end">
            <div className="chat-bubble">{message.content}</div>
        </div>
    ) : (
        <div className="chat chat-start">
            <div className="chat-image avatar online">
                <div className="w-10 rounded-full">
                    <img alt="Assistant avatar" src="/home/ava.png" />
                </div>
            </div>
            <div className="chat-bubble">
                <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
        </div>
    );
}

export default function BubbleChat() {
    const [conversation, setConversation] = useState([]);
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

        const userMessage = { role: 'user', content: input };
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
        <div className="fixed bottom-4 right-4 z-[99999]">
            {!isOpen && (
                <button
                    className="btn btn-circle btn-active btn-secondary flex items-center justify-center"
                    onClick={toggleChat}
                    aria-label="Open chat"
                >
                    <FontAwesomeIcon icon="fa-solid fa-comment-dots text-secondary-content" />
                </button>
            )}

            {isOpen && (
                <div className="rounded-lg shadow-lg bg-base-300 w-80 h-96 flex flex-col">
                    <div className="h-16 bg-secondary flex justify-between items-center px-4 rounded-t-lg">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="avatar online">
                                <div className="w-8 rounded-full">
                                    <img
                                        src="/home/ava.png"
                                        alt="Virtual Minh"
                                    />
                                </div>
                            </div>
                            <h1 className="text-secondary-content">
                                Virtual Minh
                            </h1>
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
                        className="h-80 flex-grow overflow-auto p-2 text-xs"
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
                            placeholder="Type a message..."
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
