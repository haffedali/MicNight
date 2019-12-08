import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import DataTableView from '../../components/DataTableView';
import DataTableViewController from '../../components/DataTableViewController';
import { withStyles } from '@material-ui/styles';

//dummy dataload
import { artistList, userList, eventList } from '../../dummyData'


const styles = theme => ({
    container: {

    }
})

class PatronDataTable extends React.Component {
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
        console.log(event.target.innerHTML);
        let text = event.target.innerHTML;

        // Temporary switch case to make use of dummy data for testing
        switch (text) {
            case "Upcoming":
                this.entries = artistList;
                break;
            case "Guest List":
                this.entries = userList;
                break;
        }

        this.setState({
            focus: text
        })

    }

    componentDidUpdate() {

    }

    render() {
        const { classes } = this.props;
        return (
            <Container>
                <Box border={2} borderRadius={16} borderColor='#90a4ae' display='flex' flexDirection='column' style={{ maxHeight: "60vh", height: "60vh", backgroundColor: 'pink', padding: '1vw' }}>
                        <DataTableViewController buttons={['Upcoming','Guest List']} handleFocusChange={this.handleFocusChange} />
                        <DataTableView entries={this.entries} focus={this.state.focus} style={{ maxHeight: '50vh' }} />
                </Box>
            </Container>


        )
    }
}

export default withStyles(styles)(PatronDataTable);