import React , {useState} from 'react';
import {Link}  from 'react-router-dom';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { TagFaces, Fingerprint, Email } from '@material-ui/icons'
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


const Register = props => {

    const [state, setState] = useState({
        fname: '',
        lname: '',
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
        axios.post('/user/register', state)
        .then(res => {
            console.log('Logged in successfully');
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
                            <TagFaces />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="fname" onChange={handleChange} label="First Name" type="text" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <TagFaces />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="lname" onChange={handleChange} label="Last Name" type="text" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="email" onChange={handleChange} label="Email" type="email" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="password" onChange={handleChange} label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" type = "submit" style={{ textTransform: "none" }}>Register</Button>
                    </Grid>
                    <Grid container justify="flex-end" style={{ marginTop: '10px' }}>
                        <Link to='/login'>Already Registered ? Try Login</Link>
                    </Grid>
                </form>
            </Paper>
        );
}

export default withStyles(styles)(Register);