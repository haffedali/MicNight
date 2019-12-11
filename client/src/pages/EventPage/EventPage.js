import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';


import CurrentArtistDisplay from '../../composite-components/CurrentArtistDisplay';
import PatronDataTable from '../../composite-components/PatronDataTable';
import ProfileDataTable from '../../composite-components/ProfileDataTable';
import ViewSwitch from '../../components/ViewSwitch';


//Dummy Data
import {artistList, eventList, userList } from '../../dummyData';


const EventPage = () => {
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
      height: '50vh',
      outline: 'solid',
      outlineColor: 'green',
    },

    buttonRow: {
      width: '100%',
      outline: 'solid',
      outlineColor: 'green'
    }


  })
  

  const [view,setView] = useState('Upcoming')
  const classes = useStyles();
  
  const viewSwitchOnClick = () => {
    console.log('testtesttest')
    if (view === 'Upcoming'){
      setView('Guests')
    }else {
      setView('Upcoming')
    }
  }

  return(
    <Container className={classes.container}>
        <Grid className={classes.currentArtist} item container direction='row' justify='center'>
          <Grid item xs={12}>
            <CurrentArtistDisplay user={artistList[0]} />
          </Grid>
        </Grid>

        <Grid item>
          <Grid  container direction='row' justify='center'>
            <Grid item xs={6}>
              <ViewSwitch 
                viewState={view}
                clickHandler={viewSwitchOnClick}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.dataTableAndChat} item container direction='row'>
          <Grid style={{height:'100%'}} item xs={12}>
            <PatronDataTable />
          </Grid>
        </Grid>


    </Container>
  ) 
;
};

export default EventPage;