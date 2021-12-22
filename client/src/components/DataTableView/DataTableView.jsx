/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */

import React from 'react';
import List from '@material-ui/core/List';
import { PropTypes } from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DataTableItem from '../DataTableItem';

const DataTableView = ({ entries }) => {
  const useStyles = makeStyles({
    root: {},
    entry: {
      backgroundColor: '#d7ded9',
    },
    container: {

    },
    list: {
      maxHeight: '99%',
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
  let DataTableItems;

  // useEffect(()=> {
  //   async function fetchEntries(entries){
  //     entries.artists.forEach((entry)=>console.log(entry))
  //   }

  //   fetchEntries();
  // })

  if (entries) {
    DataTableItems = entries.map((entry) => (<DataTableItem key={entry.uid} entry={entry} />));
  } else {
    DataTableItems = [];
  }

  // Currently we need at least two entries in the datatable to get it to show any data
  if (DataTableItems.length < 1) {
    return (
      <Paper className={classes.paper}>
        <div />
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {DataTableItems}
      </List>
    </Paper>

  );
};

DataTableView.propTypes = {
  entries: PropTypes.array,
};

DataTableView.defaultProps = {
  entries: [{}],
};

export default DataTableView;
