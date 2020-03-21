import React from "react"
n
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTALinks from "../components/cta-links"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{maxWidth: 600, margin: 'auto', textAlign: "center"}}>
      <div style={{textAlign: "center", display:"inline-block"}}>
        <img src="https://media.devlabs.academy/file/w_150/hafidz/profile-1.png" />
      </div>
      <h3 style={{margin: 0}}>Tengku Hafidz</h3>
      <p>Welcome to the site of Tengku Hafidz.</p>
      <CTALinks />
    </div>
  </Layout>
)

export default IndexPage
