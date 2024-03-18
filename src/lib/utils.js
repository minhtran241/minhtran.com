import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

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

export function getDailyChartData(weeks, maxDays = 30) {
    const labels = [];
    const dailyData = [];

    const lastDays = weeks
        .flatMap((week) => week.contributionDays)
        .slice(-maxDays);

    lastDays.forEach((day) => {
        const date = new Date(day.date);
        labels.push(format(date, 'MMM d'));
        dailyData.push(day.contributionCount);
    });

    return chartDataPrototype(labels, dailyData);
}

export function getWeeklyChartData(weeks, maxWeeks = 30) {
    weeks = weeks.slice(-maxWeeks);
    const labels = weeks.map((week) => {
        const date = new Date(week.contributionDays[0].date);
        return format(date, 'MMM d');
    });

    const weeklyData = weeks.map((week) =>
        week.contributionDays.reduce(
            (acc, day) => acc + day.contributionCount,
            0
        )
    );

    return chartDataPrototype(labels, weeklyData);
}

export function getMonthlyChartData(weeks, months, maxMonths = 30) {
    months = months.slice(-maxMonths);
    const labels = months.map((month) => `${month.name} ${month.year}`);

    // Weeks contains contributions for other months as well, so we need to filter. month.name is string, so we need to convert it to number
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

    return chartDataPrototype(labels, monthlyData);
}
