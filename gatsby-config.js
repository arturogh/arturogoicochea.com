module.exports = {
  siteMetadata: {
    title: 'Arturo Goicochea',
    description: 'This is my cool blog.'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
