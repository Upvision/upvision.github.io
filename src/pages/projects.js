import React from "react"

import "../css/projects.css"
import ProjectCard from "../components/projectCard"
import Grid from "@material-ui/core/Grid"

const ProjectsPage = () => {
  const projectCards = [
    {
      title: "Project_Name_420_69",
      imageURL:
        "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Adipisci animi assumenda cumque
      deserunt dolorum ex exercitationem. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Adipisci animi assumenda cumque
      deserunt dolorum ex exercitationem. Adipisci animi assumenda cumque
      deserunt dolorum ex exercitationem.`,
      repoLink: "https://www.google.com",
      contributers: [
        {
          altTag: "Beeta Samad",
          imageURL:
            "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
          profileLink: "https://www.google.com",
        },
        {
          altTag: "Beeta Samad",
          imageURL:
            "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
          profileLink: "https://www.google.com",
        },
      ],
    },
    {
      title: "Project_TITLE_69696969",
      imageURL:
        "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: `Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci animi assumenda cumque
        deserunt dolorum ex exercitationem. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci animi assumenda cumque
        deserunt dolorum ex exercitationem. Adipisci animi assumenda cumque
        deserunt dolorum ex exercitationem.`,
      repoLink: "https://www.google.com",
      contributers: [
        {
          altTag: "Beeta Samad",
          imageURL:
            "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
          profileLink: "https://www.google.com",
        },
        {
          altTag: "Beeta Samad",
          imageURL:
            "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
          profileLink: "https://www.google.com",
        },
        {
          altTag: "Beeta Samad",
          imageURL:
            "https://avatars2.githubusercontent.com/u/47863077?s=460&u=43a95d2f72a3d7e46a413fa5621a717659d24aa9&v=4",
          profileLink: "https://www.google.com",
        },
      ],
    },
  ]
  return (
    <>
      <div className="body-container">
        <br />
        <br />
        <div className="projects-header">Projects</div>
        <br />
        <Grid container spacing={3}>
          {projectCards.map(projectCard => {
            return (
              <Grid item xs={12} sm={6} lg={4}>
                <ProjectCard
                  title={projectCard.title}
                  imageURL={projectCard.imageURL}
                  description={projectCard.description}
                  repoLink={projectCard.repoLink}
                  contributers={projectCard.contributers}
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}
export default ProjectsPage
