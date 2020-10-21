import React from "react"

function ProjectCard(props) {
  const { title, description, repoLink, imageURL, contributers } = props

  //   const contributers = [
  //     {
  //       altTag: "Beeta Samad",
  //       imgURL:
  //         "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
  //       profileLink: "https://www.google.com",
  //     },
  //     {
  //       altTag: "Beeta Samad",
  //       imgURL:
  //         "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
  //       profileLink: "https://www.google.com",
  //     },
  //     {
  //       altTag: "Beeta Samad",
  //       imgURL:
  //         "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
  //       profileLink: "https://www.google.com",
  //     },
  //     {
  //       altTag: "Beeta Samad",
  //       imgURL:
  //         "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
  //       profileLink: "https://www.google.com",
  //     },
  //     {
  //       altTag: "Beeta Samad",
  //       imgURL:
  //         "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
  //       profileLink: "https://www.google.com",
  //     },
  //     {
  //       altTag: "Beeta Samad",
  //       imgURL:
  //         "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
  //       profileLink: "https://www.google.com",
  //     },
  //   ]

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
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci animi assumenda cumque deserunt dolorum ex
                exercitationem.
              </p> */}
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
