// This is a workaround to https://github.com/gatsbyjs/gatsby/issues/15486
// till https://github.com/gatsbyjs/gatsby/issues/16242 is fixed
const gatsbyRemarkPlugins = [
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1200
    }
  }
]

module.exports = {
  siteMetadata: {
    title: `AFPI Karnataka Newsletter`,
    description: `The newsletter of AFPI Karnataka`,
    author: `@afpikarnataka`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `issues`,
        path: `${__dirname}/src/issues/`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/issues/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          'pages': require.resolve('./src/components/layout.js'),
          'issues': require.resolve('./src/components/article.js'),
        },
        gatsbyRemarkPlugins,
        plugins: gatsbyRemarkPlugins
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-155198608-1`,
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-nprogress`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AFPI Karnataka Newsletter`,
        short_name: `newsletter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/afpi-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
