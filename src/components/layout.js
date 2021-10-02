import styles from "../css/layout.module.css"
import Navbar from "./navbar"
import Footer from "./footer"
import Hero from "./hero"
const Layout = ({ location, children }) => {
  return (
    <div id={styles.Page}>
      <div id="hero">
        <Hero />
      </div>
      <div className={styles.wrapper}>
        <Navbar path={location} />
        <div className={styles.content}>
          {/* <TransitionProvider location={location}>
            <TransitionViews>{children}</TransitionViews>
          </TransitionProvider> */}
          { children }
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
