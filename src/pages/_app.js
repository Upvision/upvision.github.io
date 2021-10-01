import App from 'next/app';
import { DefaultSeo } from 'next-seo';

import "../css/global.css";
import SEO from '../next-seo.config';
import Layout from '../components/layout'

import 'typeface-rubik';

export default App({ component, pageProps }) {
  setTimeout(function() {
    let loader = document.getElementById("___loader")
    loader.style.opacity = "0"
    loader.style.visibility = "hidden"
  }, 1000)
  return <>
    <DefaultSeo {...SEO} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}