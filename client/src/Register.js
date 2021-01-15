import React from 'react';
import {useEffect} from 'react';
import {Link}  from 'react-router-dom';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { TagFaces, Fingerprint, Email } from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit,
        maxWidth: '640px',
        margin: '5% auto'
    }
});



class Register extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <TagFaces />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="fname" label="First Name" type="text" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <TagFaces />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="lname" label="Last Name" type="text" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="email" label="Email" type="email" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Register</Button>
                    </Grid>
                    <Grid container justify="right" style={{ marginTop: '10px' }}>
                        <Link to='/login'>Already Registered ? Try Login</Link>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Register);