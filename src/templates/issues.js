import React from "react"
import PropTypes from "prop-types"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { getIssueName } from "../utils/name-tools"

const Issues = ({ pageContext, data }) => {
  const { nodes } = data.allSitePage
  const { issueId } = pageContext
  return (
    <Layout>
    <SEO title={getIssueName(issueId)} />
    <div>
      <h1>Issue: {getIssueName(issueId)}</h1>
      <h2>Contents</h2>
      <ul>
        {nodes.map(({ context, path }) => {
          const { isIssueIndex } = context
          if (isIssueIndex) {
            return ("")
          }
          const { frontmatter: {title}} = context
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Link to="/issues">All issues</Link>
    </div>
    </Layout>
  )
}

Issues.propTypes = {
  data: PropTypes.shape({
    allSitePage: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          context: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              order: PropTypes.number
            }),
            issueId: PropTypes.string.isRequired,
            isIssueIndex: PropTypes.boolean
          }),
          path: PropTypes.string.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default Issues

export const pageQuery = graphql`
query ($issueId: String) {
   allSitePage(
       filter: {context: {issueId: {eq: $issueId}}},
       sort: {order: ASC, fields: context___frontmatter___order}
   ) {
    nodes {
      context {
        frontmatter {
          title
          order
        }
        issueId,
        isIssueIndex
      }
      path
    }
  }
}
`
