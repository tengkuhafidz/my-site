import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => {
    const renderBlogPosts = () => {
        return data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{node.frontmatter.title}</h4>
                        <h5 className="card-subtitle">{node.frontmatter.date}</h5>
                        <p className="card-text">{node.excerpt}</p>
                        <Link to={node.fields.slug}><button> Read More </button></Link>
                    </div>
                </div>
            </div>
        ))
    }
    return (
        <Layout>
            <SEO title="blog" />
            <div style={{maxWidth:"850px", margin: "0 auto"}}>
                {renderBlogPosts()}
            </div>
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
              slug
          }
          excerpt
        }
      }
    }
  }
`