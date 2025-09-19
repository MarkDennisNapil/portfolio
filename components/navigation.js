import React, {useState, useEffect} from "react"
import { Button } from "react-bootstrap"
import styles from '../styles/Navigation.module.css'

const Navigation = (props) => {
    const [home, setHome] = useState('');
    const [project, setProject] = useState('');
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
            console.log(Date.toString())
        }
    }, [])
    return(
        <div className={styles.navigation}>
            <a href="/"><Button style={{background: `${home}`}} onClick={() => setHome(props.color>
            <a href="/project"><Button style={{background: `${project}`}} onClick={() => setProjec>
            <a href="/art"><Button style={{background: `${art}`}} onClick={() => setProject(props.>
            <a href="/contact"><Button style={{background: `${contact}`}} onClick={() => setContac>
            <a href="/about"><Button style={{background: `${about}`}} onClick={() => setAbout(prop>
        </div>
    )
}

export default Navigation;

