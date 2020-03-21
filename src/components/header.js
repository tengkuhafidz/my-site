import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="border fixed split-nav">
    <div className="nav-brand" >
      <h3 ><Link to="/">{siteTitle}</Link></h3>
    </div>
    <div className="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible1" />
      <button>
      <label htmlFor="collapsible1">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </label>
      </button>
      <div className="collapsible-body">
        <ul className="inline">
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
