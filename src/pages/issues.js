import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
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
  const olderIssues = [
    'volume-1/issue-1',
    'volume-1/issue-2',
    'volume-1/issue-3',
    'volume-1/issue-4',
    'volume-2/issue-1',
    'volume-2/issue-2',
    'volume-3/issue-1',
    'volume-3/issue-2',
    'volume-3/issue-3',
    'volume-3/issue-4'
  ]
  const issuePaths = data.issueGroup.group
  const issues = issuePaths.map(({fieldValue}) => getIssueIdFromPath(fieldValue) )
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {issues.map((issue) => <li><Link to={`/${issue}/`}>{getIssueName(issue)}</Link></li>)}
      </ul>
      <p>Older issues (published as PDF)</p>
      <ul>
        {olderIssues.reverse().map(issue => <li> <OutboundLink href={`/${issue}/issue.pdf`}> {getIssueName(issue)} (PDF)</OutboundLink></li>)}
      </ul>
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
