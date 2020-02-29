import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';


import CurrentArtistDisplay from '../../composite-components/CurrentArtistDisplay';
import EventDataTable from '../../composite-components/EventDataTable';
import ProfileDataTable from '../../composite-components/ProfileDataTable';
import ViewSwitch from '../../components/ViewSwitch';


//Dummy Data
import { artistList, eventList, userList, dummyUsers } from '../../dummyData';

// UTILS
import events from '../../utils/events';
import users from '../../utils/users';

//CONTEXTS
import EventContext from '../../components/EventContext'

const EventPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [view, setView] = useState('Upcoming');
  const [currentPatronUids, setCurrentPatronUids] = useState([]);
  const [currentArtists, setCurrentArtists] = useState([]);
  const [currentGuests, setCurrentGuests] = useState([]);
  const [eventData, setEventData] = useState({})
  const eventUid = useContext(EventContext);

  
  const useStyles = makeStyles({
    container: {
      width: '100vw',
      minHeight: '92vh',
      height: '92vh',
      paddingTop: '5vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f1f7f3'
    },

    
    appContainer: {
      outline: 'solid',
      outlineColor: 'blue',
      height: '100%'
    },
    
    currentArtist: {
      height: '20vh',
      outline: 'solid',
      outlineColor: 'red',
    },
    
    dataTableAndChat: {
      minHeight: '50vh',
      maxHeight: '50vh',
      width: '100%',
      outline: 'solid',
      outlineColor: 'green',
    },
    
    buttonRow: {
      width: '100%',
      outline: 'solid',
      outlineColor: 'green'
    }
  })
  
  
  
  const classes = useStyles();
  
  useEffect(()=> {
    async function fetchEventData(){
      const event = await events.get(eventUid);
      const patrons = await events.getLiveData(eventUid);
      setEventData(event);
      setCurrentPatronUids(patrons);

      for (let i=0;i<patrons.artists.length;i++){
        const user = await users.get(patrons.artists[i])
        setCurrentArtists((currentArtists )=> [...currentArtists, user])
      }

      for (let i=0;i<patrons.guests.length;i++){
        const user = await users.get(patrons.guests[i])
        setCurrentGuests((currentGuests) => [...currentGuests, user])
      }
      setIsLoaded(true)
    }

    fetchEventData();
  },[])


  // const viewSwitchOnClick = () => {
  //   if (view === 'Upcoming') {
  //     setView('Chat')
  //   } else {
  //     setView('Upcoming')
  //   }
  // }


  return (
    <Container className={classes.container}>
      <Grid className={classes.currentArtist} item container direction='row' justify='center'>
        <Grid item xs={12}>
          <CurrentArtistDisplay user={artistList[0]} />
        </Grid>
      </Grid>

      {/* <Grid item>
        <Grid container direction='row' justify='center'>
          <Grid item xs={6}>
            <ViewSwitch
              viewState={view}
              clickHandler={viewSwitchOnClick}
            />
          </Grid>
        </Grid>
      </Grid> */}

      {
        isLoaded ?
      <Grid  item container direction='row'>
        {/* <Grid style={{height:'100%'}} item xs={12}>
            <EventDataTable />
          </Grid> */}
        <Box mb={1} className={classes.dataTableAndChat}>
          <EventDataTable artists={currentArtists} guests={currentGuests}/>
        </Box>
      </Grid>
      :
      <div></div>

      }




    </Container>
  );
};

export default EventPage;