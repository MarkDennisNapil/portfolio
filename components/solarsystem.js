import { Button } from 'react-bootstrap'
import styles from '../styles/Solarsystem.module.css'
const SolarSystem = () => {
    return(
        <div className={styles.space}>
            <div className={styles.container}>
            <div className={styles.sun}></div>
            <div className={styles.earth}>🌏
                <div className={styles.moon}>🛸</div>
            </div>
            <div className={styles.mars}>
                <div className={styles.marsmoon1}><Button>🛰️</Button></div>
                <div className={styles.marsmoon2}><Button>🚀</Button></div>
            </div>
            </div>
        </div>
    )
}

export default SolarSystem