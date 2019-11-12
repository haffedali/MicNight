import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
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
        super(props)


        //Weird conditional here just to help me set up storybook
        if (props.entries) {
            this.entries = props.entries
        } else {
            this.entries = [{}];
        }

        this.handleFocusChange = this.handleFocusChange.bind(this)

        this.state = {
            focus: 'Artists'
        }

    }

    handleFocusChange(event) {
        console.log(event.target.innerHTML);
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
        const { classes } = this.props;
        return (
            <Box border={3} borderRadius={16} borderColor='#90a4ae' style={{maxHeight:"65vh", height: "65vh"}}>
                <Container className={classes.container}>
                    <DataTableViewController handleFocusChange={this.handleFocusChange} />
                    <DataTableView entries={this.entries} focus={this.state.focus}/>
                </Container>
            </Box>

        )
    }
}

export default withStyles(styles)(ProfileDataTable);