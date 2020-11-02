import "./src/css/global.css";
import React from "react";
import Layout from "./src/components/layout";

require('typeface-rubik');

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
