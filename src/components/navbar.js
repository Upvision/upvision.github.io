import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../css/navbar.css"

function Navbar({ siteTitle }) {
  return (
    <>
      <div className="navbar">
        {/* <h1 style={{ margin: 0 }}> */}
          <Link
            to="/"
            style={{
              color: `#13e8b5`,
              textDecoration: `none`,
            }}
          >
            {/* {siteTitle} */}
            <hr 
              style={{
                color: `#13e8b5`,
                height: `4px`,
                borderRadius: `5px`,
                backgroundColor: `#13e8b5`,
                width: `60%`
              }}
            ></hr>
          </Link>
        {/* </h1> */}
      </div>
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
