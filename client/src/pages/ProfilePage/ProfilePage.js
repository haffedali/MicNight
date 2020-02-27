import React, { useState } from 'react';
import ReactDome from 'react-dom';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import ProfileDataTable from '../../composite-components/ProfileDataTable';
import MainProfileAvatar from '../../components/MainProfileAvatar';
import { makeStyles } from '@material-ui/styles';
import AuthenticationContext from '../../components/AuthenticationContext';
import EditProfileButton from '../../components/EditProfileButton';
import ModalParent from '../../composite-components/ModalParent';
import EditProfileModal from '../../components/EditProfileModal';
import { Typography } from '@material-ui/core';


// Data importing
// const {}



const ProfilePage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const useStyles = makeStyles({
    avatar: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      bottom: '1rem'
    },
    container: {
      width: '100vw',
      minHeight: '92vh',
      maxHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f1f7f3'
    },

    dataTable: {
      marginBottom: '1rem',
      paddingBottom: '1rem'
    }
  })

  const classes = useStyles()

  return (
    <AuthenticationContext.Consumer>
      {({ isAuthenticated, userInfo }) => (
        <ModalParent.ModalProvider>
        <Paper square className={classes.container}>
          <Grid container direction ='row' justify='flex-end'>
            <Grid item>
              <EditProfileButton status={isModalOpen} clickEffect={setIsModalOpen} onClick={() => console.log('Annoyed')}/>
            </Grid>
            <Grid item container direction='row' xs={12} justify='center'>
              <Grid item>
                <Box m={5} className={classes.avatar}>
                  <MainProfileAvatar photoURL={userInfo.photoURL} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
            <Box mb={3} className={classes.dataTable} >
              <ProfileDataTable entries={props.entries} />
            </Box>
        </Paper>
        {isModalOpen && (
          <ModalParent.Modal onClose={() => setIsModalOpen(false)}>
            <EditProfileModal userInfo={userInfo}/>
          </ModalParent.Modal>
        )}
        </ModalParent.ModalProvider>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default ProfilePage;