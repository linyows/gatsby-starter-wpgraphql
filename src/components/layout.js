import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "normalize.css"
import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"
import { nowY } from "../../lib/date"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          title
          url
        }
        users {
          nodes {
            nickname
            description
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

  const { title, url } = data.wpgraphql.generalSettings
  const user = data.wpgraphql.users.nodes[0]
  const items = data.wpgraphql.menus.nodes.length > 0 ? data.wpgraphql.menus.nodes[0].menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, ""),
  })) : []

  return (
    <>
      <header className="site-header">
        <p className="site-title">
          <Link to="/" className="home">
            <img src={user.avatar.url} alt={user.nickname} className="site-avatar" />
            {title}
          </Link>
        </p>

        {user.description !== null &&
          <p className="site-desc">
            {user.description}
          </p>
        }

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
        Copyright © {nowY()} {title}. All rights reserved.
        Designed by <a href="https://github.com/linyows/gatsby-starter-wpgraphql">linyows.</a>
      </footer>
    </>
  )
}

export default Layout
