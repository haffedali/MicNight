import React from 'react';
import List from '@material-ui/core/List'
import DataTableItem from '../../components/DataTableItem'


const DataTableView = ({entries}) => {
    return (
        <List>
            {entries}.map(entry => (
                <DataTableItem entry={entry} />
            ))
        </List>
    )
}

export default DataTableView;