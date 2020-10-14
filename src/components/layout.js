import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"
import "../css/layout.css"

const Layout = ({ children, mark }) => {
  
  return (
    <>
      <div className="wrapper">
        <Navbar mark = {mark}/>
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
