import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer
    className="noPrint"
    style={{
      background: `cyan`,
      marginTop: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      Published by <Link to="/about">AFPI Karnataka</Link>. Read our <Link to="/copyright">copyright policy</Link>.
    </div>
  </footer>
)

export default Footer

