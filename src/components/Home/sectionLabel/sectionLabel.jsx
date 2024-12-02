const SectionLabel = ({ title, description, primary = true }) => {
    return (
        <div className="max-w-lg">
            <div className="flex flex-col gap-2">
                <h1
                    className='font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg'
                >
                    {title}
                </h1>
                <p className="mb-8 lg:text-base md:text-base text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SectionLabel;
