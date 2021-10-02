import styles from "../css/events.module.css"
import moment from "moment-mini"

function EventCard(props) {
  const { title, description, attachments, link } = props
  const startDate = moment(props.startDate)
  const endDate = moment(props.endDate)
  let imageAttachment = null;
  if (attachments)
    imageAttachment = attachments.find(a => a.mimeType.startsWith("image/")) || null;
  let imageUrl = imageAttachment
    ? "https://drive.google.com/uc?export=view&id=" + imageAttachment.fileId
    : "https://drive.google.com/uc?export=view&id=1FQCwCAFxeagUXASyYQEIFljeQ-dTqiOU"

  return (
    <>
      <a className={styles.card} href={link}>
        <div
          className={styles.card__background}
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #13e8b5, #13a884 )",
          }}
        ></div>
        <div className={styles.card__content}>
          <img src={imageUrl} alt={title} className={styles.img_on_hover} />
          <div className={styles.card__description}>
            <p className={styles.card__category}>
              {startDate.format("Do MMMM YYYY")} -{" "}
              {endDate.format("Do MMMM YYYY")}
            </p>
            <h3 className={styles.card__heading}>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </>
  )
}

export default EventCard
