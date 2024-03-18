import { clsx } from 'clsx'; // Importing clsx utility for dynamic class names
import { twMerge } from 'tailwind-merge'; // Importing twMerge utility for Tailwind CSS class merging
import { format } from 'date-fns'; // Importing format function from date-fns for date formatting

/**
 * Combines given class names using Tailwind CSS and clsx.
 * @param {...string} inputs - Class names to combine.
 * @returns {string} - Combined class names.
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs)); // Merging and returning class names
}

/**
 * Prototype function to create chart data object.
 * @param {string[]} labels - Array of labels for the chart.
 * @param {number[]} data - Array of data points for the chart.
 * @returns {Object} - Chart data object.
 */
const chartDataPrototype = (labels, data) => ({
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
});

/**
 * Generates chart data for daily contributions.
 * @param {Object[]} contrCalendar - Contribution calendar data.
 * @param {number} maxDays - Maximum number of days to consider.
 * @returns {Object} - Daily chart data object.
 */
export function getDailyChartData(contrCalendar, maxDays = 30) {
    const { weeks } = contrCalendar;
    const labels = [];
    const dailyData = [];

    const lastDays = weeks
        .flatMap((week) => week.contributionDays)
        .slice(-maxDays);

    lastDays.forEach(({ contributionCount, date }) => {
        date = new Date(date);
        date = date.setDate(date.getDate() + 1); // Adding 1 day to UTC date
        labels.push(format(date, 'MMM d')); // Formatting date and pushing to labels
        dailyData.push(contributionCount); // Pushing contribution count to data
    });

    return chartDataPrototype(labels, dailyData); // Returning chart data
}

/**
 * Generates chart data for weekly contributions.
 * @param {Object[]} contrCalendar - Contribution calendar data.
 * @param {number} maxWeeks - Maximum number of weeks to consider.
 * @returns {Object} - Weekly chart data object.
 */
export function getWeeklyChartData(contrCalendar, maxWeeks = 30) {
    const { weeks } = contrCalendar;
    const displayedWeeks = weeks.slice(maxWeeks);
    const labels = displayedWeeks.map((week) => {
        let date = new Date(week.contributionDays[0].date);
        date = date.setDate(date.getDate() + 1); // Adding 1 day to UTC date
        return format(date, 'MMM d'); // Formatting date and returning
    });

    const weeklyData = displayedWeeks.map(({ contributionDays }) =>
        contributionDays.reduce((acc, day) => acc + day.contributionCount, 0)
    );

    return chartDataPrototype(labels, weeklyData); // Returning chart data
}

/**
 * Generates chart data for monthly contributions.
 * @param {Object[]} contrCalendar - Contribution calendar data.
 * @param {number} maxMonths - Maximum number of months to consider.
 * @returns {Object} - Monthly chart data object.
 */
export function getMonthlyChartData(contrCalendar, maxMonths = 30) {
    const { weeks, months } = contrCalendar;
    const displayedMonths = months.slice(-maxMonths);
    const labels = displayedMonths.map(({ name, year }) => `${name} ${year}`);

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

    const monthlyData = displayedMonths.map(({ name, year }) =>
        weeks
            .filter(({ firstDay }) =>
                firstDay.startsWith(year + '-' + monthNames[name])
            )
            .reduce(
                (acc, { contributionDays }) =>
                    acc +
                    contributionDays.reduce(
                        (acc, day) => acc + day.contributionCount,
                        0
                    ),
                0
            )
    );

    return chartDataPrototype(labels, monthlyData); // Returning chart data
}
