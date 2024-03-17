import { gql } from '@apollo/client';
import client from './apollo-client';

export const getGitHubUserInfo = async (username) => {
    try {
        const res = await client.query({
            query: gql`
                query GetGitHubUserInfo($username: String!) {
                    user(login: $username) {
                        name
                        bio
                        company
                        location
                        websiteUrl
                        avatarUrl
                        repositories(last: 8) {
                            totalCount
                            nodes {
                                name
                                url
                            }
                        }
                        followers(last: 5) {
                            totalCount
                        }
                        following(last: 5) {
                            totalCount
                        }
                        gists(last: 5) {
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
