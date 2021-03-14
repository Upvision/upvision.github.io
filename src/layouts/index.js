import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "../css/layout.css"

import Hero from "../components/hero"

import LoaderSVG from "../images/loader.svg"

const Layout = ({location, children}) => {
  return (
    <div id="Page">
      <div
            key={`loader`}
            id="___loader"
            style={{
            alignItems: "center",
            backgroundColor: "#333",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            transition: 'all 2s ease'
            }}
        >
            <img 
            src={LoaderSVG} 
            alt="loading spinner" 
            width="150" 
            height="150"
            />
      </div>
      <div id="hero">
        <Hero/>
      </div>
      <div className="wrapper">
        <Navbar path={location} />
        <div className="content">
          <TransitionProvider location={location}>
            <TransitionViews>
              {children}
            </TransitionViews>
          </TransitionProvider>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
