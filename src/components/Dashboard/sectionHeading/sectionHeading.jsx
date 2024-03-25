const SectionHeading = ({ title, icon, className = '' }) => {
    return (
        <div
            className={`flex items-center gap-1.5 text-xl font-medium text-gray-800 dark:text-gray-300 ${className}`}
        >
            {icon && <>{icon}</>}
            <h2 className="capitalize">{title}</h2>
        </div>
    );
};

export default SectionHeading;
