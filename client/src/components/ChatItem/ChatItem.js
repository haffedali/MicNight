import React from 'react';
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';


import ProfileAvatar from '../ProfileAvatar';





const ChatItem = ({ entry }) => {
    const useStyles = makeStyles({
        chatItem: {
            width: '100%'
        },

        chatAvatar: {
            outlineColor: 'grey',
            outline: 'solid'
        },

        primaryText: {
            backgroundColor: 'blue',
            borderRadius: '10rem',
            color: 'white',
            padding: '1.5rem',
            display: 'flex'
        },

        secondaryText: {
            marginTop: '1rem',
            marginLeft: '1rem'
        }
    })
    
    const classes = useStyles();

    return(
    <Box className={classes.chatItem}>
        <ListItem mb={1} disableGutters divider className={classes.chatItem} key={`ChatItem: ${entry.uid}`}>
            <ListItemAvatar >
                <ProfileAvatar height={'10vw'} width={'10vw'} photoUrl={entry.photoUrl} />
            </ListItemAvatar>
            <ListItemText classes={{primary: classes.primaryText, secondary: classes.secondaryText}}
                primary={entry.message}
                secondary={`${entry.name} ${entry.TIMESTAMP}`}
            />
        </ListItem>
    </Box>
    )
}

export default ChatItem;