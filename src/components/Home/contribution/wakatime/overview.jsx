const { formatDate } = require('@/common/helpers');

const Overview = ({ data }) => {
    const dailyTotal = data?.human_readable_total || 'N/A';
    const dailyAverage = data?.human_readable_daily_average || 'N/A';
    const bestDayText = data?.best_day?.text || 'N/A';
    const bestDayDate = data?.best_day?.date;
    const allTimeSinceToday = data?.all_time_since_today?.text || 'N/A';
    const startDate = data?.start_date ? formatDate(data.start_date) : '';
    const endDate = data?.end_date ? formatDate(data.end_date) : '';
    const bestDay = bestDayDate
        ? `${formatDate(bestDayDate)} (${bestDayText})`
        : 'N/A';

    return (
        <div className="mb-1 grid gap-3 py-2 md:grid-cols-3">
            <OverviewItem label="Start Date" value={startDate} />
            <OverviewItem label="End Date" value={endDate} />
            <OverviewItem label="Daily Coding Average" value={dailyAverage} />
            <OverviewItem label="This Week Coding Time" value={dailyTotal} />
            <OverviewItem label="Best Day Coding Time" value={bestDay} />
            <OverviewItem
                label="All Time Since Today"
                value={allTimeSinceToday}
            />
        </div>
    );
};

const OverviewItem = ({ label, value }) => (
    <div className="flex flex-col bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
            {label}
        </span>
        <span className="text-lg font-semibold">{value}</span>
    </div>
);

export default Overview;
