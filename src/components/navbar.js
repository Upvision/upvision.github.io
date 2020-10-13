import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Grid from "@material-ui/core/Grid"
import Slider from "@material-ui/core/Slider"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

import "../css/navbar.css"

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        height: "14px",
        width: "14px",
        color: "#13e8b5",
      },
      track: {
        height: "4px",
        color: "#13a884",
      },
      rail: {
        height: "4px",
        color: "#13a884",
      },
      markLabel: {
        fontSize: "calc(0.5rem + 0.5vw)",
        color: "#13a884",
      },
      markLabelActive: {
        fontSize: "calc(0.5rem + 0.5vw)",
        color: "#13a884",
      },
    },
  },
})

function Navbar({ siteTitle }) {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
  }, [])

  React.useEffect(() => {
    if (
      (window.scrollY / (window.innerHeight + window.outerHeight)) * 100 !==
      value
    ) {
      //do smooth scrolling to (value*(window.innerHeight+window.outerHeight)/100)
    }
  }, [value])

  const listenToScroll = () => {
    let barPercentage =
      (window.scrollY / (window.innerHeight + window.outerHeight)) * 100
    setValue(barPercentage)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const marks = [
    {
      value: 0,
      label: "HOME",
    },
    {
      value: 20,
      label: "ABOUT US",
    },
    {
      value: 40,
      label: "CONTACT US",
    },
    {
      value: 60,
      label: "HOME",
    },
    {
      value: 80,
      label: "HOME2",
    },
    {
      value: 100,
      label: "HOME3",
    },
  ]

  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={10} md={8} lg={6}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              min={0}
              max={100}
              value={value}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              marks={marks}
            />
          </ThemeProvider>
        </Grid>
      </Grid>
      {/* <div className="navbar">
         <h1 style={{ margin: 0 }}> 
          <Link
            to="/"
            style={{
              color: `#13e8b5`,
              textDecoration: `none`,
            }}
          >
             {siteTitle} 
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
         </h1> 
      </div> */}
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
