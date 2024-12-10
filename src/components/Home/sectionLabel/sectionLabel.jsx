const SectionLabel = ({ title, description, icon }) => {
    return (
        <div className="max-w-xl mb-8">
            <div className="flex flex-col gap-4">
                <h1 className="flex items-center gap-3 text-lg font-bold lg:text-2xl md:text-xl">
                    {icon && <span className="text-primary">{icon}</span>}
                    <span>{title}</span>
                </h1>
                {description && (
                    <p className="text-sm lg:text-base">{description}</p>
                )}
            </div>
        </div>
    );
};

export default SectionLabel;
