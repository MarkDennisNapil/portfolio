import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import SolarSystem from '../components/solarsystem'
import Planets from '../components/planets'
import styles from '../styles/Home.module.css'
import myphoto from '../public/me.png'
import Link from 'next/link'
import backgroundImg from '../assets/background/scattered-forcefields.svg'

export default function Home() {
  return (
    <div className={styles.container} styles={backgroundImage: `url(${backgroundImg})`}>
      <Planets />
      <SolarSystem />
      <Head className={styles.head}>
        <title>Mark Dennis Napil</title>
        <link rel="icon" href="/me.png" className={styles.headimage} />
      </Head>
      <Navigation active={"home"} color={`rgba(0, 255, 165, 1)`} />
      <main className={styles.section1}>
        <div className={styles.intro}>
          <p className={styles.line1}>Hi, my name is</p>
          <h1 className={styles.name}>Mark Dennis Napil</h1>
          <p className={styles.profession}>I'm a Software Engineer.</p>
        </div>
        <div className={styles.photo}>
          <Image src={myphoto} className={styles.image} alt="Mark Dennis Napil" />
        </div>
        <div className={styles.triangle}>
          <div className={styles.triangletext}>
            I am specialised in full stack web development using
            React and Nodejs, and <Link href='/about' className={styles.triangletextLink}>more</Link>.
          </div>
        </div>
      </main>
    <Footer />  
    </div>
  )
}
