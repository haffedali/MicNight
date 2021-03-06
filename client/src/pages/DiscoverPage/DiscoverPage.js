import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';


//Components
import ModalParent from '../../composite-components/ModalParent'
import DiscoverPageAppBar from '../../components/DiscoverPageAppBar';
import AddEventModal from '../../components/AddEventModal';

//CONTEXT
import AuthenticationContext from '../../components/AuthenticationContext';
import DiscoverSearchTable from '../../components/DiscoverSearchTable';

//UTILS
import events from '../../utils/events'

//TEST UTILS
import { eventList } from '../../dummyData';


const DiscoverPage = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResponse, setSearchResponse] = useState([])
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

  const handleSearch = async () => {
   const searchedEvents = await events.fetchEventsByCity(searchTerm)
   setSearchResponse(searchedEvents)
  }

  const classes = useStyles();
  return (
    <ModalParent.ModalProvider>
      <Container className={classes.container}>
        {
          isModalOpen && (
            <ModalParent.Modal onClose={() => setIsModalOpen(false)}>
              <AddEventModal userInfo={userInfo} />
            </ModalParent.Modal>
          )
        }

        <DiscoverPageAppBar search={handleSearch} setSearchTerm={setSearchTerm} status={isModalOpen} clickEffect={setIsModalOpen} />
        <DiscoverSearchTable entries={searchResponse}/>
      </Container>

    </ModalParent.ModalProvider>
  )
};

export default DiscoverPage;