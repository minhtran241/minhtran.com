## Crafting User Experiences

### Design Philosophy

Using the versatile tool [Figma](https://www.figma.com/), I sculpted a user-friendly interface that prioritizes simplicity and clarity. By employing ample white space and a muted color palette, I aimed to deliver an experience that's both visually soothing and effortlessly navigable. Upholding the principles of inclusively, I ensured adherence to top-notch web accessibility standards. Leveraging [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com), and [DaisyUI](https://daisyui.com/), I brought my design vision to life, complemented by icons from [Lucide](https://lucide.dev).

### Development Mastery

Harnessing the power of **Next.js 14**, I integrated cutting-edge features to enhance performance and functionality:

- [Automatic Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Server Action](https://nextjs.org/docs/basic-features/server-action)
- [Server Components](https://nextjs.org/docs/advanced-features/server-components)
- [File System Routing](https://nextjs.org/docs/basic-features/pages)

## Markdown Rendering

All content is meticulously crafted in markdown and seamlessly rendered during the build process. Employing [react-markdown](https://github.com/remarkjs/react-markdown) and [remark-rehype](https://github.com/remarkjs/remark-rehype), I ensure a smooth conversion of markdown to HTML. Styles are meticulously applied using [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography) and [prose](https://tailwindcss.com/docs/prose).

## GitHub Contributions Showcase

### GitHub API Integration

To showcase my open-source contributions, I integrated the [GitHub API](https://docs.github.com/en/rest) to dynamically fetch and display my GitHub information and repositories by using [GitHub GraphQL API](https://docs.github.com/en/graphql) and [Apollo Client](https://www.apollographql.com/docs/react/). This ensures that my GitHub contributions are always up-to-date and accurately reflected on my website.

### Generating GitHub Contributions Graph using Chart.js

To display my GitHub contributions graph, I utilized [Chart.js](https://www.chartjs.org/) to dynamically generate the graph based on my GitHub contributions data. The data is fetched from the GitHub API and then processed to generate the graph.

## Personal Dashboard

I created a personal dashboard to display my GitHub contributions, coding activity, and other relevant information. This dashboard is designed to provide a comprehensive overview of my coding activity and contributions. The [framer-motion](https://www.framer.com/motion/) library is used to create smooth animations and transitions for a more engaging user experience.

### WakaTime Integration

To showcase my coding activity, I integrated the [WakaTime API](https://wakatime.com/developers) to dynamically fetch and display my coding activity by using [swr](https://swr.vercel.app/). This ensures that my coding activity is always up-to-date and accurately reflected on my website.

### GitHub Contributions Calendar

I mimicked the GitHub contributions calendar to display my daily coding activity. The data is fetched from the GitHub API and then processed to generate the dynamic and interactive calendar.

## Streamlined Infrastructure

Ditching the complexities of CMS, API, and databases, this iteration of the website focuses on efficiency and simplicity. Content is statically generated at build time, minimizing overheads. Previously, I utilized [ElysiaJS](https://elysiajs.com/) and [PostgreSQL](https://www.postgresql.org/), but transitioned to a static site to streamline operations and costs. Hosting is graciously provided by [Vercel](https://vercel.com/), ensuring seamless deployment. Rest assured, the source code remains securely private.

## Seamless Deployment

Powered by [Vercel](https://vercel.com/), this website enjoys swift and hassle-free deployment. Leveraging the [Vercel CLI](https://vercel.com/download), updates and enhancements are effortlessly pushed live, ensuring a seamless user experience.

## Speed Insights

In building this website, I really paid attention to all aspects related to performance and SEO. Therefore, I'll display the website performance report on this page, and it will always be updated periodically. The performance report is generated using [Lighthouse](https://developers.google.com/web/tools/lighthouse) and [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights).

![Lighthouse Report (Desktop)](/about-this-website/lh-rp-desktop.png)
<figcaption align="center">Lighthouse Report (Desktop)</figcaption>

![Lighthouse Report (Mobile)](/about-this-website/lh-rp-mobile.png)
<figcaption align="center">Lighthouse Report (Mobile)</figcaption>

---

<p align="center">
  Best regards, <strong>Minh Tran</strong>
</p>
