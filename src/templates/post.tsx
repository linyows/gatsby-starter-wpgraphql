import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import { dateF, timeF } from "../../lib/date"
import { PostQuery } from "../../types/graphql-types"

type Props = {
  data: PostQuery
}

export const query = graphql`
  query Post($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        date
        excerpt
        tags {
          nodes {
            name
            slug
          }
        }
        author {
          slug
          description
          avatar {
            url
          }
        }
      }
    }
  }
`

const Component: React.FC<Props> = ({ data }) => {
  const post = data.wpgraphql.post
  return (
    <Layout>
      <Head title={post.title} description={post.excerpt} />
      <div className="entry">
        <p className="page-title">Blog</p>
        <h1
          className="post-title"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div className="post-meta">
          <p className="post-date">
            {dateF(post.date)}
            <span className="post-time">{timeF(post.date)}</span>
          </p>
          <ul className="post-tags">
            {post.tags.nodes.map(tag => (
              <li key={"li" + tag.slug}>
                <Link key={"tag" + tag.slug} to={"/blog/tags/" + tag.slug}>
                  {tag.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className="post-author">
        <img
          src={post.author.avatar.url}
          alt={post.author.slug}
          className="post-author-avatar"
        />
        <p className="post-author-line">
          Written by <Link to="/" className="post-autho-name">
            {post.author.slug}
          </Link>
        </p>
        <p className="post-author-desc">{post.author.description}</p>
      </div>
    </Layout>
  )
}

export default Component
