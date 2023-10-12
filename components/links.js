import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Contacts.module.css'

import fb from '../assets/icons/facebook-2020-2-1.svg'
import phone from '../assets/icons/red-phone-7151.svg'
import twitter from '../assets/icons/TwitterX.svg'
import instagram from '../assets/icons/instagram-2016-5.svg'

const Links = () => {
    const name = "Mark Dennis Napil";
    return(
        <div className={styles.links}>
            <h1>My Contacts</h1>
            <Link href="/contact" className={styles.linktext}><Image src={phone} className={styles.icon} alt={name} /><label>+639463964124</label></Link>
            <Link href="https://web.facebook.com/markdennis.napil" className={styles.linktext}><Image src={fb} className={styles.icon} alt={name} /><label>Facebook</label></Link>
            <Link href="https://www.instagram.com/markdennis_1/" className={styles.linktext}><Image src={instagram} className={styles.icon} alt={name} /><label>Instagram</label></Link>
            <Link href="https://twitter.com/MarkDen43990737" className={styles.linktext}><Image src={twitter} className={styles.icon} alt={name} /><label>X</label></Link>
        </div>
    )
}

export default Links
