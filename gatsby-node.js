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

