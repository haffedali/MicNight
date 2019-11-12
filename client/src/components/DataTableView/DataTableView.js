import React from 'react';
import List from '@material-ui/core/List'
import DataTableItem from '../DataTableItem'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
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
            maxHeight: '55vh',
            overflow: 'auto',
        },
        paper: {
            maxHeight: '100%',
            padding: '1vw'
        }
    })

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>

                <List className={classes.list}>
                    {entries.map(entry => (
                        <DataTableItem key={entry.uid} entry={entry} />
                    ))
                    }
                </List>


        </Paper>

    )
}

export default DataTableView;