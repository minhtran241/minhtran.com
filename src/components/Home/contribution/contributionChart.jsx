'use client';

import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { useTheme } from 'next-themes';
import {
    getDailyChartData,
    getMonthlyChartData,
    getWeeklyChartData,
} from '@/common/helpers';
import Loading from '@/app/loading';

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

// Constants
const GET_CHART_DATA = {
    daily: getDailyChartData,
    weekly: getWeeklyChartData,
    monthly: getMonthlyChartData,
};
const DEFAULT_TIME_RANGE = Object.keys(GET_CHART_DATA)[0];

/**
 * ContributionChart component renders a line chart displaying user contributions over time.
 * @param {Object} contributionCollection - Collection of user contributions.
 */
const ContributionChart = ({ contributionCollection }) => {
    // State variables
    const { theme } = useTheme();
    // { totalContributions, weeks, months }
    const contrCalendar = contributionCollection.contributionCalendar;
    const [selectedTimeRange, setSelectedTimeRange] =
        useState(DEFAULT_TIME_RANGE);
    const [chartData, setChartData] = useState(null);

    // Reverse the weeks and months arrays to display the most recent data first
    // weeks.reverse();

    // Effect to update chart data when selected time range changes
    useEffect(
        () => setChartData(GET_CHART_DATA[selectedTimeRange](contrCalendar)),
        [selectedTimeRange]
    );

    // Chart options
    const options = {
        maintainAspectRatio: false, // Allow resizing to change chart height
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
                align: 'end',
                position: 'bottom',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (context) {
                        return 'Contributions: ' + context.raw;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 0,
                    autoSkipPadding: 20,
                },
            },
            y: {
                beginAtZero: true,
                suggestedMax: chartData
                    ? Math.max(...chartData.datasets[0].data) + 5
                    : 10, // Increase suggested max
            },
        },
    };

    // Check for dark mode and adjust colors accordingly
    const isDarkMode = theme === 'dark';
    if (isDarkMode && chartData) {
        chartData.datasets[0].borderColor = 'rgba(0, 51, 160, 1)'; // Adjust line color for dark mode
        chartData.datasets[0].backgroundColor = 'rgba(0, 51, 160, 1)'; // Adjust point color for dark mode
    }

    // Render the ContributionChart component
    return (
        <div className="flex flex-col gap-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-box p-4">
            {/* Time range selector */}
            <div className="flex flex-wrap justify-between gap-4">
                <div className="flex flex-col">
                    <h2 className="text-gray-800 dark:text-gray-100 font-semibold lg:text-lg text-base">
                        {selectedTimeRange.charAt(0).toUpperCase() +
                            selectedTimeRange.slice(1)}{' '}
                        Contributions
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contrCalendar.totalContributions} Total Contributions
                    </p>
                </div>
                <select
                    className="select select-bordered max-w-xs bg-white dark:bg-gray-900 dark:text-white"
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                    defaultValue={selectedTimeRange}
                >
                    {Object.keys(GET_CHART_DATA).map((range, index) => (
                        <option key={index} value={range}>
                            {range.charAt(0).toUpperCase() + range.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            {/* Chart */}
            <div style={{ height: '300px', width: '100%' }}>
                {chartData ? (
                    <Line options={options} data={chartData} id="myChart" />
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default ContributionChart;
