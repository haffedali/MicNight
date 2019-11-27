import React from 'react';
import List from '@material-ui/core/List'
import DataTableItem from '../DataTableItem'
import Grid from '@material-ui/core/Grid'
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


    // Unsure why I need to user count... my entries id isn't "unique" according to my error log
    let count = 0

    return (
        <Paper className={classes.paper}>
            {/* <Grid container> */}
                
                <List className={classes.list}>
                    {entries.map(entry => (
                        
                        <DataTableItem  key={count++} entry={entry} />
                    ))
                    }
                </List>
            {/* </Grid> */}

        </Paper>

    )
}

export default DataTableView;