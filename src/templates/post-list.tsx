import React from "react"
import { graphql, Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import { dateF, timeF } from "../../lib/date"
import { PostListQuery } from "../../types/graphql-types"

type PostListContext = {
  id: string
  name: string
}

type Props = {
  data: PostListQuery
  pageContext: PostListContext
}

export const query = graphql`
  query PostList($id: ID!) {
    wpgraphql {
      tag(id: $id) {
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
  }
`

const Component: React.FC<Props> = ({ data, pageContext }) => {
  const posts = data.wpgraphql.tag.posts.nodes

  return (
    <Layout>
      <Head title={pageContext.name} />
      <h1 className="page-title">Blog / {pageContext.name}</h1>
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

export default Component
