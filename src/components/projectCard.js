import styles from "../css/projects.module.css"

function ProjectCard(props) {
  const { title, description, repoLink, imageURL, contributers } = props
  let image = imageURL.startsWith("https://repository-images")
    ? imageURL
    : "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.post}>
          <div className={styles.header_post}>
            <img src={image} alt={title} className={styles.main_img}/>
          </div>

          <div className={styles.body_post}>
            <div className={styles.post_content}>
              <h1 style={{ marginBottom: "5px" }}>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href={repoLink}
                >
                  {title}
                </a>
              </h1>

              {contributers.length > 0 && (
                <div className={styles.body_collaborators}>
                  <small>Contributers: </small>
                  {contributers.map((contributer, index) => {
                    return (
                      <a
                        key={index}
                        href={contributer.profileLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          src={contributer.imageURL}
                          alt={contributer.altTag}
                          className={styles.avatar}
                        />
                      </a>
                    )
                  })}
                </div>
              )}
              <hr />
              <p>
                <strong>Description - </strong>
                {description}
              </p>
            </div>
            <div className={styles.card_repoUrl}>
              <a href={repoLink} rel="noreferrer" target="_blank">
                <img src="/images/arrow.svg" alt="Repository..." width="69" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
