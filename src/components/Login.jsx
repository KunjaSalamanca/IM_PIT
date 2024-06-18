import { Button, Container, Grid, Paper, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link, } from "react-router-dom";
import supabase from "../Client"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(4)
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
    },
    submit: {
        marginTop: theme.spacing(2)
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        marginBottom: theme.spacing(4)
    },
    logo: {
        width: 300,
        height: 100,
        marginBottom: theme.spacing(2)
    }
}))

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errormessage, setErrorMessage] = useState('')

    const login = async (e) => {
        e.preventDefault();
        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                setErrorMessage('Invalid Credintials');
            } else {
                window.location.href = '/Dashboard';
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (!validateEmail(e.target.value)) {
            setEmailError('Please enter valid email');
        }
        else {
            setEmailError('');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 6) {
            setPasswordError('Password must be atleast 6 characters');
        }
        else {
            setPasswordError('');
        }
    };

    return (
        <Container maxWidth='false' style={{ height: '100vh', backgroundColor: 'black' }}>
            <Paper className={classes.paper} elevation={5} style={{
                backgroundColor: 'orange',
                margin: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '400px',
                width: '400px'
            }}>
                <Typography variant="h4" align="center" gutterBottom >
                    Login
                </Typography>
                {!errormessage && (
                    <Typography className={classes.error}>
                        {errormessage}
                    </Typography>
                )}
                <form className={classes.form}>
                    <TextField label='Email' variant="outlined" fullWidth value={email} onChange={handleEmailChange} error={Boolean(emailError)} helperText={emailError} />
                    <TextField label='Password' variant="outlined" fullWidth value={password} onChange={handlePasswordChange} error={Boolean(passwordError)} helperText={passwordError} />
                    <Button className={classes.submit} variant="contained" color="primary" type="submit" fullWidth onClick={login} style={{ backgroundColor: 'black', fontFamily: 'Arial, sans-serif'}}sx={{ color: 'white' }}>
                        Login
                    </Button>
                </form>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Link to='/signup' className={classes.link} sx={{ color: 'black', fontFamily: 'Arial, sans-serif'}}>
                            Don't have an account? Sign up
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}