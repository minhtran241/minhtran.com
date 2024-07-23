import Image from 'next/image';
import Link from 'next/link';

const LetschatBubble = () => {
    return (
        <Link
            href="/contact"
            className="animate-bounce fixed rounded-full bottom-0 m-10 shadow-lg z-[99998] left-0 flex items-center justify-center p-2 md:p-3 tooltip tooltip-open tooltip-accent bg-accent text-accent-content"
            role="button"
            data-tip="Hi there! Let's chat!"
        >
            <Image
                src="/memoji/memojialo.png"
                alt="headshot"
                className="max-w-xs md:max-w-sm rounded-full border-2 border-white shadow-md"
                width={80}
                height={80}
            />
        </Link>
    );
};

export default LetschatBubble;
