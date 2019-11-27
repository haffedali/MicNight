import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


const EventPage = () => {
  const useStyles = makeStyles({
    container: {
      width: '100vw',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f1f7f3'
    }
  })

  const classes = useStyles();

  return(
    <Container className={classes.container}>

    </Container>
  ) 
;
};

export default EventPage;