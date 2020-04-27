import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import { dateF, timeF } from "../../lib/date"
import { IndexPageQuery } from "../../types/graphql-types"

type Props = {
  data: IndexPageQuery
}

export const query = graphql`
  query IndexPage {
    wpgraphql {
      posts {
        nodes {
          id
          title
          uri
          excerpt
          date
          tags {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`

const Blog: React.FC<Props> = ({ data }) => {
  const posts = data.wpgraphql.posts.nodes

  return (
    <Layout>
      <Head />
      <h1 className="page-title">Home</h1>
      {posts.map(post => (
        <article key={post.id} className="post">
          <h2 className="post-title">
            <Link
              to={`/blog/${post.uri}`}
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </h2>
          <div className="post-meta">
            <p className="post-date">
              {dateF(post.date)}
              <span className="post-time">{timeF(post.date)}</span>
            </p>
            <ul className="post-tags">
              {post.tags.nodes.map(tag => (
                <li key={"li" + post.id + tag.slug}>
                  <Link key={post.id + tag.slug} to={"/blog/tags/" + tag.slug}>
                    {tag.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="post-excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </article>
      ))}
    </Layout>
  )
}

export default Blog
