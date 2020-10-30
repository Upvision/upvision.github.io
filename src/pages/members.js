import React from "react"
import Grid from "@material-ui/core/Grid"
import MembersCard from "../components/membersCard"
import SEO from "../components/seo"

function members() {
  const generalSecretary = {
    membername: "JOHN WICK",
    imgprof: "https://picsum.photos/500/500",
    post: "President",
    about:
      "Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ",
    insta: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    github: "https://www.github.com/",
  }

  const deputyGeneralSecretaries = [
    {
      membername: "JOHN WICK",
      imgprof: "https://picsum.photos/500/500",
      post: "President",
      about:
        "Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ",
      insta: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://www.github.com/",
    },
  ]

  const executiveMembers = [
    {
      membername: "JOHN WICK",
      imgprof: "https://picsum.photos/500/500",
      post: "President",
      about:
        "Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ",
      insta: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://www.github.com/",
    },
    {
      membername: "JOHN WICK",
      imgprof: "https://picsum.photos/500/500",
      post: "President",
      about:
        "Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ",
      insta: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://www.github.com/",
    },
    {
      membername: "JOHN WICK",
      imgprof: "https://picsum.photos/500/500",
      post: "President",
      about:
        "Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ",
      insta: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://www.github.com/",
    },
    {
      membername: "JOHN WICK",
      imgprof: "https://picsum.photos/500/500",
      post: "President",
      about:
        "Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ",
      insta: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://www.github.com/",
    },
    {
      membername: "JOHN WICK",
      imgprof: "https://picsum.photos/500/500",
      post: "President",
      about:
        "Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ",
      insta: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://www.github.com/",
    },
    {
      membername: "JOHN WICK",
      imgprof: "https://picsum.photos/500/500",
      post: "President",
      about:
        "Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ",
      insta: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://www.github.com/",
    },
  ]

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
            membername={generalSecretary.membername}
            imgprof={generalSecretary.imgprof}
            post={generalSecretary.post}
            about={generalSecretary.about}
            insta={generalSecretary.insta}
            linkedin={generalSecretary.linkedin}
            github={generalSecretary.github}
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
        {deputyGeneralSecretaries.map(dgs => (
          <Grid item xs={12} md={4} lg={3}>
            <MembersCard
              membername={dgs.membername}
              imgprof={dgs.imgprof}
              post={dgs.post}
              about={dgs.about}
              insta={dgs.insta}
              linkedin={dgs.linkedin}
              github={dgs.github}
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
        {executiveMembers.map(em => (
          <Grid item xs={12} md={4} lg={3}>
            <MembersCard
              membername={em.membername}
              imgprof={em.imgprof}
              post={em.post}
              about={em.about}
              insta={em.insta}
              linkedin={em.linkedin}
              github={em.github}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default members
