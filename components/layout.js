import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Jan'
export const siteTitle = 'Jan\'s blog'

export default function Layout({ children, currentPage }) {
  return (
    <div className={currentPage === 'home' ? styles.homecontainer : styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jan's website build with next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      {currentPage !== 'home' &&
        <header className={styles.header}>
          {currentPage === 'blog' ? (
            <>
              <Image
                priority
                src="/images/fillmurray.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/fillmurray.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
      }
      <main>{children}</main>
      {currentPage !== 'home'  && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}