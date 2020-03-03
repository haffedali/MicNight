import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import MapBox from '../../components/MapBox'

//Components
import DiscoverPageAppBar from '../../components/DiscoverPageAppBar';
import AddEventButton from '../../components/AddEventButton';
import AddEventModal from '../../components/AddEventModal';


const DiscoverPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* <MapBox /> */}
      <DiscoverPageAppBar clickEffect={setIsModalOpen}/>
    </Container>
  )
};

export default DiscoverPage;