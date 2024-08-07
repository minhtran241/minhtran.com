import Link from 'next/link';

const Milestone = ({ milestone, first, last, timeline_end }) => {
    const timeStr = new Date(milestone.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    });
    if (!milestone) {
        return null;
    }
    const paragraphs = milestone.description
        .split('.')
        .filter((p) => p.length > 1);

    return (
        <li>
            {!first && <hr className="bg-accent" />}
            <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-accent h-5 w-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div
                className={`${
                    timeline_end ? 'timeline-end' : 'timeline-start md:text-end'
                } mb-10`}
            >
                <time className="font-mono italic opacity-70">{timeStr}</time>
                <div className="">
                    <Link
                        href={milestone.link}
                        target="_blank"
                        className="lg:text-lg text-base font-black link link-hover"
                    >
                        {milestone.job_title}, {milestone.title}
                    </Link>
                </div>
                <div className="text-sm">
                    {paragraphs.map((p, index) => (
                        <p key={index}>{p}.</p>
                    ))}
                </div>
            </div>
            {!last && <hr className="bg-accent" />}
        </li>
    );
};

export default Milestone;
