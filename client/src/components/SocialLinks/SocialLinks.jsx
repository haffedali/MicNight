import React from 'react';
import { arrayOf, string } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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

  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.gridContainer}
      py={2}
    >
      {Object.entries(socialLinks).map((linkInfo) => {
        const linkName = linkInfo[0];
        const link = linkInfo[1];
        return (
          <Grid item xs={6}>
            <SocialLinkIcon linkName={linkName} link={link} />
          </Grid>
        );
      })}

    </Grid>
  );
};

SocialLinks.propTypes = {
  socialLinks: arrayOf(string),
};

SocialLinks.defaultProps = {
  socialLinks: [''],
};
export default SocialLinks;
