/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./article.css"

const Layout = ({ pageContext, children}) => {
  const data = useStaticQuery(graphql`
    query ArticleLayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <p><Link to={`/${pageContext.issueId}/`}>Issue Index</Link></p>
        <footer>
          © {new Date().getFullYear()}, Published by <a href="https://afpikarnataka.in">AFPI Karnataka</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
