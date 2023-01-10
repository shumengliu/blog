# Tech Stack

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS 3.0](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)

This site is deployed to [Netlify](https://www.netlify.com/).

# Recommend reading

Learn how to build a site like this in my post
[to be published](TODO)

Learn more about how I decided to use Next.js in my post
[to be published](TODO)

# To-do list

- Enable comments
- Enable RSS subscription
- Send confirmation email upon subscription
- Manage the links in this site better
- Add i18n support

# How to run the server locally

### Prerequisite

Make sure you have Node.js with appropriate version (As of Jan 2023, at least Node.js 12.0) installed.

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Watching

Visit http://localhost:3000 to see the result.

Thanks to Next.js [Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh), the pages auto-updates as you edit the files.

### Extend & Customise

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card on the projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`css/prism.css` - controls the styles associated with the code blocks. Feel free to customize it and use your preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

# Acknowledgements

This site is developed using a [starting template](https://github.com/timlrx/tailwind-nextjs-starter-blog) by Timothy Lin.
I would recommend you check it out if you are considering developing a blog site.

# Licence

Nextjs Tailwind Starter Blog template has License of MIT © Timothy Lin

Any other code by Shumeng Liu also has MIT license.

Content copyright Shumeng Liu. Feel free to repost my content with attribution.
