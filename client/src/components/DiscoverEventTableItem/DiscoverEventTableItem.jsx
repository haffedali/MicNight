import React from 'react'


import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';


import ProfileAvatar from '../ProfileAvatar';
import SocialLinks from '../SocialLinks';

const DiscoverEventTableItem = ({ entry }) => {
    const useStyles = makeStyles({
      root: {
        paddingLeft: '3vw',
        margin: '.5vw',
      },
      buttonBox: {
        height: '12%',
        width: '15vw',
      },
      detailBox: {
  
      },
      socialLink: {
        padding: '.1vw',
        margin: '.1vw',
      },
      listItem: {
  
      },
      avatar: {
        margin: '2%',
        minWidth: '1vw',
      },
      listSecondaryAction: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    });
  
    const classes = useStyles();
  
  
    return (
      <Paper className={classes.root}>
        <ListItem mb={1} disableGutters divider className={classes.listItem} key={`ListItem: ${entry.uid}`}>
          <ListItemAvatar className={classes.avatar}>
            <ProfileAvatar photoUrl={entry.photoURL} />
          </ListItemAvatar>
          <Box className={classes.detailBox}>
            <ListItemText
              primary={entry.displayName}
              secondary={entry.tagLine}
            />
          </Box>
  
          <ListItemSecondaryAction className={classes.listSecondaryAction} style={{ height: '100%', width: '20%' }}>  
            <SocialLinks socialLinks={entry.socialLinks}/>
          </ListItemSecondaryAction>
  
        </ListItem>
      </Paper>
  
    );
  };

export default DiscoverEventTableItem;