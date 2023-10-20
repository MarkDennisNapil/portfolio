import Head from 'next/head'
import Image from 'next/image'
import React, { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import SolarSystem from '../components/solarsystem'
import Planets from '../components/planets'
import styles from '../styles/Home.module.css'
import myphoto from '../public/me.png'
import Link from 'next/link'

export default function Home() {
  const router = useRouter();
  const AboutRedir = () => {
    router.push('/about');
  }
  return (
    <div className={styles.container}>
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
          <p className={styles.profession}>I'm a Software Developer.</p>
        </div>
        <div className={styles.photo}>
          <Image src={myphoto} className={styles.image} alt="Mark Dennis Napil" />
        </div>
        <div className={styles.triangle}>
          <div className={styles.triangletext}>
            I am specialised in full stack web development using
            React and Node.js, and familiar with <Link href='/about' className={styles.triangletextLink}>other programming languages and tools</Link>.
          </div>
        </div>
        <Button className={styles.memore} onClick={AboutRedir}>More about me</Button>
              <img src="https://drive.google.com/file/d/1F8nO7odsHSUO4eInCG2fDISk4Kn8AoL0/view?usp=share_link" />
      </main>
    <Footer />  
    </div>
  )
}
