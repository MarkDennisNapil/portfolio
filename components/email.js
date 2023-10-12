import React,{ useState } from "react"
import { Button } from "react-bootstrap"
import axios from "axios"
import API from '../config/api'
import styles from '../styles/Contacts.module.css'

const Email = () => {
    const [sender, setSender] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')

    const handleEmailChange = (e) => {
        setSender(e.target.value)
    }
    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    const SendEmail = (e) => {
        e.preventDefault()
        setStatus('Sending...')
        const formdata = new FormData()
        formdata.append('sender', sender)
        formdata.append('receiver', 'dennis7napil@gmail.com')
        formdata.append('subject', subject)
        formdata.append('message', message)
        axios.post(`${API}send/email`, formdata,{})
        .then(response => {
            setStatus(response.data.message)
            setTimeout(() => {
                setSender("")
                setSubject("")
                setMessage("")
                setStatus("")
            }, 6000)
        })
        .catch(error => {
            setStatus('Send failed! Please check your internet connection or Retry.')
            console.log(error)
        })
    }
    return(
        <div className={styles.email}>
            <h1>Email me at dennis7napil@gmail.com</h1>
            <span>or down here</span>
            <input type="email" className={styles.tfemail} value={sender} onChange={handleEmailChange} placeholder="@Your email..." required/>
            <input type="text" className={styles.tftext} value={subject} onChange={handleSubjectChange} placeholder="Subject" required />
            <textarea className={styles.textfield} value={message} onChange={handleMessageChange} placeholder="Type message..." required/>
            <Button onClick={SendEmail}>🚀{status}</Button>
        </div>    
    )
}

export default Email
