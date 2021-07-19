import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { register } from '../api/auth';
import { useHistory } from 'react-router-dom';
import LoginPanel from '../components/signin-out';

const useStyles = makeStyles({
    card: {
        padding: '20px'
    },
    Button: {
        //  justifyContent: 'center'
    }
});


const Login = () => {
    let history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : 'en_US',
        // remember_me: false
    })

    const handleChange = (e) => {
        const id = e.target.id
        setFormData(formData => ({
            ...formData,
            [id]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(formData).then((res) => (    
            res.getIdToken ? history.push('/') : alert(res.code)
        ))
    }

    const classes = useStyles();
    return (
        <div>
             <LoginPanel classes={classes} formData={formData} buttonLabel = "Sign Up" handleChange = {handleChange} handleSubmit = {handleSubmit}/>  
        </div>
    );
}

export default Login;