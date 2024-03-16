const GHInfoCard = ({ detail }) => {
    return (
        <div className="border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out rounded p-4 min-h-[150px] bg-white dark:bg-black flex flex-row items-center justify-center gap-4">
            <div
                className={`rounded-full p-4 bg-[#0033A0] dark:bg-blue-600 text-white`}
            >
                {detail.icon}
            </div>
            <div>
                <h1 className="text-2xl font-semibold">{detail.value}</h1>
                <p className="text-lg">{detail.title}</p>
            </div>
        </div>
    );
};

export default GHInfoCard;
