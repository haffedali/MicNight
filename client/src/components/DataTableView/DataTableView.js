import React from 'react';
import List from '@material-ui/core/List'
import DataTableItem from '../DataTableItem'
import Container from '@material-ui/core/Container'


const DataTableView = ({ entries }) => {
    return (
        <Container>
            <List>
                {entries.map(entry => (
                    <DataTableItem entry={entry} />
                ))
                }
            </List>
        </Container>

    )
}

export default DataTableView;