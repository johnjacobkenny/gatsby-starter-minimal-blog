require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Kenny\'s blog`,
    siteTitleAlt: `Kenny John Jacob`,
    siteHeadline: "Kenny's blog",
    siteUrl: "https://kennyj.me/",
    siteDescription: "Kenny's personal blog",
    siteLanguage: "en",
    siteImage: "/banner.png",
    author: "Kenny John Jacob",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/johnjacobkenny`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/kennyjohnjacob/`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Kenny's Blog",
        short_name: `Kenny`,
        description: `Kenny's personal blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: "static/kenny.png",
        include_favicon: false,
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://matomo.kennyj.me/",
        siteUrl: "https://kennyj.me/",
      },
    }`gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
