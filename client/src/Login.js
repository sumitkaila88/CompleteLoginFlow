import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Email, Fingerprint } from '@material-ui/icons'
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

class Login extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="email" label="Email" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="password" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                    <Grid container justify="right" style={{marginTop: '10px'}} >
                        <Link to = '/register'>New Here ? Register</Link>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Login);