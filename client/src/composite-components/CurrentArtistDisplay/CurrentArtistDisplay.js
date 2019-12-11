import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProfileCard from '../ProfileCard';
import SocialLinks from '../../components/SocialLinks';
import { makeStyles } from '@material-ui/styles';


const CurrentArtistDisplay = ({ user }) => {
    const useStyles = makeStyles({
        paper: {
            height: '100%',
            padding: '.5vw'

        },
        grid: {
            height: '100%'
        },
        gridItem: {
            height: '96%'
        },
        profileCard: {
            width: '35%'
        }
    })

    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.paper}>
                <Grid className={classes.gridItem} item xs={6}>
                    <ProfileCard user={user}></ProfileCard>
                </Grid>
                <Grid item xs={2}>
                    <SocialLinks></SocialLinks>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CurrentArtistDisplay;
