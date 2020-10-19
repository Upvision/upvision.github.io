import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"
import "../css/layout.css"

import Hero from "./Hero"

const Layout = props => {
  const { children, path } = props;
  let shouldDisplayHero = (path === '/');
  
  return (
    <>
      <div className="wrapper">
        <Navbar path={path} />
        <Hero style={shouldDisplayHero? {} : {display: 'none'}}></Hero>
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
