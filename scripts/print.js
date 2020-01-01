const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const PDFMerge = require('pdf-merge');

let browser;

let rootUrl;
if (process.argv[3]) {
  rootUrl = process.argv[3];
} else {
  rootUrl = `http://localhost:8000`
}

const printParallel = rootUrl.endsWith('8080')

const margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
}

const staticDir = path.join(path.dirname(__dirname), 'static')

const createStaticDir = (issueId) => {
  const issueDir = path.join(staticDir, issueId)
  fs.mkdirSync(issueDir, {recursive: true})
}

const printLink = async (link, path, footerTemplate) => {
  const page = await browser.newPage();
  await page.goto(link, {waitUntil: 'networkidle2'});
  await page.$$eval('a', links => links.map(link => link.href = link.href.replace(window.location.host, 'newsletter.afpikarnataka.in')))
  const displayHeaderFooter = false
  await page.pdf({path, margin, displayHeaderFooter, footerTemplate});
  console.log(`Printed ${path}`)
}

const getPrintPath = (link) => {
  const splitLink = link.split('/')
  const issueDir = splitLink.slice(splitLink.length - 4, splitLink.length - 2).join(path.sep)
  const fileName = splitLink.slice(splitLink.length - 2, splitLink.length -1)

  const issueAbsoluteDir = path.join(staticDir, issueDir)
  return path.join(issueAbsoluteDir, `${fileName}.pdf`)
}

const parallelPrint = (links, footerTemplate) => {
  const printJobs = links.map(link => printLink(link, getPrintPath(link), footerTemplate))
  return Promise.all(printJobs)
}

const seriesPrint = async (links, footerTemplate) => {
  for (const link of links) {
    await printLink(link, getPrintPath(link), footerTemplate)
  }
}

(async () => {
  browser = await puppeteer.launch();
  const page = await browser.newPage();
  const issueId = process.argv[2];
  const indexUrl = `${rootUrl}/${issueId}/`;
  await page.goto(indexUrl, {waitUntil: 'networkidle2'});
  const links = await page.$$eval('li a', links => links.map(link => link.href))
  createStaticDir(issueId)
  const footerTemplate = `<h2>AFPI Karnataka Newsletter ${issueId}</h2>`
  if (printParallel) {
    await parallelPrint(links, footerTemplate)
  } else {
    await seriesPrint(links, footerTemplate)
  }
  const fileNames = links.map(getPrintPath)
  const issuePDFName = `./output/${issueId.replace('/','-')}.pdf`
  fs.mkdirSync('./output', {recursive: true})
  await PDFMerge(fileNames, {output: issuePDFName})
  console.log(`Printed complete issue to ${issuePDFName}`)

  await browser.close();
})();
