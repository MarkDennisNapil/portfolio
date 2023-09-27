import styles from '../styles/Planets.module.css'
const Planets = () => {
    return(
        <div className={styles.space}>
            <div className={styles.container}>
            <div className={styles.sun}></div>
            <div className={styles.earth}>
                <div className={styles.moon}></div>
                <div className={styles.moon2}><h1>💸</h1></div>
                <button>🛰️</button>
            </div>
            </div>
        </div>
    )
}

export default Planets