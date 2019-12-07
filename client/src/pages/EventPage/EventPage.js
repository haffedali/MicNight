import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


import CurrentArtistDisplay from '../../composite-components/CurrentArtistDisplay';



//Dummy Data
import {artistList, eventList, userList } from '../../dummyData';


const EventPage = () => {
  const useStyles = makeStyles({
    container: {
      width: '100vw',
      minHeight: '92vh',
      paddingTop: '5vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f1f7f3'
    }
  })

  const classes = useStyles();

  return(
    <Container className={classes.container}>
      <CurrentArtistDisplay user={artistList[0]} />
    </Container>
  ) 
;
};

export default EventPage;