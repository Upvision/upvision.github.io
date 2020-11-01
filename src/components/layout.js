import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"
import "../css/layout.css"

import Hero from "./hero"

const Layout = props => {
  const { children, path } = props;
  
  return (
    <>
      <div id="hero">
        <Hero/>
      </div>
      <div className="wrapper">
        <Navbar path={path} />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
