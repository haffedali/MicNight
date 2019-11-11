import React from 'react';
import Container from '@material-ui/core/Container';
import DataTableView from '../../components/DataTableView';
import DataTableViewController from '../../components/DataTableViewController';

class ProfileDataTable extends React.Component {
    constructor(props){
        super(props)


        //Weird conditional here just to help me set up storybook
        if (props.entries){
            this.entries = props.entries
        }else{
            this.entries = [{}];
        }

        this.handleFocusChange = this.handleFocusChange.bind(this)        

        this.state = {
            focus: 'Artists'
        }
    }

    handleFocusChange(focus){
        this.setState({
            focus: focus
        })
    }

    
    render(){
        return(
            <Container>
                <DataTableViewController handleFocusChange={this.handleFocusChange}/>
                <DataTableView entries={this.entries} focus={this.state.focus}/>
            </Container>
        )
    }
}

export default ProfileDataTable;