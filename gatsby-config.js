module.exports = {
  siteMetadata: {
    title: 'Software Engineer - Nam',
    author: 'Nam Bui',
    description:
      "Hi I'm Nam or JKey. A Software Engineer who is trying to be more full-stack day by day. 🔥🔥🔥",
    image: 'src/images/bg.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#F19066',
        theme_color: '#F19066',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
