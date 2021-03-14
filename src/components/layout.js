import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"
import "../css/layout.css"

import Hero from "./hero"

const Layout = ({children, path}) => {

  return (
    <div id="Page">
      <div id="hero">
        <Hero/>
      </div>
      <div className="wrapper">
        <Navbar path={path} />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
