import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CopyrightPage = () => {
    return (
    <Layout>
      <SEO title="Copyright policy" />
      <h1>Copyright policy</h1>
      <p>
        All authors retain their copyright when publishing their article in our newsletter.
        We encourage every submission to be released in a Creative Commons license to enable wider reach through resharing.
        We also republish permissively licensed articles from elsewhere.
        Unless explicitly mentioned, please reach out to the corresponding author of each article for information regarding licensing.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

}

export default CopyrightPage
