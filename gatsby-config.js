module.exports = {
  siteMetadata: {
    title: `UpVision`,
    description: `The Tech Club of NIT Delhi!`,
    author: `@UpVision`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GHTOKEN,
        graphQLQuery: `
          query {
            organization(login:"UpVision") {
              repositories(first: 10, orderBy: {field: STARGAZERS, direction: DESC}) {
                edges {
                  node {
                    name
                    description
                    url
                    stargazers {
                      totalCount
                    }
                    openGraphImageUrl
                    collaborators(affiliation: DIRECT) {
                      edges {
                        node {
                          name
                          url
                          avatarUrl
                        }
                      }
                    }
                  }
                }
              }
              membersWithRole(first: 100) {
                edges {
                  node {
                    name
                    avatarUrl
                  }
                }
              }
            }
          }
        `
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
