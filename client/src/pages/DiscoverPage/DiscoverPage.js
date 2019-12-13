import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import MapBox from '../../components/MapBox'

const DiscoverPage = (props) => {

  const useStyles = makeStyles({
    container: {
      width: '100vw',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f1f7f3'
    }
  });

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <MapBox />
    </Container>
  )
};

export default DiscoverPage;