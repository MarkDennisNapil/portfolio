import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "react-bootstrap"
import axios from "axios"
import API from '../config/api'
import previous from '../assets/svgs/solid/angle-left.svg'
import next from '../assets/svgs/solid/angle-right.svg'
import trash from '../assets/svgs/solid/trash-can.svg'
import styles from '../styles/Projects.module.css'
import Image from "next/image"
import Planets from "./planets"

const ProjectItem = (props) => {
    const trashcan_default_state = styles.trashcan;
    const {_id, name, description, images, tech, features, links} = props.item
    const [imageindex, setImageIndex] = useState(0);
    const [toggledelete, setToggleDelete] = useState(trashcan_default_state);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token === '') {
            const trashcan_hidden = styles.hidetrashcan;
            setToggleDelete(trashcan_hidden);
        }
    }, [])
    const Increment = () => {
        if(imageindex < images.length - 1) {
            setImageIndex(imageindex + 1);
        }
    }
    const Decrement = () => {
        if(imageindex > 0){
            setImageIndex(imageindex - 1);
        }
    }
    const TechUsed = () => {
        let techlist = [];
        for(let i = 0; i < tech.length; i++) {
            if(tech !== ''){
            techlist[i] = <span>{tech[i]}</span>
            }
        }
        return techlist;
    }
    const Features = () => {
        let featureslist = [];
        for(let i = 0; i < features.length; i++) {
            if(features != null){
            featureslist[i] = <span>{features[i]}</span>
            }
        }
        return featureslist;
    }
    const Links = () => {
        const {website, code, app} = links
        const weblink = <Link href={`${website}`} className={styles.link}><Button>Visit</Button></Link>;
        const codelink = <Link href={`${code}`} className={styles.link}><Button>Code</Button></Link>;
        const applink = <Link href={`${app}`} className={styles.link}><Button>Download app</Button></Link>;
        if(app == ''){
            const view = [weblink, codelink];
            return view;
        }
        else {
            const view = [weblink, codelink, applink];
            return view;
        }
    }
    const DeleteProject = () => {
        axios.delete(`${API}${_id}`)
        .then(response => {
            alert(response.data.message);
        })
        .catch(error => {
            console.log(error);
        });
    }
    return(
        <div className={styles.item}>
            <img src={`${API}resources/${images[imageindex]}`} className={styles.projectimage} alt={`${name}`}/>
            <Button onClick={Decrement} className={styles.prev}><Image src={previous} className={styles.controlicon} alt={`${name}`}/></Button>
            <Button onClick={Increment} className={styles.next}><Image src={next} className={styles.controlicon} alt={`${name}`} /></Button>
            <Button onClick={DeleteProject} className={toggledelete}><Image src={trash} className={styles.trashcanimage} alt={`${name}`} /></Button>
                <div className={styles.details}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className={styles.techused}>
                    <label>Technology used:</label>
                    {TechUsed()}
                </div>
                <div className={styles.features}>
                    <label>Features:</label>
                    {Features()}
                </div>
                <div className={styles.links}>
                    {Links()}
                </div>
                </div>
                <Planets />
            </div>
    )
}

export default ProjectItem
