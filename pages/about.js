import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Planets from "../components/planets"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Skills from "../components/skills"
import styles from '../styles/About.module.css'

import me from '../public/me.png'

function About() {
    return(
        <div className={styles.container}>
            <Planets />
        <Head className={styles.head}>
            <title>About Mark Dennis Napil</title>
            <link rel="icon" href="/me.png" className={styles.headimage} />
        </Head>
        <Navigation active={"about"} color={`rgba(0, 255, 165, 1)`} />
        <section className={styles.section1}>
            <div className={styles.namebackground}>
            <div className={styles.name}>
                <Image src={me} className={styles.image} alt="Mark Dennis Napil"/>
                <p>My name is</p>
                <h1>Mark Dennis Napil</h1>
                <p>I'm a Software Engineer.</p>
            </div>
            </div>
            <div className={styles.school}>
                <p>I completed a <mark className={styles.course}>Bachelor of Science in Information Technology</mark> degree in <Link href="https://en.wikipedia.org/wiki/Surigao_del_Norte_State_University" className={styles.schoollink}><mark>Surigao Del Norte State University</mark></Link>, formerly called Surigao State College of Technology.</p>
            </div>
        </section>
        <section className={styles.skillsSection}>
            <Skills />
        </section>
        <section className={styles.section2}>
            <div className={styles.about}>
                <div className={styles.description}>
                <h3>About Me</h3>
                <p>
                    I'm Mark Dennis Iligan Napil, a tech enthusiast who loves programming and spends most of my time coding. 
                    And also loves art, and doing art work is my stress therapy if I got burned out in coding. 
                    I build full stack web application using MERN stack. And currently expanding my knowledge on software engineering field.
                    I'm adaptable and can work with teams or independently. 
                    After I graduated from college, I started freelancing as a software developer for college student's Capstone Projects. 
                    Then I created my own media content sharing application called <Link href="https://parallelium.vercel.app/" className={styles.paralleliumRef}><mark>Parallelium</mark></Link>.
                </p>
                </div>
            </div>
        </section>
        <Footer />
        </div>
    )
}

export default About
