import React,{useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import axios from "axios";
import Planets from "../../components/planets";
import funnycool from '../../assets/gifs/funny-cool.gif'
import styles from '../../styles/secret/Authentication.module.css'
import API from "../../config/api";

function Authentication(){
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const EmailChange = (e) => {
        setEmail(e.target.value);
    }
    const PasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const Auth = () => {
        const account = {
            email: email,
            password: password
        }
        axios.post(`${API}/auth`, account, {})
        .then(response => {
            setStatus('Authentication success!');
            localStorage.setItem('uid', response.data.id);
            localStorage.setItem('token', response.data.token);
            setTimeout(() => {
                router.push('/')
            }, 2000)
        })
        .catch(error => {
            setStatus('Error! Invalid credentials.');
            console.log(error);
        });
    }
    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <span>{status}</span>
                <h3>Administrator Authentication</h3>
                <input type="email" value={email} onChange={EmailChange} placeholder="Email..." required />
                <input type="password" value={password} onChange={PasswordChange} placeholder="Password..." required />
                <Button onClick={Auth}>Log In</Button>
            </div>
            <Planets />
            <button className={styles.funnycool}><Image src={funnycool} width="128" height="128" alt="Funny Cool" /></button>
        </div>
    )
}

export default Authentication;