import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import Head from "../components/head"
import { dateF, timeF } from "../../lib/date"

export const query = graphql`
  query($id: ID!) {
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
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.wpgraphql.post
  return (
    <Layout>
      <Head title={post.title} description={post.excerpt} />
      <div className="entry">
        <p className="page-title">Blog</p>
        <h1 className="post-title" dangerouslySetInnerHTML={{ __html: post.title }} />
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
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export default PostTemplate
