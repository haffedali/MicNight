import React, { useReducer } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import ProfileDataTable from '../../composite-components/ProfileDataTable';
import MainProfileAvatar from '../../components/MainProfileAvatar';
import { makeStyles } from '@material-ui/styles';
import AuthenticationContext from '../../components/AuthenticationContext';



const ProfilePage = (props) => {

  const useStyles = makeStyles({
    dataTable: {

    },
    avatar: {
      display: 'flex',
      justifyContent: 'center'

    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  })

  const classes = useStyles()

  return (
    <AuthenticationContext.Consumer>
      {({ isAuthenticated, userInfo }) => (
        <Box className={classes.container}>
          <Box m={1} className={classes.avatar}>
            <MainProfileAvatar photoUrl={props.user.photoUrl} />
          </Box>
          <Box className={classes.dataTable} >
            <ProfileDataTable entries={props.entries} />

          </Box>
        </Box>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default ProfilePage;