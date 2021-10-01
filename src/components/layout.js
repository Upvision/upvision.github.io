import styles from "../css/layout.module.css"
import Navbar from "./navbar"
import Footer from "./footer"
import Hero from "./hero"
import LoaderSVG from "../images/loader.svg"

const Layout = ({ location, children }) => {
  return (
    <div id={styles.Page}>
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
          transition: "all 2s ease",
        }}
      >
        <img src={LoaderSVG} alt="loading spinner" width="150" height="150" />
      </div>
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
