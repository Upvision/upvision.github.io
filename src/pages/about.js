import React from "react";
import SEO from "../components/seo";
import "../css/about.css";

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <div className="about_container">
      <div className="about_wrapper">
        <div className="about_header">About Us</div>
        <div className="about_content">
          <p>
            UpVision is the Tech-Club of NIT, Delhi an appreciable initiative by
            our seniors to fuel the awareness in the field of Technology in our
            college. We,
          </p>
          <ul className="about_things">
            <li>Give students a platform to work together and bestow the
            creative mind to turn innovative ideas into reality.</li>
            <li>Teach and
            inspire students, transfer knowledge, and prepare them for outside
            world.</li>
            <li>Provide students the learning opporunities to self-enhance.</li><li>
            are a team that wants to make students learn, share and grow
            themselves in their journey.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default SecondPage;
