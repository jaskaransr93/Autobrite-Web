import Head from 'next/head'
import Feautres from '../components/Features'
import Hero from '../components/Hero'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Autobrite International | Home</title>
        <meta name="description" content="Autobrite International is manufacturer of Auto Electrical parts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Feautres />
      </main>
    </div>
  )
}
