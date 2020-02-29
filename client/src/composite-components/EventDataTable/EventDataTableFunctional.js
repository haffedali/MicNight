import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import DataTableView from '../../components/DataTableView';
import DataTableViewController from '../../components/DataTableViewController';

const EventDataTable = ({ artists, guests }) => {


    const [eventState,setEventState] = useState({
        focus: 'Upcoming',
        view: artists
    })


    const handleFocusChange = (event) => {
        const text = event.target.innerHTML;
        switch (text) {
            case ("Upcoming"):
                setEventState({view: artists, focus: text})
                break;
            case ("Guest List"):
                setEventState({view: guests, focus: text})
                break;
        }
    }

    return(
        <Container>
        <Box border={2} borderRadius={16} borderColor='#90a4ae' display='flex' flexDirection='column' style={{ maxHeight: "50vh", height: "50vh", backgroundColor: 'pink', padding: '1vw' }}>
            <DataTableViewController buttons={['Upcoming', 'Guest List']} handleFocusChange={handleFocusChange} />
            <DataTableView entries={eventState.view} focus={eventState.focus}  />
        </Box>
        </Container>
    )
}

export default EventDataTable;