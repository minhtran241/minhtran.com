## Routes

1. `/`: Home page showcasing company information and featured products/services.
2. `/blog`: Displays a list of blog posts.
3. `/login`: Login page for users to authenticate.
4. `/register`: Registration page for new users.
5. `/blog/slug-of-blog`: Displays a specific blog post identified by its slug.
6. `/refresh`: Endpoint to refresh JWT token.
7. `/revoke`: Endpoint to revoke the refresh token.

## Features

- **Company Showcase**: Nextcorp highlights company information and featured products/services on the home page.
- **Blog**: Users can read and share blog posts on various topics related to the company's domain.
- **User Authentication**: Provides login and registration functionality for users to access member-only features.
- **Social Media Sharing**: Users can easily share blog posts via social media platforms.

## Technologies Used

- **Frontend**: Next.js
- **API**: ElysiaJS
- **Database**: PostgreSQL

## Data Flow

![Data Flow](https://github.com/minhtran241/nextcorp/raw/main/frontend/docs/diagrams/data-flow-diagram.png)
<figcaption>Data Flow Diagram</figcaption>

## Authentication

- **Refresh Token**: `/refresh`: Endpoint to refresh JWT token.
- **Revoke Token**: `/revoke`: Endpoint to revoke the refresh token.

## Creator

Created by [Minh Tran](https://minhtran-nine.vercel.app)
