import Image from 'next/image'
import styles from '../styles/Skills.module.css'

import js from '../assets/icons/logo-javascript.svg'
import java from '../assets/icons/java-4.svg'
import php from '../assets/icons/php-1.svg'
import html from '../assets/icons/html-5-logo-svgrepo-com.svg'
import css from '../assets/icons/css-3-svgrepo-com.svg'
import reactjs from '../assets/icons/react.svg'
import nextjs from '../assets/icons/nextjs-2.svg'
import nodejs from '../assets/icons/nodejs.svg'
import expressjs from '../assets/icons/icons8-express-js.svg'
import mongodb from '../assets/icons/mongodb-icon-1-1.svg'
import mysql from '../assets/icons/mysql-logo.svg'

const Skills = () => {
    return(
        <div className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.gridbackground}>
            <div className={styles.grid}>
                <h3>Programming Languages</h3>
                <span className={styles.item}><Image src={js} className={styles.icons} alt="javascript" />JavaScript</span>
                <span className={styles.item}><Image src={java} className={styles.icons} alt="java" />Java</span>
                <span className={styles.item}><Image src={php} className={styles.icons} alt="php" />PHP</span>
            </div>
            </div>
            <div className={styles.gridbackground}>
            <div className={styles.grid}>
                <h3>Frontend</h3>
                <span className={styles.item}><Image src={reactjs} className={styles.icons} alt="reactjs" />React</span>
                <span className={styles.item}><Image src={nextjs} className={styles.icons} alt="nextjs" />NextJS</span>
                <span className={styles.item}><Image src={html} className={styles.icons} alt="html" /><Image src={css} className={styles.icons} alt="css" />HTML & CSS</span>
            </div>
            </div>
            <div className={styles.gridbackground}>
            <div className={styles.grid}>
                <h3>Backend</h3>
                <span className={styles.item}><Image src={nodejs} className={styles.icons} alt="nodejs" />NodeJS</span>
                <span className={styles.item}><Image src={expressjs} className={styles.icons} alt="express" />ExpressJS</span>
                <span className={styles.item}><Image src={mongodb} className={styles.icons} alt="mongodb" />MongoDB</span>
                <span className={styles.item}><Image src={mysql} className={styles.icons} alt="mysql" />MySQL</span>
            </div>
            </div>
        </div>
    )
 }

export default Skills