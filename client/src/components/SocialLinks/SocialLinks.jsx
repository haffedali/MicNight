import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import { makeStyles } from '@material-ui/styles';

// This component may end up going to the `composite-components` folder
import SocialLinkIcon from '../SocialLinkIcon';

const SocialLinks = ({ socialLinks }) => {
  const useStyles = makeStyles({
    container: {
      height: '85%',
      maxHeight: '85%',
      width: '100%',
    },
    socialIcon: {
      padding: '1vw',
    },
    gridContainer: {
      maxHeight: '100%',
    },
  });

  const redirect = () => {
  };

  const populateSocialLinks = (link) => {
    switch (link) {
      case 'facebook':
        return <FacebookIcon />;
        break;
      case 'instagram':
        return <InstagramIcon />;
        break;
      case 'twitter':
        return <TwitterIcon />;
        break;
      case 'soundcloud':
        return <RedditIcon />;
        break;
    }
  };

  const classes = useStyles();
  return (

    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.gridContainer}
      py={2}
    >

      {Object.entries(socialLinks).map((linkInfo, index) => {
        const linkName = linkInfo[0];
        const link = linkInfo[1];
        return (
          <Grid item xs={6}>
            <SocialLinkIcon linkName={linkName} link={link} />
          </Grid>
        );
      })}

      {/* <Grid item xs={6}>
                <IconButton type={"button"} onClick={redirect} classes={{root: classes.socialIcon}} aria-label="delete">
                    <FacebookIcon  />
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <IconButton type={"button"} onClick={redirect}  classes={{root: classes.socialIcon}} aria-label="delete">
                    <TwitterIcon  />
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <IconButton type={"button"} onClick={redirect}  classes={{root: classes.socialIcon}} aria-label="delete">
                    <InstagramIcon  />
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <IconButton type={"button"} onClick={redirect}  classes={{root: classes.socialIcon}} aria-label="delete">
                    <RedditIcon  />
                </IconButton>
            </Grid> */}
    </Grid>

  );
};

export default SocialLinks;
