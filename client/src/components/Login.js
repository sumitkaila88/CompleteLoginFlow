import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Email, Fingerprint } from '@material-ui/icons'
import axios from 'axios';
const styles = theme => ({
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(1),
        maxWidth: '640px',
        margin: '5% auto'
    }
});



function Login(props) {
    const [state, setState] = useState({
        email:'',
        password:''
    });
    
    const handleChange = (e) => {
        const {id, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post('/user/login', state)
        .then(res => {
            console.log(res.headers['x-access-token']);
            localStorage.setItem('Token', res.headers['x-access-token']);
            localStorage.setItem('User', res.data._id);
            props.history.push('/');
        }).catch(err => {
            console.log(err.response.data);
        });   
    }


    const { classes } = props;
    return (
        <Paper className={classes.padding}>
            <form className={classes.margin} onSubmit = {(e) => handleOnSubmit(e)}>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Email />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="email" label="Email" type="email" onChange={handleChange} fullWidth autoFocus required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Fingerprint />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="password" label="Password" type="password" onChange={handleChange} fullWidth required />
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button variant="outlined" color="primary" type = "submit" style={{ textTransform: "none" }}>Login</Button>
                </Grid>
                <Grid container justify="flex-start" style={{marginTop: '10px'}} >
                    <Link to = '/register'>New Here ? Register</Link>
                </Grid>
            </form>
        </Paper>
    );
}

export default withStyles(styles)(Login);