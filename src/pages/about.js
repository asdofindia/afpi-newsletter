import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <h2>Team</h2>
    <ul>
      <li>Akshay S Dinesh</li>
      <li>BC Rao</li>
      <li>Ramakrishna Prasad</li>
      <li>Roshni Jhan Ganguly</li>
      <li>Sowmya B. Ramesh</li>
      <li>Sulaiman Sharieff</li>
      <li>Swathi S Balachandra</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
