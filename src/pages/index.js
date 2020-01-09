import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>The AFPI Karnataka Newsletter is a quarterly newsletter published by AFPI</p>
    <p>It is a semi-formal space where family physicians, general practitioners, and others interested in the field of primary health care can creatively share their experiences and express their opinions of what family medicine and primary health care should be, including their case reports, research papers, management, leadership, and relationship issues, administrative and entrepreneurial decisions, community work, and other articles about changing trends, thereby creating a community of learners and practitioners who inspire each other through their work and enhance and update their knowledge</p>
    <p><Link to="/volume-4/issue-1/">Latest Issue</Link></p>
    <p><Link to="/issues/">View all issues</Link></p>
    <p><Link to="/for-authors/">Instructions for Authors</Link></p>
    <p><Link to="/about/">About</Link></p>
  </Layout>
)

export default IndexPage
