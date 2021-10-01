import { NextSeo } from 'next-seo'
import styles from "../css/about.module.css"

const AboutUs = () => (
  <>
    <NextSeo title="About Us" />
    <div className={styles.about_container}>
      <div className={styles.about_wrapper}>
        <div className={styles.about_header}>About Us</div>
        <div className={styles.about_content}>
          <p>
            UpVision is the Tech-Club of NIT, Delhi - a collective initiative by
            the young minds of students to fuel the awareness in the field of
            Technology in our college. We,
          </p>
          <ul className={styles.about_things}>
            <li>
              Give students a platform to work together and bestow the creative
              mind to turn innovative ideas into reality.
            </li>
            <li>
              Teach and inspire students, transfer knowledge, and prepare them
              for outside world.
            </li>
            <li>Provide students the learning opporunities to self-enhance.</li>
            <li>
              are a team that wants to make students learn, share and grow
              themselves in their journey.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default AboutUs
