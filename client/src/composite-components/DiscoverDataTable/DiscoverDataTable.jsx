import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import DataTableView from '../../components/DataTableView';

// eslint-disable-next-line react/prop-types
const ProfileDataTable = ({ events }) => (
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
      <DataTableView entries={events} focus="events" style={{ maxHeight: '50vh' }} />
    </Box>
  </Container>
);

export default ProfileDataTable;
