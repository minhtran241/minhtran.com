import { gql } from '@apollo/client';
import client from './apollo-client';
import { NextResponse } from 'next/server';

export function getQSParamFromURL(key, url) {
    if (!url) return '';
    const search = new URL(url).search;
    const urlParams = new URLSearchParams(search);
    return urlParams.get(key);
}

export const GET = async (req) => {
    try {
        const username = getQSParamFromURL('username', req.url);
        const reposNum = getQSParamFromURL('reposNum', req.url)
            ? parseInt(getQSParamFromURL('reposNum', req.url))
            : 6;

        const queryResult = await client.query({
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
                reposNum: reposNum,
            },
        });

        return NextResponse.json({
            user: queryResult.data.user,
            rateLimit: queryResult.data.rateLimit,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(error);
    }
};
