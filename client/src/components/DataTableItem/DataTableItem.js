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
import RedditIcon from '@material-ui/icons/Reddit';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'


import ProfileAvatar from '../ProfileAvatar';
import SocialLinks from '../SocialLinks';


const DataTableItem = ({ entry }) => {
    const useStyles = makeStyles({
        root: {
            paddingLeft: '3vw',
            margin: '.5vw'
        },
        buttonBox: {
            height: '12%',
            width: '15vw'
        },
        detailBox: {

        },
        socialLink: {
            padding: '.1vw',
            margin: '.1vw'
        },
        listItem: {

        },
        avatar: {
            margin: '2%',
            minWidth: '1vw'
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
            <ListItem mb={1} disableGutters divider className={classes.listItem} key={entry.uid}>
                <ListItemAvatar className={classes.avatar}>
                    <ProfileAvatar photoUrl={entry.photoUrl} />
                </ListItemAvatar>
                <Box className={classes.detailBox}>
                    <ListItemText
                        primary={entry.name}
                        secondary={entry.tagLine}
                    />
                </Box>

                <ListItemSecondaryAction className={classes.listSecondaryAction} style={{height:'100%', width:'20%'}}>
                    {/* Refractor into 'SocialLinks' component */}

                    <SocialLinks />


                    {/* Refractor into 'SocialLinks' component */}

                </ListItemSecondaryAction>

            </ListItem>
        </Paper>

    )
}

export default DataTableItem;