import React from "react"

import "../css/projects.css"
import ProjectCard from "../components/projectCard"
import Grid from "@material-ui/core/Grid"

import SEO from "../components/seo"
import data from '../../data/githubData.json'

const ProjectsPage = () => {
  return (
    <>
      <SEO title="Projects" />
      <div className="body-container">
        <br />
        <br />
        <div className="projects-header">Projects</div>
        <br />
        <Grid container spacing={3}>
          {data.map(projectCard => {
            return (
              <Grid item xs={12} sm={6} lg={4}>
                <ProjectCard
                  title={projectCard.name || "Error finding name"}
                  imageURL={projectCard.openGraphImageUrl}
                  description={projectCard.description || "No description found"}
                  repoLink={projectCard.url}
                  contributers={projectCard.contributors}
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}
export default ProjectsPage;