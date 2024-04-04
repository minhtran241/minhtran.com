import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const formatDate = (date, type = 'MMMM dd, yyyy') => {
    if (!date) {
        return '';
    }

    const formattedDate = format(utcToZonedTime(parseISO(date)), type);
    return formattedDate;
};

export const sumTotalFromArray = (data, key) => {
    return (
        data.reduce(
            (previousValue, currentValue) => previousValue + currentValue[key],
            0
        ) ?? 0
    );
};

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

export const getImageBuffer = async (imageUrl) => {
    try {
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
        });
        return Buffer.from(response.data, 'binary');
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
};

export const getUsername = (domain, link) => {
    const domainCharAt = link.indexOf(domain);
    const usernameCharAt = domainCharAt + domain.length;
    // Return from this index to the end of the string
    return link.substring(usernameCharAt, link.length);
};
