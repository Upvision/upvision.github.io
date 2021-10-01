import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'

import "../css/global.css";
import SEO from '../../next-seo.config'
import Layout from '../components/layout'

import 'typeface-rubik';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const location = router.pathname
  setTimeout(function() {
    let loader = document.getElementById("___loader")
    loader.style.opacity = "0"
    loader.style.visibility = "hidden"
  }, 1000)
  return <>
    <DefaultSeo {...SEO} />
    <Layout path={location}>
      <Component {...pageProps} />
    </Layout>
  </>
}