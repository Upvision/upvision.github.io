import { navigate } from "gatsby"
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
        height: "12px",
        width: "12px",
        color: "#13e8b5",
      },
      track: {
        height: "3px",
        color: "#13a884",
      },
      rail: {
        height: "3px",
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
  }
]

const siteMap = [
  "/", "/about/", "/404/", "/404/", "/404/", "/404/"
]

function Navbar({ mark }) {
  var timeout;
  const [value, setValue] = React.useState(mark)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleCommittedChange = (event, newValue) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      let index = Math.round(newValue/20);
      setValue(index*10);
      navigate(siteMap[Math.max(0, index)]);
    }, 0)
  }

  return (
    <>
      <Grid container spacing={3} justify="center" className="nav">
        <Grid item xs={10} md={8} lg={6}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              min={0}
              max={100}
              value={value}
              onChange={handleChange}
              onChangeCommitted={handleCommittedChange}
              aria-labelledby="continuous-slider"
              marks={marks}
            />
          </ThemeProvider>
        </Grid>
      </Grid>
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
