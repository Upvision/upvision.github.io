import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Grid from "@material-ui/core/Grid"
import Slider from "@material-ui/core/Slider"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

import "../css/navbar.css"
import { transparent } from "material-ui/styles/colors"

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
        fontSize: "calc(0.5rem + 0.4vw)",
        color: "#13a884",
      },
      markLabelActive: {
        fontSize: "calc(0.5rem + 0.4vw)",
        color: "#ffffff",
      },
      mark: {
        backgroundColor: transparent,
      },
      markActive: {
        backgroundColor: transparent,
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
    label: "PROJECTS",
  },
  {
    value: 60,
    label: "EVENTS",
  },
  {
    value: 80,
    label: "MEMBERS",
  },
  {
    value: 100,
    label: "CONTACT US",
  },
]

const siteMap = [
  "/",
  "/about/",
  "/projects/",
  "/events/",
  "/members/",
  "/contactus/",
]

function Navbar(props) {
  const { mark, setMark, path } = props
  let location = path.pathname
  const [value, setValue] = React.useState(0)
  const [expectedValue, setExpectedValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  React.useEffect(() => {
    const index = siteMap.findIndex(site => site === location)
    setValue(index * 20)
    setExpectedValue(index * 20)
  }, [mark, location])

  React.useEffect(() => {
    let currentValue = value
    let timer = setInterval(function () {
      if (value === expectedValue) clearInterval(timer)
      else {
        if (currentValue < expectedValue) setValue(currentValue++)
        else if (currentValue > expectedValue) setValue(currentValue--)
      }
    }, 7)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCommittedChange = (event, newValue) => {
    const index = Math.floor(newValue / 20)
    const finalValue =
      index * 20 + Math.round((newValue - index * 20) / 20) * 20
    if (setMark) setMark(finalValue)
    let currentValue = value
    let timer = setInterval(function () {
      if (value === finalValue) clearInterval(timer)
      else {
        if (currentValue < finalValue) setValue(currentValue++)
        else if (currentValue > finalValue) setValue(currentValue--)
      }
    }, 7)
    navigate(siteMap[Math.max(0, finalValue / 20)])
  }

  // React.useEffect(() => {
  //   window.addEventListener("scroll", event => {
  //     console.log(event)
  //   })
  // })

  return (
    <>
      <Grid container spacing={3} justify="center" id="nav">
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
