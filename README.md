<div align="center">
  <h1>minhtran.com</h1>
  <p>🔥 Personal website was built originally from scratch using Next.js, Tailwind CSS, shadcn/ui, daisyUI, SWR, Chart.js, Apollo, WakaTime API, GitHub API, and more. </p>

[![GitHub Repo stars](https://img.shields.io/github/stars/minhtran241/minhtran.com)](https://github.com/minhtran241/minhtran.com/stargazers)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

</div>
<br />

Light Mode | Dark Mode
--- | ---
![Light Mode](https://github.com/minhtran241/minhtran.com/blob/main/public/readme/home-light.png) | ![Dark Mode](https://github.com/minhtran241/minhtran.com/blob/main/public/readme/home-dark.png)

## Introduction

This website was carefully crafted from the ground using Next.js and other helpful tools, starting in March 2024.

I'm constantly making improvements to add more features and content. This website is where I share what I've learned and offer insights to others.

Feel free to use this website as a reference, for inspiration, or as a template, following the provided license. You can access the source code to customize it to your needs.

If you find this website helpful, please consider leaving a rating. 😎👍🏻

If you have any questions, suggestions, or anything else, don't hesitate to reach out to me! 🧑‍💻
<br /><br />

## Tech Stack

This website is built using these technologies:

- ◼️ Next.js 14.1.0
- 💠 Tailwind CSS 3
- ♦ shadcn/ui
- 🌺 daisyUI
- ☀️ Apollo Client
- ←→ Axios
- 〰️ SWR
- ➰ Framer Motion
- 💢 Lucide Icons
- 💢 React Icons
- 📊 Chart.js
- 🎥 WakaTime API
- 👨🏻‍💻 GitHub API

<br />

## Features

On this website, several features will continue to be updated and added in the future.

- ### 🤖 ChatGPT AI (Unavailable)

You can access this feature by opening the command palette [cmd+k], and then typing whatever you want to search/ask for. (Currently not available, but you can configure it on your machine with your own OpenAI API key)

- ### 🎧 Spotify Status (Unavailable)

Displays song information being played on Spotify in real-time using the Spotify API and SWR.

- ### 🕗 WakaTime Statistics

Data is retrieved using the WakaTime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.

- ### 📝 Blogs

The markdown files are server-side rendered using the [React Markdown](https://github.com/remarkjs/react-markdown) and the [remark](https://github.com/remarkjs/react-markdown) library. The markdown files are stored in the `data/blog` directory. The blog posts are displayed on the blog page and the blog details page.

- ### 🗳 Projects

As a developer, I have a lot of projects that I have worked on. This section displays the projects I have worked on. The markdown files are stored in the `data/projects` directory and rendered server-side.
<br /><br />

## Performance

- ### PageSpeed Insights

- Desktop: [https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fminhtran.com&tab=desktop](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fminhtran.com&tab=desktop)
  
![image](https://github.com/minhtran241/minhtran.com/blob/main/public/contact/about-this-website/lh-rp-desktop.png)

- Mobile: [https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fminhtran.com&tab=mobile](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fminhtran.com&tab=mobile)

![image](https://github.com/minhtran241/minhtran.com/blob/main/public/contact/about-this-website/lh-rp-mobile.png)

<br /><br />

## Getting Started

If you are interested in running this project on your local machine, you can do so in just 3 easy steps below. Additionally, remember to update the `.env.example` file to `.env` and replace the variables with your own in the `.env` file.

### 1. Clone this template using one of the three ways

1. Clone using git

   ```bash
   git clone https://github.com/minhtran241/minhtran.com.git
   ```

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/minhtran241/minhtran.com project-name
   ```

3. Using `degit`

   ```bash
   npx degit minhtran241/minhtran.com YOUR_APP_NAME
   ```

4. Deploy to Vercel or Netlify, etc

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/minhtran241/minhtran.com)
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/minhtran241/minhtran.com)

### 2. Install dependencies

It is encouraged to use **npm** to install the dependencies.

```bash
npm install
```

### 3. Config constants

This repository uses several constants. Please check the `src/common/constants` directory and update the values with your own. For example, the `userBasicInfo.js` file contains the basic information about the user.

```javascript
export const userBasicInfo = {
    currentJob: CURRENT_JOB,
    currentOrg: CURRENT_ORG,
    currentOrgLink: CURRENT_ORG_LINK,
    currentRole: CURRENT_ROLE,
    githubUsername: GITHUB_USERNAME,
    githubLink: GITHUB_LINK,
    linkedinUser: LINKEDIN_USER,
    linkedinLink: LINKEDIN_LINK,
    facebookLink: FACEBOOK_LINK,
    instagramLink: INSTAGRAM_LINK,
    twitterLink: TWITTER_LINK,
    email: EMAIL,
};
```

### 4. Config .env

This repository uses several environment variables. Please copy `.env.example` into `.env`, then fill in the values with your own. For third-party environment variables such as Spotify, WakaTime, GitHub, and others, please refer to the official documentation provided by each provider.

```bash
NEXT_PUBLIC_BASE_URL=

# Github
GITHUB_TOKEN=
GITHUB_USERNAME=
GITHUB_API_URL=

# WakaTime
WAKATIME_API_KEY=

# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

### 5. Run the development server

You can start the server using this command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can edit the page by modifying `src/app/page.jsx`. The page auto-updates as you edit the file.
<br /><br />

## License

It is licensed under the [GPL-3.0 license](https://github.com/minhtran241/minhtran.com/blob/master/LICENSE).
