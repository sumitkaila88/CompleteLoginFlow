import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import { Paper, withStyles, Grid, Typography } from '@material-ui/core';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit*5,
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
                        <Typography variant="h4" component="h2">
                            Welcome! Your Authentication is confirmed.
                        </Typography>
                    </Grid>
                    
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Login);