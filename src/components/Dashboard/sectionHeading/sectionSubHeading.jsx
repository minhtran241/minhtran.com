const SectionSubHeading = ({ children }) => {
    return (
        <div className="flex flex-col justify-between gap-2 text-gray-600 dark:text-gray-400 lg:flex-row lg:items-center">
            {children}
        </div>
    );
};

export default SectionSubHeading;
