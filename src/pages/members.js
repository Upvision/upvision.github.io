import Grid from "@material-ui/core/Grid"
import MembersCard from "../components/membersCard"
import { NextSeo } from 'next-seo'

export async function getStaticProps() {
  import data from "../../data/membersData.json"
  return {
    props: { data }
  }
}

function members({ data }) {
  const generalSecretary = data.find(member =>
    member.post.startsWith("General Secretary")
  )

  const deputyGeneralSecretaries = data.filter(member =>
    member.post.startsWith("Deputy General Secretary")
  )

  const executiveMembers = data.filter(member =>
    member.post.startsWith("Executive Member")
  )

  return (
    <>
      <NextSeo title="Members" />
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
