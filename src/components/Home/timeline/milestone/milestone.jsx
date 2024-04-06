import {
    Database,
    Layers,
    LayoutTemplate,
    HardDrive,
    Code2,
} from 'lucide-react';

const Milestone = ({ milestone, right }) => {
    const year = new Date(milestone.date).getFullYear();
    const month = new Date(milestone.date).toLocaleString('default', {
        month: 'short',
    });
    const paragraphs = milestone.description
        .split('.')
        .filter((p) => p.length > 1);
    const icons = {
        Database: <Database className="text-white h-4 w-4" />,
        Layers: <Layers className="text-white h-4 w-4" />,
        LayoutTemplate: <LayoutTemplate className="text-white h-4 w-4" />,
        HardDrive: <HardDrive className="text-white h-4 w-4" />,
        Code2: <Code2 className="text-white h-4 w-4" />,
    };
    return right ? (
        <div className="w-full m-0">
            <div className="flex flex-col items-center w-full">
                <div className="flex items-center justify-end w-full mx-0">
                    <div className="w-full lg:w-[50%] lg:pl-8">
                        <div className="relative flex-1 mb-10 lg:mb-8  shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 w-full">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                <div className="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 lg:block drop-shadow-lg"></div>
                            </div>
                            <div className="relative">
                                <div className="flex flex-wrap items-center">
                                    <div className="p-4 md:w-1/6">
                                        <p className="text-xl font-bold  text-bold  text-[#0033A0] dark:text-white">
                                            {month}
                                        </p>
                                        <span className="text-medium text-[#0033A0] dark:text-white">
                                            {year}
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 pr-4 border-l">
                                        <p className="font-bold text-[#0033A0] dark:text-blue-600 sm:text-lg md:text-xl lg:text-lg text-lg">
                                            {milestone.title}
                                        </p>
                                        <p className=" mb-2 text-gray-600 dark:text-gray-400 text-base">
                                            {milestone.job_title}
                                        </p>
                                        <ul className="list-disc marker:text-[#0033A0] dark:marker:text-blue-600 text-base">
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
                <div className="absolute flex items-center justify-center w-7 h-7 transform -translate-x-1/2 -translate-y-4 bg-[#0033A0] dark:bg-blue-600 rounded-full left-1/2 lg:translate-y-[4px]">
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
                        <div className="relative flex-1 mb-10 rounded-lg shadow-lg lg:mb-8 border border-gray-200 dark:border-gray-700">
                            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                                <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white dark:bg-black shadow lg:block border border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="relative">
                                <div className="flex flex-wrap items-center">
                                    <div className="p-4 md:w-1/6">
                                        <p className="text-xl font-bold  text-bold text-[#0033A0] dark:text-white ">
                                            {month}
                                        </p>
                                        <span className="text-medium text-[#0033A0] dark:text-white">
                                            {year}
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4 pr-4 border-l">
                                        <p className="font-bold text-[#0033A0] dark:text-blue-600  sm:text-lg md:text-xl lg:text-lg text-lg">
                                            {milestone.title}
                                        </p>
                                        <p className="mb-2 text-gray-600 dark:text-gray-400 text-base">
                                            {milestone.job_title}
                                        </p>
                                        <ul className="list-disc marker:text-[#0033A0] dark:marker:text-blue-600 text-base">
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
                <div className="absolute flex items-center justify-center w-7 h-7 transform -translate-x-1/2 -translate-y-4 bg-[#0033A0] dark:bg-blue-600 rounded-full left-1/2 lg:translate-y-[4px]">
                    {icons[milestone.icon]}
                </div>
            </div>
        </div>
    );
};

export default Milestone;
