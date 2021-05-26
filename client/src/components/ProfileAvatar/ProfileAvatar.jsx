import React from 'react';
import PropTypes from 'prop-types';
import MuiAvatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const ProfileAvatar = ({ photoUrl, height, width }) => {
  const useStyles = makeStyles({
    avatar: {
      width,
      height,
    },
  });

  const classes = useStyles();

  return (
    <ButtonBase>
      <MuiAvatar
        className={classes.avatar}
        src={
                    !photoUrl
                      ? 'https://avatars.dicebear.com/v2/bottts/bot.svg'
                      : photoUrl
            }
      />
    </ButtonBase>

  );
};

ProfileAvatar.propTypes = {
  photoUrl: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

ProfileAvatar.defaultProps = {
  photoUrl: '',
  height: '10vw',
  width: '10vw',
};
export default ProfileAvatar;
