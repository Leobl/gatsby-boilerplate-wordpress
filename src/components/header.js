import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/style.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="wrapper">
      <h1 className="title">
        <Link className="link" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
