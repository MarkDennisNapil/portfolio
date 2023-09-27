import Head from "next/head"
import Navigation from "../components/navigation"
import Links from "../components/links"
import Email from "../components/email"
import Planets from "../components/planets"
import styles from '../styles/Contacts.module.css'

function Contacts() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Mark Dennis Napil</title>
                <link rel="icon" href="/me.png" className={styles.headimage} />
            </Head>
            <Navigation active={"contact"} color={`rgba(0, 255, 165, 1)`} />
            <section className={styles.section1}>
                <Links />
                <Email />
            </section>
            <Planets />
        </div>
    )
}
export default Contacts