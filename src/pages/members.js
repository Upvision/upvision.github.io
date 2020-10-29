import React from "react"
import Grid from "@material-ui/core/Grid"
import MembersCard from "../components/membersCard"
import SEO from "../components/seo"

function members() {
  return (
    <>
      <SEO title="Members" />
      <h1 className="poshead">PRESIDENT</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <MembersCard
          membername="JOHN WICK"
          imgprof="https://picsum.photos/200/300"
          post="President"
          about="Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ"
          insta="https://www.instagram.com/"
          linkedin="https://www.linkedin.com/"
          github="https://www.github.com/"
        />
        <MembersCard
          membername="JOHN WICK"
          imgprof="https://picsum.photos/200/300"
          post="President"
          about="Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ"
          insta="https://www.instagram.com/"
          linkedin="https://www.linkedin.com/"
          github="https://www.github.com/"
        />
        <MembersCard
          membername="JOHN WICK"
          imgprof="https://picsum.photos/200/300"
          post="President"
          about="Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ"
          insta="https://www.instagram.com/"
          linkedin="https://www.linkedin.com/"
          github="https://www.github.com/"
        />
      </Grid>

      <h1 className="poshead">VICE PRESIDENT</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <MembersCard
          membername="JOHN WICK"
          imgprof="https://picsum.photos/300/300"
          post="President"
          about="Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ"
          insta="https://www.instagram.com/"
          linkedin="https://www.linkedin.com/"
          github="https://www.github.com/"
        />
        <MembersCard
          membername="JOHN WICK"
          imgprof="https://picsum.photos/300/300"
          post="President"
          about="Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ"
          insta="https://www.instagram.com/"
          linkedin="https://www.linkedin.com/"
          github="https://www.github.com/"
        />
      </Grid>

      <h1 className="poshead">VOLUNTEER</h1>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <MembersCard
          membername="JOHN WICK"
          imgprof="https://picsum.photos/300/300"
          post="President"
          about="Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ Ex intern at XYZ"
          insta="https://www.instagram.com/"
          linkedin="https://www.linkedin.com/"
          github="https://www.github.com/"
        />
      </Grid>
    </>
  )
}

export default members
