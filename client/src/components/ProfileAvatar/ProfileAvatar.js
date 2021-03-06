import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase'

const ProfileAvatar = ({ photoUrl, height, width }) => {
    
    
    if (!height && !width){
        const height = '10vw';
        const width = '10vw';
    }
    
    const useStyles = makeStyles({
        avatar: {
            width: width,
            height: height,
        }
    })

    const classes = useStyles()

    return (
        <ButtonBase>
            <MuiAvatar
                className={classes.avatar}
                src={
                    !photoUrl
                        ? `https://avatars.dicebear.com/v2/bottts/bot.svg`
                        : photoUrl
                }
            />
        </ButtonBase>

    )
}

export default ProfileAvatar;




