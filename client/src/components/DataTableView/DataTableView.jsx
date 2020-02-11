import React from 'react';
import List from '@material-ui/core/List';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DataTableItem from '../DataTableItem';


const DataTableView = ({ entries }) => {
  const useStyles = makeStyles({
    root: {},
    entry: {
      outlineStyle: 'solid',
      outlineColor: 'pink',
      backgroundColor: '#d7ded9',
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
      overflow: 'hidden',
    },
  });

  const classes = useStyles();

  // Unsure why I need to user count... my entries id isn't "unique" according to my error log
  let dataTableItemCount = 0
  const DataTableItems = entries.map((entry) => (<DataTableItem key={dataTableItemCount++} entry={entry} />));

  return (
    <Paper className={classes.paper}>


      <List className={classes.list}>
        {DataTableItems}
      </List>


    </Paper>

  );
};

export default DataTableView;
