import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';
import userInfoType from '../../props/userInfoType';
import ProfileCard from '../ProfileCard';
import SocialLinks from '../../components/SocialLinks';

const CurrentArtistDisplay = ({ user }) => {
  const useStyles = makeStyles({
    paper: {
      height: '100%',
      padding: '.5vw',

    },
    grid: {
      height: '100%',
    },
    gridItem: {
      height: '96%',
    },
    profileCard: {
      width: '35%',
    },
  });

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.paper}
      >
        <Grid className={classes.gridItem} item xs={6}>
          <ProfileCard user={user} />
        </Grid>
        <Grid item xs={2}>
          <SocialLinks socialLinks={user.socialLinks} />
        </Grid>
      </Grid>
    </Paper>
  );
};

CurrentArtistDisplay.propTypes = {
  user: userInfoType,
};

CurrentArtistDisplay.defaultProps = {
  user: userInfoType,
};
export default CurrentArtistDisplay;
