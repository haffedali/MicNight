import React from 'react';
// import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'
import ProfileAvatar from '../ProfileAvatar'


const DataTableItem = ({ entry }) => {
    const useStyles = makeStyles({
        root: {
            padding: '1vw',
            margin: '1vw'
        },
        buttonBox: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        detailBox: {

        }
    });

    const classes = useStyles();

    return (
        <Paper textOverFlow='ellipsis' className={classes.root}>
            <ListItem key={entry.uid}>
                <ListItemAvatar>
                    <ProfileAvatar photoUrl={entry.photoUrl} />
                </ListItemAvatar>
                <Box textOverFlow="ellipsis" className={classes.detailBox}>
                    <ListItemText
                        primary={entry.name}
                        secondary={entry.tagLine}
                    />
                </Box>

                <ListItemSecondaryAction>
                    <Box className={classes.buttonBox}>
                        <IconButton edge="end" aria-label="delete">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </ListItemSecondaryAction>

            </ListItem>
        </Paper>

    )
}

export default DataTableItem;