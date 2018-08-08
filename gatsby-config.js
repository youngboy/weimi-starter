module.exports = {
  siteMetadata: {
    title: 'DEMO',
    description: 'nan',
    siteUrl: 'nan',
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-webpack-weimi',
      options: {
        disableSourcemap: true,
        analyzer: false,
        analyzerOptions: {
          analyzerPort: 3300
        }
      }
    },
  ],
}
