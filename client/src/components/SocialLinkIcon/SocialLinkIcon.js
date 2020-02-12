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
        console.log(`${linkName} what the fuck`)
        console.log(`${link} this should just say test`)
        switch(linkName){
            case "facebook":
                console.log('returning icon')
                return <FacebookIcon />
                break;
            case "instagram":
                console.log('returning icon')
                return <InstagramIcon />
                break;
            case "twitter":
                console.log('returning icon')
                return <TwitterIcon />
                break;
            case "soundcloud":
                console.log('returning icon')
                return <RedditIcon />
                break;
        }
    }

    const redirect = ()=> {
        console.log(link)
    }


    return (
        <IconButton type={"button"} onClick={redirect} classes={{root: classes.socialIcon}} aria-label="delete">
            {returnSocialIcon(linkName)}
        </IconButton>
    )
}

export default SocialLinkIcon;