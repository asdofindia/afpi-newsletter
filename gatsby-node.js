/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require("gatsby-source-filesystem")

const collections = {
  '/src/issues': 'issues'
}

const getRelativePath = (absolutePath) => absolutePath.slice(__dirname.length)
const splitPath = (somePath) => somePath.split(path.sep)
const rejoinPath = (someArray) => someArray.join(path.sep)

const extraInfoFromPath = absolutePath => {
  if (absolutePath.startsWith(__dirname)) {
    const relativePath = getRelativePath(absolutePath)
    const backboneDirectory = rejoinPath(splitPath(relativePath).slice(0, 3))
    const collection = collections[backboneDirectory]
    if (collection) {
      const issueId = rejoinPath(splitPath(relativePath).slice(3, 5))
      return {
        issueId
      }
    }
  }
}

const extractIssueId = (issueAbsolutePath) => extraInfoFromPath(issueAbsolutePath)

// to generate each issue's contents
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const issueTemplate = path.resolve("src/templates/issues.js")
  const result = await graphql(`
    {
      issueGroup: allFile(filter: {sourceInstanceName: {eq: "issues"}}) {
        group(field: dir) {
          edges {
            node {
              id
              relativePath
            }
          }
        fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const issues = result.data.issueGroup.group
  issues.forEach(issue => {
    const { issueId } = extractIssueId(issue.fieldValue)
    createPage({
      path: `/${issueId}/`,
      component: issueTemplate,
      context: {
        issueId,
        isIssueIndex: true
      },
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)

  const extraInfo = extraInfoFromPath(page.component)
  if (extraInfo) {
    const { issueId } = extraInfo
    page.context.issueId = issueId
    deletePage(oldPage)
    createPage(page)
  }
}

