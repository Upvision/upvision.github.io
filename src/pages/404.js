import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="about_container">
      <div className="about_wrapper center">
        <div className="about_header">404: Page Not Found</div>
        <div className="about_content">
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </>
)

export default NotFoundPage
