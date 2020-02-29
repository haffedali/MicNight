import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import { makeStyles } from '@material-ui/styles'



const SocialLinkIcon = ({ linkName, link }) => {
    const useStyles = makeStyles({
        socialIcon: {
            padding:'1vw',
        }
    })

    const classes = useStyles();


    const returnSocialIcon = (linkName) => {

        switch(linkName){
            case "facebook":
                return <FacebookIcon />
                break;
            case "instagram":
                return <InstagramIcon />
                break;
            case "twitter":
                return <TwitterIcon />
                break;
            case "soundcloud":
                return <RedditIcon />
                break;
            default:
                break;
        }
    }

    const redirect = ()=> {
        window.open(link)
    }


    return (
        <IconButton type={"button"} onClick={redirect} classes={{root: classes.socialIcon}} aria-label="delete">
            {returnSocialIcon(linkName)}
        </IconButton>
    )
}

export default SocialLinkIcon;