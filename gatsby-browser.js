import "./src/css/global.css";
import React from "react";
import Layout from "./src/components/layout";

require('typeface-rubik');

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onInitialClientRender = () => {
  setTimeout(function() {
      let loader = document.getElementById("___loader")
      loader.style.opacity = "0"
      loader.style.visibility = "hidden"
  }, 1000)
}