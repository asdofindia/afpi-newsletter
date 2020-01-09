import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AuthorsInstructionPage = () => {
  return (
    <Layout>
      <SEO title="Instructions For Authors" />
      <h1>Instructions for Authors</h1>
        <p>
            There is rich experience in the practice of each one of us.
            Probably because of reluctance and a culture of humility, we are not encouraged to think about this experience and write about it. We tend to keep our original voice unheard.
            This newsletter is for every practitioner to make their voice heard, their experience counted.
        </p>
        <p>
            To submit an article here, the only requirement is that it is a genuine article that advances our mission. The language, the format, the structure, none of that should bother you. Our editorial team will help you restyle, restructure, and rethink your article, if required, before publication. What matters to us is that you write with conviction.
        </p>
        <p>You can send your submissions by email to <a href="mailto:team@newsletter.afpikarnataka.in">team@newsletter.afpikarnataka.in</a> or any member of the <Link to="/about#editorial-team">editorial team</Link> and one of us will get back to you.</p>
        <h3>Preferred format for submission</h3>
        <p>If you submit your article in any of these formats, it will make our life easy:</p>
        <ul>
            <li>Plain Text (Directly as email/telegram message/whatsapp message)</li>
            <li>Markdown</li>
            <li>Rich Text/Google doc/Word/LibreOffice Writer</li>
        </ul>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default AuthorsInstructionPage
