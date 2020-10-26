import React from "react"
import arrow from "../images/arrow.svg"

function ProjectCard(props) {
  const { title, description, repoLink, imageURL, contributers } = props
  console.log(typeof(imageURL))
  let image = imageURL.startsWith("https://repository-images")? imageURL : "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  return (
    <div>
      <div className="container">
        <div className="post">
          <div className="header_post">
            <img src={image} alt={title} className="main-img" />
          </div>

          <div className="body_post">
            <div className="post_content">
              <h1 style={{ marginBottom: "5px" }}>{title}</h1>
              {(contributers.length > 0) && <div className="body_collaborators">
                <small>Contributers: </small>
                {contributers.map(contributer => {
                  return (
                    <a href={contributer.profileLink} rel="noreferrer" target="_blank">
                      <img
                        src={contributer.imageURL}
                        alt={contributer.altTag}
                        className="avatar"
                      />
                    </a>
                  )
                })}
              </div>}
              <hr />
              <p>
                <strong>Description - </strong>
                {description}
              </p>
            </div>
            <div className="card_repoUrl">
              <a href={repoLink} rel="noreferrer" target="_blank"><img src={arrow} alt="Repository..." width="69"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
