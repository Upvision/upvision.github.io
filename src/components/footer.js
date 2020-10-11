import { Link } from "gatsby"
import React from 'react'

import "../css/footer.css"

function Footer() {
    return (
        <>
            <div className="footer">  
                © {new Date().getFullYear()},
                {` `}
                {/* <a href="https://www.gatsbyjs.com">UpVision</a> */}
                <Link
                    to="/"
                    style={{
                        color: `white`,
                    }}
                >
                    UpVision
                </Link>
            </div>
        </>
    )
}

export default Footer