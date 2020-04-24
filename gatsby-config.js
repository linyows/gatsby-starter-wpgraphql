module.exports = {
  siteMetadata: {
    title: `L I N Y O W S 🤡`,
    description: `Yo!`,
    author: `linyows`,
    siteUrl: `https://linyows.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `https://${process.env.GATSBY_API}/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans+JP:300,900`,
          `Noto+Serif+JP`
        ],
        display: 'swap'
      }
    },
  ],
}
