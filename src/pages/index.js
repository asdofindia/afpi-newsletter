import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>The Newsletter is now available online</p>
    <p><Link to="/volume-4/issue-1/">Latest Issue</Link></p>
    <p><Link to="/issues/">View all issues</Link></p>
    <p><Link to="/about/">About</Link></p>
  </Layout>
)

export default IndexPage
