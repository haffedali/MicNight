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
            maxHeight: '50vh',
            overflow: 'auto',
            
        },
        paper: {
            height: '88%',
            maxHeight: '88%',
            padding: '1vw',
            overflow: 'hidden'
        }
    })

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            {/* <Grid container> */}
                
                <List className={classes.list}>
                    {entries.map(entry => (
                        <DataTableItem key={entry.uid} entry={entry} />
                    ))
                    }
                </List>
            {/* </Grid> */}

        </Paper>

    )
}

export default DataTableView;