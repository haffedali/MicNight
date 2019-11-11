import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ProfileAvatar = ({ photoUrl }) => {
    const useStyles = makeStyles({
        avatar: {
            width: '4vw',
            height: '4vw'
        }
    })
    
    const classes = useStyles()

    return(
        <MuiAvatar 
        className={classes.avatar}
        src={
            !photoUrl
            ? `https://avatars.dicebear.com/v2/bottts/bot.svg`
            : photoUrl
        }
    />
    )
}

export default ProfileAvatar;




