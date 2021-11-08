import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AuthorsInstructionPage = () => {
  return (
    <Layout>
      <Seo title="Instructions For Authors" />
      <h1>Instructions for Authors</h1>
        <p>
            There is rich experience in the practice of each one of us.
            Probably because of reluctance and a culture of humility, we are not encouraged to think about this experience and write about it. We tend to keep our original voice unheard.
            This newsletter is for every practitioner to make their voice heard, their experience counted.
        </p>
        <p>
            To submit an article here, the only requirement is that it is a genuine article that advances our mission. The language, the format, the structure, none of that should bother you. Our editorial team will help you restyle, restructure, and rethink your article, if required, before publication. What matters to us is that you write with conviction.
        </p>
        <p>
          We allow the author(s) to retain their <strong>copyright</strong> to the articles they publish here and we strongly encourage that the authors in turn release their article under a <a href="https://creativecommons.org/share-your-work/">Creative Commons license</a> to allow wide resharing. Read <Link to="/copyright">our copyright policy</Link>.
        </p>
        <p>You can send your submissions by email to <a href="mailto:team@newsletter.afpikarnataka.in">team@newsletter.afpikarnataka.in</a> or any member of the <Link to="/about#editorial-team">editorial team</Link> and one of us will get back to you.</p>
        <h3>Preferred format for submission</h3>
        <p>If you submit your article in any of these formats, it will make our life easy:</p>
        <ul>
            <li>Plain Text (Directly as email/telegram message/whatsapp message)</li>
            <li>Markdown</li>
            <li>Rich Text/Google doc/Word/LibreOffice Writer</li>
        </ul>
        <h3>Categories</h3>
        <p>Submissions are taken in the following categories</p>
        <ul>
            <li><strong>Events of AFPI Karnataka</strong> - event reports, including photos. Details of upcoming events.</li>
            <li><strong>Practice Experiences</strong></li>
            <li><strong>Case Reports</strong> - following academic structure. BMJ has a <a href="http://casereports.bmj.com/pages/wp-content/uploads/sites/69/2019/04/How-to-write-a-Case-Report-DIGITAL.pdf">guide</a> on how to write a good case report.</li>
            <li><strong>Gleanings</strong> - learning points from contemporary literature.</li>
            <li><strong>Young Physician’s Corner</strong> - specially reserved for young practitioners and students (both post-graduate and under-graduate)</li>
            <li><strong>Masala</strong> - shareable moments from life of practitioners.</li>
            <li><strong>Creative Corner</strong> - drawings, paintings, performances, recitals, compositions, anything creative. (Audio/Video also allowed, but will be published only on the web version of the newsletter)</li>
            <li><strong>Readers’ Corner / Letter to the Editor</strong></li>
            <li><strong>Book reviews</strong> - reviews of medical and non-medical reads</li>
            <li><strong>Reflections</strong></li>
        </ul>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default AuthorsInstructionPage
