import React from "react"
import { Link } from "gatsby"
import path from "path"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getIssueIdFromPath = (absolutePath) => {
  const splitPath = absolutePath.split(path.sep)
  const lastElements = splitPath.slice(splitPath.length - 2, splitPath.length)
  return lastElements.join(path.sep)
}

const convertToWord = (code) => code.replace(/^./, code[0].toUpperCase()).replace('-', ' ')

const getNiceName = (issueId) => {
  let [volume, issue] = issueId.split(path.sep).map(convertToWord)
  return `${volume}, ${issue}`
}

const IssuesPage = ({data}) => {
  const issuePaths = data.issueGroup.group
  const issues = issuePaths.map(({fieldValue}) => getIssueIdFromPath(fieldValue) )
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {issues.map((issue) => <li><Link to={`/${issue}/`}>{getNiceName(issue)}</Link></li>)}
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
