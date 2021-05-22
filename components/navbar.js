import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section className={styles['nav-container']}>
      <div className={styles['link-container']}>
        <Link href="/about">
            <a className={styles['navlink']}>about</a>
        </Link>
        <Link href="/blog">
            <a className={styles['navlink']}>blog</a>
        </Link>
        <Link href="/projects">
            <a className={styles['navlink']}>projects</a>
        </Link>
      </div>
    </section>  
  )
}


