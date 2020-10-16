import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"
import "../css/layout.css"

const Layout = props => {
  const { children, mark, setMark, path } = props
  console.log("props: ")
  return (
    <>
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

export default Layout
