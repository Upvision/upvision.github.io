import Grid from "@material-ui/core/Grid"

import styles from "../css/projects.module.css"
import mockData from '../../mockData/githubData.json'
import ProjectCard from "../components/projectCard"
import { NextSeo } from 'next-seo'
import Container from "../components/common/container"

export async function getStaticProps() {
  // ! Github Data
  const ghKey = process.env.GHTOKEN
  
  let data = {}
  if (ghKey) {
    const query = `query OrgDetails {
      organization(login:"UpVision") {
        repositories(first: 10, orderBy: {field: STARGAZERS, direction: DESC}) {
          edges {
            node {
              name
              description
              url
              stargazers {
                totalCount
              }
              openGraphImageUrl
            }
          }
        }
      }
    }`

    let githubData = await fetch(
      'https://api.github.com/graphql',
      {
        method: 'POST',
        headers: { 
          'Content-Type' : 'application/json',
          'Authorization': `bearer ${ ghKey }`
        },
        body: JSON.stringify({ query }),
      }
    ).then(res => res.json())

    await Promise.all(
      githubData.organization.repositories.edges.map(async edge => {
        edge.node.contributors = []
        let contributors = await fetch(
          `https://api.github.com/repos/UpVision/${edge.node.name}/contributors`,
          {
            method: 'GET',
            headers: {
              'Authorization': `token ${ghKey}`,
            },
          }
        )

        if (contributors.data) {
          contributors.data.forEach(contributor => {
            edge.node.contributors.push({
              profileLink: contributor.url,
              imageURL: contributor.avatar_url,
              altTag: contributor.login,
            })
          })
        }
      })
    )

    data = githubData.organization.repositories.edges.map(edge => {
      return edge.node
    })
  } else {
    data = mockData
  }

  return {
    props: { data }
  }
}

const ProjectsPage = ({ data }) => {
  return (
    <>
      <NextSeo title="Projects" />
      <Container>
        <br />
        <br />
        <div className={styles.projectsHeader}>Projects</div>
        <br />
        <Grid container spacing={3}>
          {data.map((projectCard, index) => {
            return (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <ProjectCard
                  key={index}
                  title={projectCard.name || "Error finding name"}
                  imageURL={projectCard.openGraphImageUrl}
                  description={
                    projectCard.description || "No description found"
                  }
                  repoLink={projectCard.url}
                  contributers={projectCard.contributors}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default ProjectsPage
