import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from '../../assets/micnigh-logo.png';

const LogoAvatar = () => {
  const useStyles = makeStyles({
    avatar: {
      width: '50vw',
      height: '50vw',
    },
    avatarBacker: {},
    container: {
      height: '50vw',
      maxWidth: '50%',
    },
  });

  const classes = useStyles();

  return (
    <ButtonBase className={classes.container}>
      <Box
        border={3}
        bgcolor="secondary.main"
        borderColor="#90a4ae"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        className={classes.avatarBacker}
      >
        <MuiAvatar className={classes.avatar} src={logo} />
      </Box>
    </ButtonBase>
  );
};

export default LogoAvatar;
