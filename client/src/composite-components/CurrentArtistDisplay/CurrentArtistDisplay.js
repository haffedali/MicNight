import React from 'react';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import ProfileAvatar from '../../components/ProfileAvatar';
import ProfileCard from '../ProfileCard';
import SocialLinks from '../../components/SocialLinks';

const CurrentArtistDisplay = () => (
   <Paper>
       <ProfileCard />
       <SocialLinks />
   </Paper>
)

export default CurrentArtistDisplay
=======
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProfileCard from '../ProfileCard';
import SocialLinks from '../../components/SocialLinks';
import { makeStyles } from '@material-ui/styles';


const CurrentArtistDisplay = ({ user }) => {
    const useStyles = makeStyles({
        paper: {
            height: '30vh',
            padding: '.5vw'

        },
        grid: {
            height: '30vh'
        },
        gridItem: {
            height: '28vh'
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
                <Grid className={classes.gridItem} item xs={4}>
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
>>>>>>> b0aa4201f9db18ecd0267069b52bb757183831ea
