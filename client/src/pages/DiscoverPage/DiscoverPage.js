import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import MapBox from '../../components/MapBox'

//Components
import ModalParent from '../../composite-components/ModalParent'
import DiscoverPageAppBar from '../../components/DiscoverPageAppBar';
import AddEventButton from '../../components/AddEventButton';
import AddEventModal from '../../components/AddEventModal';

//CONTEXT
import AuthenticationContext from '../../components/AuthenticationContext';


const DiscoverPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userInfo, isAuthenticated } = useContext(AuthenticationContext)

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
    <ModalParent.ModalProvider>

    <Container className={classes.container}>
      {/* <MapBox /> */}
      {
        isModalOpen && (
          <ModalParent.Modal onClose={()=> setIsModalOpen(false)}>
            <AddEventModal userInfo={userInfo}/>
          </ModalParent.Modal>
        )
      }
      <DiscoverPageAppBar status={isModalOpen} clickEffect={setIsModalOpen}/>
    </Container>
    </ModalParent.ModalProvider>

  )
};

export default DiscoverPage;