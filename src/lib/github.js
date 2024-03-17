import { gql } from '@apollo/client';
import client from './apollo-client';

export const getGitHubUserInfo = async (username, reposNum) => {
    try {
        const res = await client.query({
            query: gql`
                query GetGitHubUserInfo($username: String!, $reposNum: Int) {
                    user(login: $username) {
                        name
                        bio
                        company
                        location
                        websiteUrl
                        avatarUrl
                        repositories(
                            first: $reposNum
                            privacy: PUBLIC
                            isFork: false
                            orderBy: { field: PUSHED_AT, direction: DESC }
                        ) {
                            totalCount
                            nodes {
                                name
                                url
                            }
                        }
                        followers {
                            totalCount
                        }
                        following {
                            totalCount
                        }
                        gists {
                            totalCount
                        }
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        contributionCount
                                        date
                                    }
                                    firstDay
                                }
                                months {
                                    name
                                    year
                                    totalWeeks
                                    firstDay
                                }
                            }
                        }
                    }
                    rateLimit {
                        limit
                        cost
                        remaining
                        resetAt
                    }
                }
            `,
            variables: {
                username,
                reposNum,
            },
        });

        return {
            user: res.data.user,
            rateLimit: res.data.rateLimit,
        };
    } catch (error) {
        console.error('Error fetching GitHub user info:', error);
        throw new Error('Failed to fetch GitHub user info');
    }
};
