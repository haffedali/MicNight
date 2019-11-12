import React from 'react';
import List from '@material-ui/core/List'
import DataTableItem from '../DataTableItem'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';


const DataTableView = ({ entries }) => {

    const useStyles = makeStyles({
        root: {},
        entry: {
            outlineStyle: "solid",
            outlineColor: "pink",
            backgroundColor: '#d7ded9'
        },
        container: {

        },
        list: {
            maxHeight: '52vh',
            overflow: 'auto',
        }
    })

    const classes = useStyles();

    return (
        <Container>
            <List className={classes.list}>
                {entries.map(entry => (
                    <DataTableItem key={entry.uid} entry={entry} />
                ))
                }
            </List>
        </Container>

    )
}

export default DataTableView;