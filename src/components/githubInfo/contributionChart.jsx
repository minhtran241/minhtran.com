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
import { format } from 'date-fns';
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

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const ContributionChart = ({ contributionCollection }) => {
    const { theme } = useTheme();
    const { totalContributions, weeks, months } =
        contributionCollection.contributionCalendar;
    const [selectedTimeRange, setSelectedTimeRange] = useState('weekly');
    const [chartData, setChartData] = useState(null);
    const weeklyChartData = getWeeklyChartData(weeks);
    const monthlyChartData = getMonthlyChartData(weeks, months);

    useEffect(() => {
        if (selectedTimeRange === 'weekly') {
            setChartData(weeklyChartData);
        } else {
            setChartData(monthlyChartData);
            console.log('okk');
        }
    }, [selectedTimeRange]);

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

    return (
        <div className="flex flex-col gap-4 bg-white  p-4 rounded-lg shadow-md dark:bg-black dark:shadow-dark-lg">
            <div className="flex flex-wrap justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {selectedTimeRange === 'weekly'
                            ? 'Weekly Contributions'
                            : 'Monthly Contributions'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Total Contributions: {totalContributions}
                    </p>
                </div>
                <Select
                    onValueChange={(e) => {
                        setSelectedTimeRange(e);
                    }}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Time Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Time Range</SelectLabel>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div style={{ height: '300px', width: '100%' }}>
                {chartData && (
                    <Line options={options} data={chartData} id="myChart" />
                )}
            </div>
        </div>
    );
};

function getWeeklyChartData(weeks) {
    const labels = weeks.map((week) => {
        const date = new Date(week.contributionDays[0].date);
        return format(date, 'MMM d'); // Using date-fns for consistent date formatting
    });

    const weeklyData = weeks.map((week) =>
        week.contributionDays.reduce(
            (acc, day) => acc + day.contributionCount,
            0
        )
    );

    return {
        labels,
        datasets: [
            {
                label: 'Contributions',
                data: weeklyData,
                fill: false,
                borderColor: 'rgb(0, 51, 160)',
                backgroundColor: 'rgb(0, 51, 160)',
                borderWidth: 2,
                pointRadius: 4,
            },
        ],
    };
}

function getMonthlyChartData(weeks, months) {
    const labels = months.map((month) => `${month.name} ${month.year}`);

    // weeks contains contributions for other months as well, so we need to filter. month.name is string, so we need to convert it to number
    const monthNames = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12',
    };

    const monthlyData = months.map((month) =>
        weeks
            .filter((week) =>
                week.firstDay.startsWith(
                    month.year + '-' + monthNames[month.name]
                )
            )
            .reduce(
                (acc, week) =>
                    acc +
                    week.contributionDays.reduce(
                        (acc, day) => acc + day.contributionCount,
                        0
                    ),
                0
            )
    );

    return {
        labels,
        datasets: [
            {
                label: 'Contributions',
                data: monthlyData,
                fill: false,
                borderColor: 'rgb(0, 51, 160)',
                backgroundColor: 'rgb(0, 51, 160)',
                borderWidth: 2,
                pointRadius: 4,
            },
        ],
    };
}

export default ContributionChart;
