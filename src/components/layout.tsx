import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { nowY } from "../../lib/date"
import { LayoutQuery } from "../../types/graphql-types"
import "normalize.css"
import "@wordpress/block-library/build-style/style.css"
import "./layout.css"

const Component: React.FC = ({ children }) => {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query Layout {
      wpgraphql {
        generalSettings {
          title
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
        menus {
          nodes {
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  const { title, description } = data.wpgraphql.generalSettings
  const user = data.wpgraphql.users.nodes[0]
  const items =
    data.wpgraphql.menus.nodes.length > 0
      ? data.wpgraphql.menus.nodes[0].menuItems.nodes.map(item => ({
          ...item,
          url: item.url.replace(/^https?:\/\/[a-z0-9-.:]+/, ""),
        }))
      : []

  return (
    <>
      <header className="site-header">
        <p className="site-title">
          <Link to="/" className="home">
            <img
              src={user.avatar.url}
              alt={user.slug}
              className="site-avatar"
            />
            {title}
          </Link>
        </p>

        {description !== "" && <p className="site-desc">{user.description}</p>}

        <ul className="site-nav">
          {items.map(item => (
            <li key={"li" + item.url}>
              <Link key={item.url} to={item.url} className="navbar-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <main className="site-main">{children}</main>
      <footer className="site-footer">
        Copyright &copy; {nowY()} {title}. All rights reserved.
        <br />
        Designed by{" "}
        <a href="https://github.com/linyows/gatsby-starter-wpgraphql">
          linyows.
        </a>
      </footer>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&family=Noto+Serif+JP:wght@900&display=swap"
      />
    </>
  )
}

export default Component
