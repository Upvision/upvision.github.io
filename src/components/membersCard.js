import React from "react"
import "../css/members.css"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Grid from "@material-ui/core/Grid"
import GitHubIcon from "@material-ui/icons/GitHub"
function MembersCard(props) {
  let { name, about, post, igUrl, linkedInUrl, githubUrl } = props

  const [photoUrl, setPhotoUrl] = React.useState(props.photoUrl)

  const retrieveIdFromDriveLink = driveUrl => {
    const startIndexOfId = driveUrl.indexOf("/file/d/") + 8
    const lastIndexOfId =
      driveUrl.substring(startIndexOfId).indexOf("/") + startIndexOfId
    return driveUrl.substring(startIndexOfId, lastIndexOfId)
  }
  React.useEffect(() => {
    if (photoUrl && photoUrl.startsWith("https://drive.google.com")) {
      const id = retrieveIdFromDriveLink(photoUrl)
      setPhotoUrl("https://drive.google.com/uc?export=view&id=" + id)
    }

    if (!photoUrl)
      setPhotoUrl(
        "https://drive.google.com/uc?export=view&id=1km3V6PP70MTUsNWFEgdVea6jv-0BMnRT"
      )
  }, [photoUrl])

  const imageError = () => {
    setPhotoUrl(
      "https://drive.google.com/uc?export=view&id=1km3V6PP70MTUsNWFEgdVea6jv-0BMnRT"
    )
  }

  return (
    <>
      <Grid>
        <div className="flip-card" style={{ width: "320px", height: "320px" }}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={photoUrl}
                alt={name + " | Image"}
                onError={imageError}
                style={{ width: 320, height: 320, borderRadius: 320 / 2 }}
              />
            </div>
            <div
              className="flip-card-back"
              style={{ width: 320, height: 320, borderRadius: 320 / 2 }}
            >
              <div
                style={{ textAlign: "center", margin: "6px", padding: "25px" }}
              >
                <br />
                <h3 style={{ fontSize: "1.45em" }}> {name} </h3>
                <small>{post}</small>

                <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                  <hr className="hr-style" />
                  {about ? <p>{about}</p> : null}
                  <Grid>
                    {igUrl ? (
                      <a href={igUrl} className="icons">
                        <InstagramIcon />
                      </a>
                    ) : null}
                    {linkedInUrl ? (
                      <a href={linkedInUrl} className="icons">
                        <LinkedInIcon />
                      </a>
                    ) : null}
                    {githubUrl ? (
                      <a href={githubUrl} className="icons">
                        <GitHubIcon />
                      </a>
                    ) : null}
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2
              style={{ textAlign: "center", color: "white", marginTop: "10px" }}
            >
              {name}
            </h2>
          </div>
        </div>
      </Grid>
    </>
  )
}
export default MembersCard
