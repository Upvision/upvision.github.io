import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'

import "../css/global.css";
import SEO from '../../next-seo.config'
import Layout from '../components/layout'

import 'typeface-rubik';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const location = router.pathname
  

  const [pageLoading, setPageLoading] = React.useState(false);
  setTimeout(function() {
    let loader = document.getElementById("___loader")
    loader.style.opacity = "0"
    loader.style.visibility = "hidden"
  }, 1000)

  return <>
    <DefaultSeo {...SEO} />
    
    <div
      key={`loader`}
      id="___loader"
      style={{
        alignItems: "center",
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        opacity: pageLoading ? 1 : 0,
        visibility: pageLoading ? "hidden" : "visible",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        transition: "all 2s ease",
      }}
    >
      <img src="/images/loader.svg" alt="loading spinner" width="150" height="150" />
    </div>
    <Layout path={location}>
      <Component {...pageProps} />
    </Layout>
  </>
}