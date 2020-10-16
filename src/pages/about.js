import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/about.css"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <div className="about_container">
      <div className="about_wrapper">
        <div className="about_header">About Us</div>
        <div className="about_content">
          <p>
            UpVision is a Tech-Club of NIT, Delhi an appreciable initiative by
            our seniors to fuel the awareness in the field of Technology in our
            college. We give students a platform to work together and bestow the
            creative mind to turn innovative ideas into reality. We teach and
            inspire students, transfer knowledge, and prepare them for outside
            world.
          </p>
          <p>
            We provide students the learning opporunities to self-enhance. We
            are a team that wants to make students learn, share and grow
            themselves in their journey.
          </p>
        </div>
      </div>
    </div>
  </>
)

export default SecondPage
