import React from "react"
import "../css/members.css"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Grid from "@material-ui/core/Grid"
import GitHubIcon from "@material-ui/icons/GitHub"
function MembersCard(props) {
  const { membername, imgprof, post, about, insta, linkedin, github } = props
  return (
    <>
      <Grid>
        <div className="flip-card" style={{ width: "320px", height: "320px" }}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={imgprof}
                alt="Img"
                style={{ width: 320, height: 320, borderRadius: 320 / 2 }}
              />
            </div>
            <div
              className="flip-card-back"
              style={{ width: 320, height: 320, borderRadius: 320 / 2 }}
            >
              <div
                style={{ textAlign: "center", margin: "6px", padding: "6px" }}
              >
                <br />
                <h3 style={{ fontSize: "1.45em" }}> {membername} </h3>
                <small>{post}</small>

                <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                  <hr className="hr-style" />
                  <p>{about}</p>
                  <Grid>
                    <a href={insta} className="icons">
                      <InstagramIcon />
                    </a>
                    <a href={linkedin} className="icons">
                      <LinkedInIcon />
                    </a>
                    <a href={github} className="icons">
                      <GitHubIcon />
                    </a>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2
              style={{ textAlign: "center", color: "white", marginTop: "10px" }}
            >
              {membername}
            </h2>
          </div>
        </div>
      </Grid>
    </>
  )
}
export default MembersCard
