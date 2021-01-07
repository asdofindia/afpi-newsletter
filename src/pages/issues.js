import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getIssueName } from "../utils/name-tools"

const IssuesPage = () => {
  const publishedWebIssues = [
    'volume-4/issue-3',
    'volume-4/issue-2',
    'volume-4/issue-1'
  ]
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
  return (
    <Layout>
      <SEO title="All Issues" />
      <ul>
        {publishedWebIssues.map(issue => 
          <li><Link to={`/${issue}/`}>{getIssueName(issue)}</Link></li>)
        }
      </ul>
      <p>Older issues (published as PDF)</p>
      <ul>
        {olderIssues.reverse().map(issue => <li> <OutboundLink href={`/${issue}/issue.pdf`}> {getIssueName(issue)} (PDF)</OutboundLink></li>)}
      </ul>
    </Layout>
  )
}

export default IssuesPage
