import React from 'react';
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
            }
            fields{
              slug
            }
          }
        }
      }
    }
    `
  )
  console.log(data)
  return (
    <div>
      <Layout>
        <div className={blogStyles.container}>
        <h1>Blog</h1>
        <p>Posts</p>
        
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => (
            <li className={blogStyles.post}>
              <Link to={edge.node.fields.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
        </div>
      </Layout>
    </div>
  )
}

export default BlogPage