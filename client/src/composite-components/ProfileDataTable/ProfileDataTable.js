import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DataTableView from '../../components/DataTableView';
import DataTableViewController from '../../components/DataTableViewController';
import { withStyles } from '@material-ui/styles';


//dummy dataload
import { artistList, userList, eventList } from '../../dummyData'


const styles = theme => ({
    container: {

    }
})



class ProfileDataTable extends React.Component {
    constructor(props) {


        //Weird conditional here just to help me set up storybook
        if (props.entries) {
            this.entries = props.entries
        } else {
            this.entries = [{}];
        }

        this.handleFocusChange = this.handleFocusChange.bind(this)

        this.state = {
            focus: 'Artists',
            artists: props.artists,
            events: props.events,
            micMates: props.micMates
        }

    }

    handleFocusChange(event) {
        let text = event.target.innerHTML;

        // Temporary switch case to make use of dummy data for testing
        switch (text) {
            case "Artists":
                this.entries = artistList;
                break;
            case "MicMates":
                this.entries = userList;
                break;
            case "Events":
                this.entries = eventList;
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
                <Box border={2} borderRadius={16} borderColor='#90a4ae' display='flex' flexDirection='column' style={{ maxHeight: "60vh", height: "60vh", backgroundColor: 'pink', padding: '1vw' }}>
                        <DataTableViewController buttons={['Events','Artists','MicMates']} handleFocusChange={this.handleFocusChange} />
                        <DataTableView entries={this.props.entries} focus={this.state.focus} style={{ maxHeight: '50vh' }} />
                </Box>
            </Container>


        )
    }
}

export default withStyles(styles)(ProfileDataTable);




