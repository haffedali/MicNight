import React, { useState, useEffect, useContext } from 'react';
import ReactDome from 'react-dom';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import ProfileDataTable from '../../composite-components/ProfileDataTable';
import MainProfileAvatar from '../../components/MainProfileAvatar';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

//COMPONENTS
import EditProfileButton from '../../components/EditProfileButton';
import ModalParent from '../../composite-components/ModalParent';
import EditProfileModal from '../../components/EditProfileModal';


//UTILS
import users from '../../utils/users';
import events from '../../utils/events'

//CONTEXT
import AuthenticationContext from '../../components/AuthenticationContext';


// Data importing
// const {}



const ProfilePage = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favoriteArtists, setFavoriteArtists] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState([]);
  const [micMates, setMicMates] = useState([]);
  const { userInfo, isAuthenticated } = useContext(AuthenticationContext)



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


  useEffect(() => {
      async function fetchUserFavorites(){
        const favorites = await users.getFavorites(userInfo.uid)
        // console.log(favorites)
        favorites.artists.forEach(async (artistUid)=>{
          if (artistUid.length > 1){
            const artistData = await users.get(artistUid)
            setFavoriteArtists(favoriteArtists => [...favoriteArtists, artistData ])
          }
        })
        favorites.events.forEach(async (eventUid)=>{
          if (eventUid.length > 1){
            const eventData = await users.get(eventUid)
            setFavoriteEvents(favoriteEvents => [...favoriteEvents, eventData])
          }
        })
        favorites.micMates.forEach(async (micMateUid)=>{
          if (micMateUid.length > 1){
            const micMateData = await users.get(micMateUid)
            setMicMates(micMates => [...micMates, micMateData]);
          }
        })
  
        setIsLoaded(true);
      }  
      fetchUserFavorites();
    },[])








  return (
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
          {
            isLoaded ?
            <Box mb={3} className={classes.dataTable} >
              <ProfileDataTable micMates={micMates} artists={favoriteArtists} event={favoriteEvents} />
            </Box>
            :
            <div></div>

          }

        </Paper>
        {isModalOpen && (
          <ModalParent.Modal onClose={() => setIsModalOpen(false)}>
            <EditProfileModal userInfo={userInfo}/>
          </ModalParent.Modal>
        )}
        </ModalParent.ModalProvider>
  );
};

export default ProfilePage;