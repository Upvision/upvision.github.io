import React from "react"
import Grid from "@material-ui/core/Grid"
import MembersCard from "../components/membersCard"
import SEO from "../components/seo"
import data from "../../data/membersData.json"

function members() {
  const members = data
  const generalSecretary = members.find(member =>
    member.post.startsWith("General Secretary")
  )

  const deputyGeneralSecretaries = members.filter(member =>
    member.post.startsWith("Deputy General Secretary")
  )

  const executiveMembers = members.filter(member =>
    member.post.startsWith("Executive Member")
  )

  return (
    <>
      <SEO title="Members" />
      <h1 className="poshead">GENERAL SECRETARY</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} md={4} lg={3}>
          <MembersCard
            name={generalSecretary.name}
            photoUrl={generalSecretary.photoUrl}
            post={generalSecretary.post}
            about={generalSecretary.about}
            igUrl={generalSecretary.igUrl}
            linkedInUrl={generalSecretary.linkedInUrl}
            githubUrl={generalSecretary.githubUrl}
          />
        </Grid>
      </Grid>

      <h1 className="poshead">DEPUTY GENERAL SECRETARY</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {deputyGeneralSecretaries.map((dgs, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <MembersCard
              name={dgs.name}
              photoUrl={dgs.photoUrl}
              post={dgs.post}
              about={dgs.about}
              igUrl={dgs.igUrl}
              linkedInUrl={dgs.linkedInUrl}
              githubUrl={dgs.githubUrl}
            />
          </Grid>
        ))}
      </Grid>

      <h1 className="poshead">EXECUTIVE MEMBERS</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {executiveMembers.map((em, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <MembersCard
              name={em.name}
              photoUrl={em.photoUrl}
              post={em.post}
              about={em.about}
              igUrl={em.igUrl}
              linkedInUrl={em.linkedInUrl}
              githubUrl={em.githubUrl}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default members
