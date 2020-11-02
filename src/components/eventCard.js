import React from "react"
import "../css/events.css"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import moment from "moment-mini"

function EventCard(props) {
  const { title, description, attachments, link } = props
  const startDate = moment(props.startDate)
  const endDate = moment(props.endDate)
  let imageAttachment = null;
  if (attachments)
    imageAttachment = attachments.find(a => a.mimeType.startsWith("image/")) || null;
  let imageUrl = imageAttachment
    ? "https://drive.google.com/uc?export=view&id=" + imageAttachment.fileId
    : "https://drive.google.com/uc?export=view&id=1FQCwCAFxeagUXASyYQEIFljeQ-dTqiOU"

  return (
    <>
      <a className="card" href={link}>
        <div
          className="card__background"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #13e8b5, #13a884 )",
          }}
        ></div>
        <div className="card__content">
          <Grid container spacing={3}>
            <Box clone order={{ xs: 2, md: 1 }}>
              <Grid item xs={12} md={3} lg={4}>
                <img src={imageUrl} alt={title} className={"img-on-hover "} />
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, md: 2 }}>
              <Grid item xs={12} md={9} lg={8}>
                <p className="card__category">
                  {startDate.format("Do MMMM YYYY")} -{" "}
                  {endDate.format("Do MMMM YYYY")}
                </p>
                <h3 className="card__heading">{title}</h3>
                <p>{description}</p>
              </Grid>
            </Box>
          </Grid>
        </div>
      </a>
    </>
  )
}

export default EventCard
