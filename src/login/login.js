import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../api/auth';
import { useHistory } from 'react-router-dom';
import CheckLoginError from '../error-handling/error';
import LoginPanel from '../components/signin-out';
import { Modal, Alert, Snackbar } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        padding: '20px'
    }
});


const Login = () => {
    let history = useHistory();

    const [open, setOpen] = useState(false);
    const [errorMssg, setErrorMssg] = useState('');
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

    const LoginHandler = (token) => {
        localStorage.setItem('token',token);
        history.push("/Dashboard");
    }

    const HanldeError = (res) => {
        setErrorMssg(CheckLoginError(res.code, history));
        setOpen(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData).then((res) => res.getIdToken ? LoginHandler(res.getIdToken()) : HanldeError(res))
    }

    const classes = useStyles();
    //  const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <LoginPanel classes={classes} formData={formData} buttonLabel="Sign In" handleChange={handleChange} handleSubmit={handleSubmit} />
            {open &&
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    onClose={() => { setOpen(false) }}
                    message={errorMssg}
                />
            }

        </div>
    );
}

export default Login;