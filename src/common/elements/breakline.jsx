const Breakline = ({ className = '', ...others }) => {
    return (
        <div
            className={`my-4 border-t border-gray-300 dark:border-neutral-700 ${className}`}
            data-testid="breakline"
            {...others}
        ></div>
    );
};

export default Breakline;
