import React from "react"
import "../css/events.css"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

function EventCard(props) {
  return (
    <>
      <a class="card" href="#">
        <div
          class="card__background"
          style={{
            // backgroundImage:
            //   "url('https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundImage:
              "linear-gradient(to bottom right, #13e8b5, #13a884 )",
          }}
        ></div>
        <div class="card__content">
          <Grid container spacing={3}>
            <Box clone order={{ xs: 2, md: 1 }}>
              <Grid item xs={12} md={3} lg={4} alignContent="center">
                <img
                  src="http://www.dynamicdrive.com/cssexamples/media/ocean.jpg"
                  className={"img-on-hover "}
                />
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, md: 2 }}>
              <Grid item xs={12} md={9} lg={8}>
                <p class="card__category">
                  21st August 2021 - 23rd August 2021
                </p>
                <h3 class="card__heading">Saptrang - Cultural Fest 2021</h3>
                <p>
                  They say true love has a habit of coming back and they are
                  right. Voila! It’s that time of the year again. Saptrang’20 –
                  The annual cultural fest of NITD is here with so much
                  excitement up your sleeves that will leave you spellbound.
                </p>
              </Grid>
            </Box>
          </Grid>
        </div>
      </a>
    </>
  )
}

export default EventCard
