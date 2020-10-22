import React from "react"

import "../css/projects.css"
import ProjectCard from "../components/projectCard"
import Grid from "@material-ui/core/Grid"

import { graphql } from 'gatsby'

const ProjectsPage = ({data}) => {
  const projectCards = data.githubData.data.organization.repositories.edges
  return (
    <>
      <div className="body-container">
        <br />
        <br />
        <div className="projects-header">Projects</div>
        <br />
        <Grid container spacing={3}>
          {projectCards.map(edge => {
            let projectCard = edge.node;
            // let url = `https://api.github.com/repos/UpVision/${projectCard.name}/contributors`;
            let contributors = projectCard.collaborators.edges.map(edge => {
              return {
                altTag: edge.node.name,
                imageURL: edge.node.avatarUrl,
                profileLink: edge.node.url
              }
            })
            return (
              <Grid item xs={12} sm={6} lg={4}>
                <ProjectCard
                  title={projectCard.name || "Error finding name"}
                  imageURL={projectCard.imageURL ||  "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                  description={projectCard.description || "No description found"}
                  repoLink={projectCard.url}
                  contributers={contributors}
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

export const query = graphql`
  query onGithub {
    githubData {
      data {
        organization {
          repositories {
            edges {
              node {
                name,
                description,
                url,
                openGraphImageUrl,
                collaborators {
                  edges {
                    node {
                      name
                      url
                      avatarUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`