import React from 'react';
import { Paper, withStyles, Grid, Typography } from '@material-ui/core';
const styles = theme => ({
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(5),
        maxWidth: '640px',
        margin: '5% auto'
    }
});

const Homepage = props => {
    const { classes } = props;
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

export default withStyles(styles)(Homepage);