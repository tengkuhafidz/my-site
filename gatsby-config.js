module.exports = {
  siteMetadata: {
    title: `Fidz.Dev`,
    description: `Welcome to the persoanl site of Tengku Hafidz`,
    author: `@tengkuhafidz`,
    social: {
      twitter: 'twitter.com/sohafidz',
      github: '',
      linkedin: '',
      facebook: '',
      instagram: '',
      email: ''
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site of Tengku hafidz`,
        short_name: `Fidz.Dev`,
        start_url: `/`,
        background_color: `#0c71c3`,
        theme_color: `#0c71c3`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
