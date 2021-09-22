import React, { useState } from 'react';
import { arrayOf } from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import DataTableView from '../../components/DataTableView';
import DataTableViewController from '../../components/DataTableViewController';
import userInfoType from '../../props/userInfoType';
import entryType from '../../props/entryType';

const ProfileDataTable = ({ artists, micMates, events }) => {
  const [profileTableState, setProfileTableState] = useState({
    focus: 'Artists',
    view: artists,
  });

  const handleFocusChange = (event) => {
    const text = event.target.innerHTML;
    switch (text) {
      case ('Artists'):
        setProfileTableState({ view: artists, focus: text });
        break;
      case ('Events'):
        setProfileTableState({ view: events, focus: text });
        break;
      case ('MicMates'):
        setProfileTableState({ view: micMates, focus: text });
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <Box
        border={2}
        borderRadius={16}
        borderColor="#90a4ae"
        display="flex"
        flexDirection="column"
        style={{
          maxHeight: '60vh', height: '60vh', backgroundColor: 'pink', padding: '1vw',
        }}
      >
        <DataTableViewController buttons={['Events', 'Artists', 'MicMates']} handleFocusChange={handleFocusChange} />
        <DataTableView entries={profileTableState.view} focus={profileTableState.focus} style={{ maxHeight: '50vh' }} />
      </Box>
    </Container>
  );
};

ProfileDataTable.propTypes = {
  artists: arrayOf(userInfoType),
  micMates: arrayOf(userInfoType),
  events: arrayOf(entryType),
};

ProfileDataTable.defaultProps = {
  artists: [],
  micMates: [],
  events: [],
};
export default ProfileDataTable;
