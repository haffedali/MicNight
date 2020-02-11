import React from 'react';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import { makeStyles } from '@material-ui/styles'



const SocialLinks = () => {
    const useStyles = makeStyles({
        container: {
            height: '85%',
            maxHeight: '85%',
            width: '100%',
        },
        socialIcon: {
            padding:'1vw',
        },
        gridContainer: {
            maxHeight:'100%',
        }
    });

    const classes = useStyles();

    return (

        <Grid
            container
            justify='space-around'
            alignItems='center'
            className={classes.gridContainer}
            py={2}
        >
            <Grid item xs={6}>
                <IconButton  classes={{root: classes.socialIcon}} aria-label="delete">
                    <FacebookIcon  />
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <IconButton  classes={{root: classes.socialIcon}} aria-label="delete">
                    <TwitterIcon  />
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <IconButton  classes={{root: classes.socialIcon}} aria-label="delete">
                    <InstagramIcon  />
                </IconButton>
            </Grid>
            <Grid item xs={6}>
                <IconButton  classes={{root: classes.socialIcon}} aria-label="delete">
                    <RedditIcon  />
                </IconButton>
            </Grid>
        </Grid>

    )

}

export default SocialLinks;
