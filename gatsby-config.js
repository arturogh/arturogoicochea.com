module.exports = {
  siteMetadata: {
    title: 'Arturo Goicochea',
    description: 'Arturo is a designer who codes. Finde my projects, posts, about here.'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      }
    }
  ]
};
