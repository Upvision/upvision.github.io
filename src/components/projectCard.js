import React from "react"

function ProjectCard(props) {
  const { title, description, repoLink, imageURL, contributers } = props

  return (
    <div>
      <div class="container">
        <div class="post">
          <div class="header_post">
            <img src={imageURL} alt="" className="main-img" />
          </div>

          <div class="body_post">
            <div class="post_content">
              <h1 style={{ marginBottom: "5px" }}>{title}</h1>
              <small>Contributers: </small>
              {contributers.map(contributer => {
                return (
                  <a href={contributer.profileLink} target="_blank">
                    <img
                      src={contributer.imageURL}
                      alt={contributer.altTag}
                      className="avatar"
                    />
                  </a>
                )
              })}
              <hr />
              <p>
                <strong>Description - </strong>
                {description}
              </p>
              <a href={repoLink} style={{ float: "right" }}>
                GO TO THE PROJECT REPO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
