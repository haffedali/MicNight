import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import DataTableView from '../../components/DataTableView';
import DataTableViewController from '../../components/DataTableViewController';
import { withStyles } from '@material-ui/styles';

//dummy dataload
import { artistList, userList, dummyUsers, eventList } from '../../dummyData'


class EventDataTable extends React.Component {
    constructor(props) {
        super(props)


        //Weird conditional here just to help me set up storybook
        if (props.entries) {
            this.entries = props.entries
        } else {
            this.entries = [{}];
        }

        this.handleFocusChange = this.handleFocusChange.bind(this)

        this.state = {
            focus: 'Upcoming'
        }

    }

    handleFocusChange(event) {
        let text = event.target.innerHTML;

        // Temporary switch case to make use of dummy data for testing
        switch (text) {
            case "Upcoming":
                this.entries = artistList;
                break;
            case "Guest List":
                this.entries = dummyUsers;
                break;
        }

        this.setState({
            focus: text
        })

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <Container>
            <Box border={2} borderRadius={16} borderColor='#90a4ae' display='flex' flexDirection='column' style={{ maxHeight: "50vh", height: "50vh", backgroundColor: 'pink', padding: '1vw' }}>
                <DataTableViewController buttons={['Upcoming', 'Guest List']} handleFocusChange={this.handleFocusChange} />
                <DataTableView entries={this.entries} focus={this.state.focus}  />
            </Box>
            </Container>


        )
    }
}

export default (EventDataTable);