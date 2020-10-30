import React from "react"
import EventCard from "../components/eventCard"
import "../css/events.css"
import Grid from "@material-ui/core/Grid"

function Events(props) {
  const events = [{}, {}, {}]

  return (
    <div className="body-container">
      <br />
      <br />
      <div className="header">Events</div>
      <div className="hero-section">
        <div class="card-grid">
          {events.length !== 0 ? (
            events.map((event, index) => <EventCard key={index} />)
          ) : (
            <div className="about_container">
              <div className="about_wrapper center">
                <div className="about_content">
                  <p>No events scheduled.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Events
