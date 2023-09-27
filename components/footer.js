import Link from 'next/link'
import Image from 'next/image'
import React, { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
import styles from '../styles/Footer.module.css'

import fb from '../assets/icons/facebook-2020-2-1.svg'
import github from '../assets/icons/github-icon-1.svg'
import phone from '../assets/icons/red-phone-7151.svg'
import twitter from '../assets/icons/TwitterX.svg'
import instagram from '../assets/icons/instagram-2016-5.svg'
import youtube from '../assets/icons/youtube-logo-2431.svg'
import funnycool from '../assets/gifs/funny-cool.gif'

const Footer = () => {
    const router = useRouter();
    const name = "Mark Dennis Napil";
    const Auth = () => {
        router.push('/secret/authentication');
    }
    return(
        <div className={styles.footer}>
            <div className={styles.contacts}>
            <h3>Contacts</h3>
            <Link href="/" className={styles.link}><Image src={phone} className={styles.icons} alt={name} />+639567306046</Link>
            <Link href="https://web.facebook.com/markdennis.napil" className={styles.link}><Image src={fb} className={styles.icons} alt={name}/>Facebook</Link>
            <Link href="https://www.instagram.com/markdennis_1/" className={styles.link}><Image src={instagram} className={styles.icons} alt={name} />Instagram</Link>
            <Link href="https://twitter.com/MarkDen43990737" className={styles.link}><Image src={twitter} className={styles.icons} alt={name}/>TwitterX</Link>
            </div>
            <div className={styles.mystuff}>
            <Link href="https://github.com/MarkDennisNapil" className={styles.link}><Image src={github} className={styles.icons} alt={name}/>Github</Link>
            <Link href="https://www.youtube.com/channel/UCp9ChrzB4KXEQgj65rzaMOA" className={styles.link}><Image src={youtube} className={styles.icons} alt={name}/>Youtube</Link>
            </div>
            <div className={styles.footerspace}>
                <Button><Image src={funnycool} width="86" height="86" onClick={Auth} alt={name}/></Button>
            </div>
        </div>
    )
}

export default Footer