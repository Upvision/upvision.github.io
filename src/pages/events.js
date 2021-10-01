import { NextSeo } from 'next-seo'

import styles from "../css/events.module.css"
import aboutStyles from "../css/about.module.css"
import Container from '../components/common/container'
import EventCard from "../components/eventCard"
import data from "../../mockData/calendarData.json"

export async function getStaticProps() {
  // const googleAuth = process.env.GCAUTH
  // const calendarId = "rishi1998@gmail.com"

  // let now = new Date();
  // let nowp3 = new Date(now);
  // nowp3.setMonth(nowp3.getMonth() + 3);
  // if (nowp3.getDate() != now.getDate()) nowp3.setDate(0);

  // await axios({
  //     url: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
  //     method: 'get',
  //     params: {
  //         key: `${ googleAuth }`,
  //         timeMax: `${ nowp3.toISOString() }`,
  //         timeMin: `${ now.toISOString() }`
  //     }
  // }).then(res => {
  //     fs.writeFile('./data/calendarData.json', JSON.stringify(res.data.items, null, 2), err => {
  //         if (err) throw err;
  //         console.log("Calendar Data written, succesfully!");
  //     })
  // });
  return {
    props: { data }
  }
}

function Events({ data }) {

  return (
    <Container>
      <NextSeo title="Events" />
      <br />
      <br />
      <div className={styles.header}>Events</div>
      <div className={styles.heroSection}>
        <div className={styles.cardGrid}>
          {data.length !== 0 ? (
            data.map((event, index) => (
              <EventCard
                key={index}
                title={event.summary}
                description={event.description}
                startDate={event.start.date}
                endDate={event.end.date}
                attachments={event.attachments}
                link={event.htmlLink}
              />
            ))
          ) : (
            <div className={aboutStyles.about_container}>
              <div className={aboutStyles.about_wrapper + aboutStyles.center}>
                <div className={aboutStyles.about_content}>
                  <p>No events scheduled.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Events
