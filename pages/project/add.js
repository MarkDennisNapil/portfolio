import React,{useState} from "react"
import { useRouter } from "next/router";
import { Button } from "react-bootstrap"
import Head from "next/head";
import axios from "axios";
import Navigation from "../../components/navigation";
import styles from '../../styles/project/AddProject.module.css'

function AddProject(){
    const router = useRouter();
    const [name, setName] = useState('');
    const [creator, setCreator] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState([]);
    const [features, setFeatures] = useState([]);
    const [files, setFiles] = useState([]);
    const [codelink, setCodeLink] = useState('');
    const [website, setWebsite] = useState('');
    const [applink, setAppLink] = useState('');
    const [status, setStatus] = useState('Save');

    const FileChange = (e) => {
        setFiles(e.target.files);
    }
    const SaveProject = (e) => {
        e.preventDefault();
        setStatus('Saving...')
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('creator', creator);
        formdata.append('description', description);
        formdata.append('tech', tech);
        formdata.append('features', features);
        formdata.append('code', codelink);
        formdata.append('website', website);
        formdata.append('app', applink);
        for(let i = 0; i < files.length; i++){
            formdata.append('file', files[i]);
        }
        axios.post(`http://localhost:5000/project`, formdata, {})
        .then(response => {
            setStatus(response.data.message)
            console.log(response.data.message);
            setTimeout(() => {
                router.push('/project')
            }, 3000)
        })
        .catch(error => {
            setStatus('Save error')
            console.log(error);
        });
    }
    return(
        <div className={styles.container}>
            <Head className={styles.head}>
            <title>Mark Dennis Napil</title>
            <link rel="icon" href="/me.png" className={styles.headimage} />
            </Head>
            <Navigation />
            <div className={styles.form}>
                <h1>Add Project</h1>
                <label>Project Photo:</label>
                <input type="file" accept="image/jpeg, image/png" onChange={FileChange} className={styles.fileInput} multiple required />
                <label>Project Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Project Name" required />
                <label>Creator:</label>
                <input type="text" value={creator} onChange={(e) => setCreator(e.target.value)} placeholder="Creator" required />
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.description} placeholder="Description" required />
                <label>Technology used:</label>
                <input type="text" value={tech} onChange={(e) => setTech(e.target.value)} placeholder="Tech used" required />
                <label>Features:</label>
                <input type="text" value={features} onChange={(e) => setFeatures(e.target.value)} placeholder="Features" />
                <label>Code link:</label>
                <input type="link" value={codelink} onChange={(e) => setCodeLink(e.target.value)} placeholder="Link of your code..." required />
                <label>Website link:</label>
                <input type="link" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Link of your website..." required />
                <label>App Link</label>
                <input type="link" value={applink} onChange={(e) => setAppLink(e.target.value)} placeholder="Link of your app..." />
                <Button onClick={SaveProject} className={styles.savebtn}>{status}</Button>
            </div>
        </div>
    )
}

export default AddProject