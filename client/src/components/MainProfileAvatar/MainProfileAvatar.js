import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import ButtonBase from '@material-ui/core/ButtonBase'

const ProfileAvatar = ({ photoUrl }) => {
    const useStyles = makeStyles({
        avatar: {
            width: '35vw',
            height: '35vw',
        },
        avatarBacker: {
            margin: ''
        },
        container: {
            height: '35vw',
            maxWidth: '50%'
        }
    })

    const classes = useStyles()

    return (
        <ButtonBase className={classes.container}>
            <Box
                border={3}
                bgcolor="secondary.main"
                borderColor="#90a4ae"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                className={classes.avatarBacker}
            >
                <MuiAvatar
                    className={classes.avatar}
                    src={
                        !photoUrl
                            ? `https://avatars.dicebear.com/v2/bottts/bot.svg`
                            : photoUrl
                    }
                />
            </Box>
        </ButtonBase>


    )
}

export default ProfileAvatar;