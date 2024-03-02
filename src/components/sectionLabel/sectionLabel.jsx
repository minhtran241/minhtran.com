const SectionLabel = ({ title, description }) => {
    const t1 = title.split(' ')[0];
    const t2 = title.split(' ').slice(1).join(' ');
    return (
        <div className="max-w-xl mx-auto">
            <div className="text-center">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-4xl font-semibold leading-tight dark:text-white">
                        {t1}{' '}
                        <span className="text-[#0033A0] dark:text-blue-600">
                            {t2}
                        </span>{' '}
                    </h1>
                    <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                        <div className="flex-1 h-2 bg-blue-400"></div>
                        <div className="flex-1 h-2 bg-blue-600"></div>
                        <div className="flex-1 h-2 bg-[#0033A0]"></div>
                    </div>
                </div>
                <p className="mb-16 text-base text-center text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SectionLabel;
