const SectionLabel = ({ title, description }) => {
    return (
        <div className="max-w-xl mx-auto">
            <div className="text-center">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="font-semibold leading-tight text-gradient text-gradient-light dark:text-gradient-dark lg:text-3xl md:text-2xl sm:text-xl text-2xl">
                        {title}
                    </h1>
                    <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                        <div className="flex-1 h-2 bg-gradient-to-r from-[#0033A0] to-blue-600 dark:from-blue-600 dark:to-blue-900"></div>
                    </div>
                </div>
                <p className="mb-8 text-base text-center text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SectionLabel;
