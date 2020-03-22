import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <SEO title={post.frontmatter.title} />
        <div 
          style={{maxWidth:"850px", margin: "0 auto", padding: '0 40px 40px 40px'}} className="shadow shadow-hover border card-body">

            <h1>{post.frontmatter.title}</h1>
            <h5 style={{ color: 'grey'}}>Written on {post.frontmatter.date}</h5>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`