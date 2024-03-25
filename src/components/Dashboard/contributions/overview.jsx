'use client';

import { animate } from 'framer-motion';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

const Overview = ({ data }) => {
    const totalContributions = data?.totalContributions || 0;
    const weeks = data?.weeks || [];

    const totalThisWeekContribution =
        weeks[weeks.length - 1]?.contributionDays
            ?.map((item) => item.contributionCount)
            ?.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
            ) || 0;
    const totalContributionList = weeks
        .map((week) =>
            week.contributionDays.map(
                (contributionDay) => contributionDay.contributionCount
            )
        )
        .flat();

    const bestContribution = Math.max(...totalContributionList) || 0;
    const averageContribution =
        totalContributions / totalContributionList.length;

    return (
        <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
            <OverviewItem label="Total" value={totalContributions} />
            <OverviewItem label="This Week" value={totalThisWeekContribution} />
            <OverviewItem label="Best Day" value={bestContribution} />
            <OverviewItem
                label="Average"
                value={averageContribution}
                unit="/ day"
            />
        </div>
    );
};

const OverviewItem = ({ label, value, unit = '' }) => (
    <Card className="flex flex-col bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <span className="text-sm dark:text-gray-400">{label}</span>
        <div>
            <AnimateCounter
                className="text-xl font-medium text-green-600 lg:text-2xl"
                total={value}
            />
            {unit && (
                <span className="text-sm dark:text-gray-400"> {unit}</span>
            )}
        </div>
    </Card>
);

const AnimateCounter = ({ total, ...rest }) => {
    const countRef = useRef(null);
    const initialCount = 0;

    useEffect(() => {
        const count = countRef.current;

        const controls = animate(initialCount, total, {
            duration: 1,
            onUpdate: (value) => {
                if (count) {
                    count.textContent = Math.floor(value).toString();
                }
            },
        });

        return () => controls.stop();
    }, [total]);

    return <span {...rest} ref={countRef} />;
};

const Card = ({ children, className = '', ...others }) => {
    return (
        <StyledCard
            className={`rounded-xl bg-white shadow-sm transition-all duration-300 ${className} `}
            {...others}
        >
            {children}
        </StyledCard>
    );
};

const StyledCard = styled.div`
    background-color: hsla(0, 0%, 100%, 0.05);
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, 0.05);
`;

export default Overview;
