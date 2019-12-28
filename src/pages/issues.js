import React from "react"
import { Link } from "gatsby"
import path from "path"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getIssueName } from "../utils/name-tools"

const getIssueIdFromPath = (absolutePath) => {
  const splitPath = absolutePath.split(path.sep)
  const lastElements = splitPath.slice(splitPath.length - 2, splitPath.length)
  return lastElements.join(path.sep)
}

const IssuesPage = ({data}) => {
  const issuePaths = data.issueGroup.group
  const issues = issuePaths.map(({fieldValue}) => getIssueIdFromPath(fieldValue) )
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {issues.map((issue) => <li><Link to={`/${issue}/`}>{getIssueName(issue)}</Link></li>)}
      </ul>
      <p>Older issues will soon be uploaded here</p>
    </Layout>
  )
}

export default IssuesPage

export const pageQuery = graphql`
  query{
    issueGroup: allFile(filter: {sourceInstanceName: {eq: "issues"}}) {
      group(field: dir) {
        fieldValue
      }
    }
  }
`
