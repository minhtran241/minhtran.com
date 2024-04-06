const SectionHeading = ({ title, icon, className = '' }) => {
    return (
        <div
            className={`flex items-center gap-1.5 text-xl font-medium ${className}`}
        >
            {icon && <>{icon}</>}
            <h2 className="capitalize">{title}</h2>
        </div>
    );
};

export default SectionHeading;
