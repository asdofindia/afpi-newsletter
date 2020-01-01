import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Email = ({email}) => (
  <a href={`mailto:${email}`}>{email}</a>
)

const Editor = ({name, email}) => (
  <li>{name} - {email ? <Email email={email} /> : ''}</li>
)

const Bearer = ({name, email, role}) => (
  <li><strong>{role}:</strong> {name} - {email ? <Email email={email} /> : ''}</li>
)

const AboutPage = () => {
  const officeBearers = [
    {
      "role": "President",
      "name": "Dr Swapna Bhaskar",
      "email": "swapnabhaskar305@gmail.com"
    }
  ]
  const editorialTeam = [
  {
    "name": "Dr Akshay S Dinesh",
    "email": "akshay@learnlearn.in"
  },
  {
    "name": "Dr BC Rao",
    "email": "badakere.rao@gmail.com"
  },
  {
    "name": "Dr Ramakrishna Prasad",
    "email": "dr.rk.prasad@gmail.com"
  },
  {
    "name": "Dr Roshni Jhan Ganguly",
    "email": "roshnijhan@hotmail.com"
  },
  {
    "name": "Dr Sowmya B. Ramesh"
  },
  {
    "name": "Dr Sulaiman Sharieff",
    "email": "sulaiman94@yahoo.co.in"
  },
  {
    "name": "Dr Swathi S Balachandra",
    "email": "swathisb01@gmail.com"
  },
  ]
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <h2>Office Bearers</h2>
      <ul>
        {officeBearers.map(bearer => <Bearer {...bearer} />)}
      </ul>
      <h2>Editorial Team</h2>
      <ul>
        {editorialTeam.map(editor => <Editor {...editor} />)}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

}

export default AboutPage
