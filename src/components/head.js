import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Head({ description, lang, meta, title }) {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          title
          url
          description
        }
        users {
          nodes {
            slug
            avatar {
              url
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.wpgraphql.generalSettings.title
  const siteDesc = data.wpgraphql.generalSettings.description
  const siteAuthor = data.wpgraphql.users.nodes[0].slug
  const metaDesc = description || siteDesc || siteTitle
  const metaTitle = title ? `${title} - ${siteTitle}` : `${siteTitle}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDesc,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDesc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDesc,
        },
      ].concat(meta)}
    >
    </Helmet>
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  //title: PropTypes.string.isRequired,
}

export default Head
