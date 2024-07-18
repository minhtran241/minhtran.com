const SectionLabel = ({ title, description }) => {
    return (
        <div className="max-w-xl mx-auto">
            <div className="text-center">
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="font-black leading-relaxed text-primary lg:text-2xl md:text-xl sm:text-lg text-xl">
                        {title}
                    </h1>
                    <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                        <div className="flex-1 h-2 bg-gradient-to-r from-primary to-secondary"></div>
                    </div>
                </div>
                <p className="mb-8 text-center lg:text-base md:text-base text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SectionLabel;
