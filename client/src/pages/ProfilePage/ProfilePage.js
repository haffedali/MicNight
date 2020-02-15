import React, { useReducer } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import ProfileDataTable from '../../composite-components/ProfileDataTable';
import MainProfileAvatar from '../../components/MainProfileAvatar';
import { makeStyles } from '@material-ui/styles';
import AuthenticationContext from '../../components/AuthenticationContext';
import EditProfileButton from '../../components/EditProfileButton';
import { Typography } from '@material-ui/core';


// Data importing
// const {}



const ProfilePage = (props) => {

  const useStyles = makeStyles({
    avatar: {
      display: 'flex',
      justifyContent: 'center'

    },
    container: {
      width: '100vw',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f1f7f3'
    }
  })

  const classes = useStyles()

  return (
    <AuthenticationContext.Consumer>
      {({ isAuthenticated, userInfo }) => (
        <Grid container direction='row' justify='center'>  
        <Paper square className={classes.container}>
          <Grid item>
            <Box m={5} className={classes.avatar}>
              <MainProfileAvatar photoUrl={userInfo.photoURL} />
              <EditProfileButton />
            </Box>
          </Grid>
          <Box mb={1} className={classes.dataTable} >
            <ProfileDataTable entries={props.entries} />
          </Box>
        </Paper>



        </Grid>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default ProfilePage;