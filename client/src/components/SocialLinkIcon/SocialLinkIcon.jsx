import React from 'react';
import { string } from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import { makeStyles } from '@material-ui/styles';

const SocialLinkIcon = ({ linkName, link }) => {
  const useStyles = makeStyles({
    socialIcon: {
      padding: '1vw',
    },
  });

  const classes = useStyles();

  const returnSocialIcon = (linkNameString) => {
    switch (linkNameString) {
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'twitter':
        return <TwitterIcon />;
      case 'soundcloud':
        return <RedditIcon />;
      default:
        break;
    }
    return 'success';
  };

  const redirect = () => {
    // eslint-disable-next-line no-undef
    window.open(link);
  };

  return (
    <IconButton type="button" onClick={redirect} classes={{ root: classes.socialIcon }} aria-label="delete">
      {returnSocialIcon(linkName)}
    </IconButton>
  );
};

SocialLinkIcon.propTypes = {
  linkName: string,
  link: string,
};

SocialLinkIcon.defaultProps = {
  linkName: '',
  link: '',
};

export default SocialLinkIcon;
