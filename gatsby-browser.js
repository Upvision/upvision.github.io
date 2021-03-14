import "./src/css/global.css";
// import React from "react";
// import Layout from "./src/layouts/layout";

require('typeface-rubik');

// export const wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }

export const onInitialClientRender = () => {
  // let loader = document.createElement("div");
  // loader.className = "loader"
  // document.appendChild("loader")
  setTimeout(function() {
      let loader = document.getElementById("___loader")
      loader.style.opacity = "0"
      loader.style.visibility = "hidden"
  }, 1000)
}

export const shouldUpdateScroll = () => {
  return false;
};