import Link from 'next/link'

import styles from "../css/footer.module.css"

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        © {new Date().getFullYear()},{` `}
        <Link href="/">
          <a
            style={{
              color: `white`,
            }}
          >
            UpVision
          </a>
        </Link>
      </div>
    </>
  )
}

export default Footer
