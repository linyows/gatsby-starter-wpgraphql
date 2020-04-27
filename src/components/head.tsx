import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { HeadQuery } from "../../types/graphql-types"

type Meta = {
  name?: string
  property?: string
  content: string
}

// const defaultProps = {
//   meta: [],
// }

type Props = {
  title?: string
  description?: string
  lang?: string
  meta?: Meta[]
}
//} & typeof defaultProps

const Component: React.FC<Props> = ({ title, description, lang, meta }) => {
  const data = useStaticQuery<HeadQuery>(graphql`
    query Head {
      wpgraphql {
        generalSettings {
          title
          description
          language
        }
        users {
          nodes {
            slug
          }
        }
      }
    }
  `)

  const settings = data.wpgraphql.generalSettings
  const user = data?.wpgraphql?.users?.nodes[0]?.slug || `gatsby`

  const headDesc = description || settings.description || settings.title
  const headTitle = title ? `${title} - ${settings.title}` : `${settings.title}`
  const headLang = lang || settings.language || `en`
  const headMeta = meta || []

  return (
    <Helmet
      htmlAttributes={{
        headLang,
      }}
      title={headTitle}
      meta={[
        {
          name: `description`,
          content: headDesc,
        },
        {
          property: `og:title`,
          content: headTitle,
        },
        {
          property: `og:description`,
          content: headDesc,
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
          content: user,
        },
        {
          name: `twitter:title`,
          content: headTitle,
        },
        {
          name: `twitter:description`,
          content: headDesc,
        },
      ].concat(headMeta)}
    ></Helmet>
  )
}

// Component.defaultProps = defaultProps

export default Component
