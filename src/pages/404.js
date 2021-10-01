import { NextSeo } from 'next-seo'
import styles from "../css/about.module.css"

const NotFoundPage = () => (
  <>
    <NextSeo title="404: Not found" />
    <div className={styles.about_container}>
      <div className={styles.about_wrapper + styles.center}>
        <div className={styles.about_header}>404: Page Not Found</div>
        <div className={styles.about_content}>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </>
)

export default NotFoundPage
