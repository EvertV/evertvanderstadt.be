import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jaimy IFrame test</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />

      </Head>

      <main className={styles.main}>
        <iframe src="https://jaimystaging.be/fr/service/lp/boiler-maintenance-iframe/?utm_source=YOUR_COMPANY_NAME" height="517" width="460" title="Jaimy by Belfius boiler maintenance" />

      </main>

      <footer className={styles.footer}>
        Powered by&nbsp;<strong>Belgian beers</strong>
      </footer>
    </div>
  )
}
