/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import { getIssueName } from "../utils/name-tools"
import Header from "./header"
import SEO from "./seo"
import Footer from "./footer"
import "./article.css"

const Author = ({name, affiliation}) => (
    <p>
      <strong>{name}</strong> ({affiliation})
    </p>
)

const Authors = ({authors}) => {
  if (!Array.isArray(authors)) return ""
  return authors.map(author => <Author key={author.name} name={author.name} affiliation={author.affiliation} />)
}

const Layout = ({ pageContext, children, path}) => {
  const data = useStaticQuery(graphql`
    query ArticleLayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pdfLink = path.replace(/\/$/, '.pdf')
  const issueName = getIssueName(pageContext.issueId)
  const pdfFileName = `${pageContext.frontmatter.title} - ${data.site.siteMetadata.title} (${issueName})`

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title={pageContext.frontmatter.title} />
      <div
        className="article"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        Issue: <Link to={`/${pageContext.issueId}/`}>{issueName}</Link>
        <p className="noPrint">
          Article Download Options: <a href={`${pdfLink}`} download={pdfFileName}>PDF</a>
        </p>
        <p><strong>{pageContext.frontmatter.type}</strong></p>
        <h2>{pageContext.frontmatter.title}</h2>
        <Authors authors={pageContext.frontmatter.authors} />
        <hr />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
