import { useState } from 'react'
import styles from '../../styles/prompts/Password.module.css'
import { Button } from 'react-bootstrap';
const PasswordPrompt = ({getVerificationStatus}) => {
    const pass = 'dennismarko';
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [statusverified, setStatusVerified] = useState(false);
    const Verify = () => {
        if(password === pass){
            getVerificationStatus(true);
            setStatus('Passed');
        }
        else {
            setStatusVerified(false);
            setStatus('Wrong Password!');
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <label>{status}</label>
                <input type='password' value={password} onChange={Verify} placeholder='>Enter password...' />
                <Button onClick={Verify}>Submit</Button>
            </div>
        </div>
    )
}

export default PasswordPrompt