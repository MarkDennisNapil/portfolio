import React, {useState, useEffect} from "react"
import { Button } from "react-bootstrap"
import styles from '../styles/Navigation.module.css'

const Navigation = (props) => {
    const [home, setHome] = useState('');
    const [project, setProject] = useState('');
		const [art, setArt] = useState("");
    const [contact, setContact] = useState('');
    const [about, setAbout] = useState('');
    useEffect(() => {
        if(props.active === 'home'){
            setHome(props.color)
        } 
        else if(props.active === 'project'){
            setProject(props.color)
        }
        else if (props.active === 'art') {
            setProject(props.color)
        }
        else if(props.active === 'contact'){
            setContact(props.color)
        }
        else if(props.active === 'about') {
            setAbout(props.color)
        } else {
            console.log(Date.toString() + "")
        }
    }, [])
    return(
        <div className={styles.navigation}>
            <a href="/"><Button style={{background: `${home}`}} onClick={() => setHome(props.color)}>Home</Button></a>
            <a href="/project"><Button style={{background: `${project}`}} onClick={() => setProject(props.color)}>Projects</Button></a>
            <a href="/art"><Button style={{background: `${art}`}} onClick={() => setArt(props.color)}>Artworks</Button></a>
            <a href="/contact"><Button style={{background: `${contact}`}} onClick={() => setContact(props.color)}>Contacts</Button></a>
            <a href="/about"><Button style={{background: `${about}`}} onClick={() => setAbout(props.color)}>About Me</Button></a>
        </div>
    )
}

export default Navigation;
