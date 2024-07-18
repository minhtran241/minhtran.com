const Breakline = ({ className = '', ...others }) => {
    return (
        <div
            className={`my-4 border-t ${className} border-gray-300`}
            data-testid="breakline"
            {...others}
        ></div>
    );
};

export default Breakline;
