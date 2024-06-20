import { gql } from '@apollo/client';
import { GITHUB_USERNAME } from '@/common/constants/userBasic';
import client from './apollo-client';

export const getGitHubUserInfo = async (
    username = GITHUB_USERNAME,
    reposNum = 6
) => {
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

export const getRepoInfo = async (repoName) => {
    try {
        const res = await client.query({
            query: gql`
                query GetRepoInfo($repoName: String!) {
                    repository(name: $repoName) {
                        name
                        description
                        url
                        stargazerCount
                        forkCount
                        watchers {
                            totalCount
                        }
                        issues {
                            totalCount
                        }
                        pullRequests {
                            totalCount
                        }
                        languages(first: 5) {
                            nodes {
                                name
                                color
                            }
                        }
                        licenseInfo {
                            name
                        }
                        updatedAt
                        pushedAt
                        createdAt
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
                repoName,
            },
        });

        // return star, fork, watchers, issues, pull requests, languages, license, updated at, pushed at, created at
        return {
            repo: res.data.repository,
            rateLimit: res.data.rateLimit,
        };
    } catch (error) {
        console.error('Error fetching repo info:', error);
        throw new Error('Failed to fetch repo info');
    }
};
