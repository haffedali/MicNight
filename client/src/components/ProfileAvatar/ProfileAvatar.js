import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase'

const ProfileAvatar = ({ photoUrl }) => {
    const useStyles = makeStyles({
        avatar: {
            width: '6vw',
            height: '6vw'
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




