import { Database, Layers, LayoutTemplate, HardDrive } from 'lucide-react';

const Milestone = ({ milestone, right }) => {
    const year = new Date(milestone.date).getFullYear();
    const month = new Date(milestone.date).toLocaleString('default', {
        month: 'short',
    });
    const paragraphs = milestone.description
        .split('.')
        .filter((p) => p.length > 1);
    const icons = {
        Database: <Database className="text-white" />,
        Layers: <Layers className="text-white" />,
        LayoutTemplate: <LayoutTemplate className="text-white" />,
        HardDrive: <HardDrive className="text-white" />,
    };
    return right ? (
        <div className="w-full m-0">
            <div className="flex flex-col items-center w-full">
                <div className="flex items-center justify-end w-full mx-0">
                    <div className="w-full lg:w-[50%] lg:pl-8">
                        <div className="relative flex-1 mb-10 lg:mb-8  shadow-lg rounded border border-gray-200 dark:border-gray-700 hover:shadow-2xl w-full">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative z-20">
                                <div className="flex flex-wrap items-center">
                                    <div className="p-4 md:w-1/6">
                                        <p className="text-2xl font-bold  text-bold  text-[#0033A0] dark:text-white">
                                            {month}
                                        </p>
                                        <span className="text-lg text-[#0033A0] dark:text-white">
                                            {year}
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 pr-4 border-l">
                                        <p className="text-xl font-bold text-[#0033A0] dark:text-blue-600">
                                            {milestone.title}
                                        </p>
                                        <p className=" mb-2 italic text-gray-600 dark:text-gray-400">
                                            {milestone.job_title}
                                        </p>
                                        <ul className="list-disc marker:text-[#0033A0] dark:marker:text-blue-600">
                                            {paragraphs.map(
                                                (paragraph, index) => (
                                                    <li
                                                        key={index}
                                                        className="mb-2 ml-5"
                                                    >
                                                        {paragraph}.
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-[#0033A0] dark:bg-blue-600 rounded-full left-1/2 lg:translate-y-[3px]">
                    {icons[milestone.icon]}
                </div>
            </div>
        </div>
    ) : (
        // min width 600px
        <div className="w-full m-0">
            <div className="flex flex-col items-center w-full">
                <div className="flex items-center justify-start w-full mx-0">
                    <div className="w-full lg:w-[50%] lg:pr-8">
                        <div className="relative flex-1 mb-10 rounded shadow-lg lg:mb-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                                <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white dark:bg-black shadow lg:block border border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="relative z-20 ">
                                <div className="flex flex-wrap items-center">
                                    <div className="p-4 md:w-1/6">
                                        <p className="text-2xl font-bold  text-bold text-[#0033A0] dark:text-white ">
                                            {month}
                                        </p>
                                        <span className="text-lg text-[#0033A0] dark:text-white">
                                            {year}
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 pr-4 border-l">
                                        <p className="text-xl font-bold text-[#0033A0] dark:text-blue-600">
                                            {milestone.title}
                                        </p>
                                        <p className=" mb-2 italic text-gray-600 dark:text-gray-400">
                                            {milestone.job_title}
                                        </p>
                                        <ul className="list-disc marker:text-[#0033A0] dark:marker:text-blue-600">
                                            {paragraphs.map(
                                                (paragraph, index) => (
                                                    <li
                                                        key={index}
                                                        className="mb-2 ml-5"
                                                    >
                                                        {paragraph}.
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-[#0033A0] dark:bg-blue-600 rounded-full left-1/2 lg:translate-y-[4px]">
                    {icons[milestone.icon]}
                </div>
            </div>
        </div>
    );
};

export default Milestone;
