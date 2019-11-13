import React from 'react';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import { makeStyles } from '@material-ui/styles'





const SocialLinks = () => {
    const useStyles = makeStyles({
        iconButton: {

        },
        container: {
            maxHeight: '85%',
            width: '10vw',
        }
    });

    const classes = useStyles();

    return (
        <Box
        border={1}
            className={classes.container}
            display='flex'
            flexWrap='wrap'
            justifyContent='center'>
            <IconButton edge="end" className={classes.iconButton} aria-label="delete">
                <FacebookIcon />
            </IconButton>
            <IconButton edge="end" className={classes.iconButton} aria-label="delete">
                <TwitterIcon />
            </IconButton>
            <IconButton edge="end" className={classes.iconButton} aria-label="delete">
                <InstagramIcon />
            </IconButton>
            <IconButton edge="end" className={classes.iconButton} aria-label="delete">
                <RedditIcon />
            </IconButton>
        </Box>

    )

}

export default SocialLinks;
