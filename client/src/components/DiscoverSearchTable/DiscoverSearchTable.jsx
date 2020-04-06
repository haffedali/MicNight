import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DiscoverDataTableItem from '../DiscoverDataTableItem'



const DataTableView = ({ entries }) => {
  const useStyles = makeStyles({
    root: {},
    entry: {
      backgroundColor: '#d7ded9',
    },
    dataTableItem: {
        marginTop: '5vw',
        marginBototm: '5vw'
    },
    list: {
      maxHeight: '99%',
      overflow: 'auto',
    },
    
    paper: {
      height: '85vh',
      maxHeight: '85vh',
      padding: '1vw',
      overflow: 'hidden',
    },
  });

  const classes = useStyles();

  // Unsure why I need to user count... my entries id isn't "unique" according to my error log
  let dataTableItemCount = 0
  let DataTableItems

  if (entries){
    DataTableItems = entries.map((entry) => (<div className={classes.dataTableItem}><DiscoverDataTableItem key={dataTableItemCount++} entry={entry} /></div>));  
  }else {
    DataTableItems = [];
  }


  //Currently we need at least two entries in the datatable to get it to show any data
  if (DataTableItems.length < 1){
    return (
    <Paper className={classes.paper}>
      <div></div>
    </Paper>)
  }


  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {DataTableItems}
      </List>
    </Paper>

  );
};

export default DataTableView;
