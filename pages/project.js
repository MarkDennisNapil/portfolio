import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import Planets from '../components/planets'
import ProjectItem from '../components/ProjectItem'
import Navigation from '../components/navigation'
import styles from '../styles/Projects.module.css'
import plus from '../assets/svgs/solid/plus.svg'
import API from '../config/api'

const Projects = () => {
    const router = useRouter();
    const addtext = styles.btntext;
    const [addbtntext, setaddbtntext] = useState(addtext);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`${API}/project`)
        .then(response => {
            setProjects(response.data)
        })
        .catch(error => {
            console.log(error);
        });
    }, [])
    const AddProject = () => {
        if(addbtntext == addtext){
            setaddbtntext(styles.btntextshow);
            router.push('/project/add')
        } else {
            setaddbtntext(styles.btntext);
        }
    }
    const Projects = () => {
        return projects.map((item, i) => {
            return <ProjectItem item={item}/>;
        })
    }
    return(
        <div className={styles.container}>
            <Planets />
            <Head className={styles.head}>
            <title>Projects of Mark Dennis Napil</title>
            <link rel="icon" href="/me.png" className={styles.headimage} />
            </Head>
            <Navigation active={"project"} color={`rgba(0, 255, 165, 1)`} />
            <main className={styles.main}>
            <div className={styles.topbar}>
                <h1>Projects</h1>
                <Button onClick={AddProject} className={styles.addbtn}><Image src={plus} className={styles.addbtnimage}/><span className={addbtntext}>Add Project</span></Button>
            </div>
            <div className={styles.projects}>
            {Projects()}
            </div>
            </main>
        </div>
    )
}

export default Projects