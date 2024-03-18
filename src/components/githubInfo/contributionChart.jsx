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
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    getDailyChartData,
    getMonthlyChartData,
    getWeeklyChartData,
} from '@/lib/utils';
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
    const { totalContributions, weeks, months } =
        contributionCollection.contributionCalendar;
    const [selectedTimeRange, setSelectedTimeRange] =
        useState(DEFAULT_TIME_RANGE);
    const [chartData, setChartData] = useState(null);

    // Effect to update chart data when selected time range changes
    useEffect(() => {
        if (selectedTimeRange === 'monthly') {
            setChartData(GET_CHART_DATA[selectedTimeRange](weeks, months));
        } else {
            setChartData(GET_CHART_DATA[selectedTimeRange](weeks));
        }
    }, [selectedTimeRange]);

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
        <div className="flex flex-col gap-4 bg-white  p-4 rounded-lg shadow-md dark:bg-black dark:shadow-dark-lg">
            {/* Time range selector */}
            <div className="flex flex-wrap justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {selectedTimeRange.charAt(0).toUpperCase() +
                            selectedTimeRange.slice(1)}{' '}
                        Contributions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Total Contributions: {totalContributions}
                    </p>
                </div>
                <Select
                    onValueChange={(e) => {
                        setSelectedTimeRange(e);
                    }}
                    defaultValue={selectedTimeRange}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Time Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Time Range</SelectLabel>
                            {Object.keys(GET_CHART_DATA).map((range, index) => (
                                <SelectItem key={index} value={range}>
                                    {range.charAt(0).toUpperCase() +
                                        range.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
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
