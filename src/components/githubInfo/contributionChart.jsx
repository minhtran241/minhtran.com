'use client';

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
    const { totalContributions, weeks } =
        contributionCollection.contributionCalendar;
    const contributionWeeks = weeks.slice(weeks.length - 22, weeks.length);
    const labels = contributionWeeks.map((week) => {
        const date = new Date(week.contributionDays[0].date);
        return format(date, 'MMM d'); // Using date-fns for consistent date formatting
    });

    const data = contributionWeeks.map((week) =>
        week.contributionDays.reduce(
            (acc, day) => acc + day.contributionCount,
            0
        )
    );

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Contributions',
                data,
                fill: false,
                borderColor: 'rgb(0, 51, 160)',
                backgroundColor: 'rgb(0, 51, 160)',
                borderWidth: 2,
                pointRadius: 4,
            },
        ],
    };

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
                suggestedMax: Math.max(...data) + 5, // Increase suggested max
            },
        },
    };

    // Check for dark mode and adjust colors accordingly
    const isDarkMode = theme === 'dark';
    if (isDarkMode) {
        chartData.datasets[0].borderColor = 'rgba(0, 51, 160, 1)'; // Adjust line color for dark mode
        chartData.datasets[0].backgroundColor = 'rgba(0, 51, 160, 1)'; // Adjust point color for dark mode
    }

    return (
        <div className="flex flex-col gap-4 bg-white  p-4 rounded-lg shadow-md dark:bg-black dark:shadow-dark-lg">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Weekly Contributions
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Total Contributions: {totalContributions}
                </p>
            </div>
            <div style={{ height: '300px', width: '100%' }}>
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default ContributionChart;
