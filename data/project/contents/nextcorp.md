## Overview

Nextcorp is a comprehensive toolkit designed to cater to the diverse needs of businesses and enterprises. Developed mainly using Next.js, Elysia.js, and PostgreSQL, Nextcorp boasts a modern and versatile framework that seamlessly integrates essential pages, ensuring a cohesive user experience.

From showcasing your products and services to engaging with your audience through a dynamic blog page, Nextcorp provides the perfect platform to elevate your online presence. With its sleek design and intuitive navigation, visitors will be effortlessly guided through your site, enhancing their overall experience.

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
- **User Authentication and Authorization**: Provides login and registration functionality for users to access member-only features. 2 types of users: Admin and Regular.
- **Social Media Sharing**: Users can easily share blog posts via social media platforms.
- **Admin Dashboard**: Admins can create, edit, and delete blog posts through a secure dashboard.
- **Dark/Light/System Theme**: Users can switch between dark, light, and system themes for a personalized experience.
- **Message Submissions**: Users can submit messages to the company for inquiries or feedback.
- **Schedule Meeting**: Users can schedule a meeting with the company through a simple form.

## Diagrams

![Use Case Diagram](https://github.com/minhtran241/nextcorp/raw/main/frontend/docs/diagrams/usecase.png)
<figcaption>Use Case Diagram</figcaption>

![High-Level Architecture](https://github.com/minhtran241/nextcorp/raw/main/frontend/docs/diagrams/data-flow-diagram.png)
<figcaption>High-Level Architecture Diagram</figcaption>

![Database ER Diagram](https://github.com/minhtran241/nextcorp/raw/main/frontend/docs/diagrams/nextcorp-erdiagram.png)
<figcaption>Database ER Diagram</figcaption>

## Screenshots

![Light Theme](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/home.png)
<figcaption>Home page in light theme</figcaption>

![Dark Theme](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/home_dark.png)
<figcaption>Home page in dark theme</figcaption>

![Blog Page](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/blog.png)
<figcaption>Blog page</figcaption>

![Single Blog Page](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/single_blog.png)
<figcaption>Single blog post page</figcaption>

![Contact Page](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/contact.png)
<figcaption>Contact page</figcaption>

![Login Page](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/login.png)
<figcaption>Login page</figcaption>

![Register Page](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/register.png)
<figcaption>Register page</figcaption>

![Admin Dashboard](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/admin.png)
<figcaption>Admin dashboard</figcaption>

## System Testing and Code Coverage Report

While Elysia.js is a relatively new framework, it boasts a robust Unit Testing capability when paired with the Bun runtime. Leveraging the Bun runtime, which incorporates a built-in test runner accessible through the [bun:test](https://bun.sh/docs/cli/test) module, developers can easily conduct unit tests akin to Jest.

### Unit Testing

To ensure the reliability and stability of Nextcorp, I meticulously crafted a comprehensive suite of unit tests. These tests cover a spectrum of scenarios that Nextcorp's API might encounter, including various HTTP status codes such as *200, 401, 404, 409, and 500*. Below, you'll find details regarding the test endpoint, descriptions, and associated status codes.

![Unit Testing](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/unittest.png)
<figcaption>Unit and API Testing Report</figcaption>

### Code Coverage Report

Bun's test runner supports [built-in code coverage reporting](https://bun.sh/guides/test/coverage). This makes it easy to see how much of the codebase is covered by tests and find areas not currently well-tested. I write the *bunfig.toml* file to enable this feature. This will print out the coverage reporting for me as below.

![Code Coverage Report](https://github.com/minhtran241/nextcorp/raw/main/frontend/public/screenshots/code_coverage.png)
<figcaption>Code Coverage Report</figcaption>
