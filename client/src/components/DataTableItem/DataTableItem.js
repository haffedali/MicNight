import React from 'react';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook'

import ProfileAvatar from '../ProfileAvatar'


const DataTableItem = ({ entry }) => {

    return (
        <ListItem key={entry.uid}>
            <ListItemAvatar>
                <ProfileAvatar photoUrl={entry.photoUrl} />
            </ListItemAvatar>
            <ListItemText
                primary={entry.name}
                secondary={entry.tagLine}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <FacebookIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                    <TwitterIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                    <InstagramIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default DataTableItem;