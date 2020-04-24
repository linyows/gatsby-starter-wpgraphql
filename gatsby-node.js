exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      wpgraphql {
        pages {
          nodes {
            id
            uri
          }
        },
        posts {
          nodes {
            id
            uri
          }
        },
        tags {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  `)

  const pages = result.data.wpgraphql.pages.nodes
  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.id,
      },
    })
  })

  const posts = result.data.wpgraphql.posts.nodes
  posts.forEach(post => {
    actions.createPage({
      path: `blog${post.uri}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        id: post.id,
      },
    })
  })

  const tags = result.data.wpgraphql.tags.nodes
  tags.forEach(tag => {
    actions.createPage({
      path: `blog/tags/${tag.slug}`,
      component: require.resolve("./src/templates/post-list.js"),
      context: {
        id: tag.id,
        name: tag.name,
      },
    })
  })
}
