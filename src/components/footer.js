import { Link } from 'next/link'

import "../css/footer.css"

function Footer() {
    return (
        <>
            <div className="footer">  
                © {new Date().getFullYear()},
                {` `}
                <Link href="/">
                    <a 
                        style={{
                            color: `white`,
                        }}
                    >UpVision</a>
                </Link>
            </div>
        </>
    )
}

export default Footer