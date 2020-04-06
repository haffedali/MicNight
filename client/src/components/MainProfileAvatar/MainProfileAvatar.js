import React, { useContext } from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import ButtonBase from '@material-ui/core/ButtonBase'

import AuthenticationContext from '../AuthenticationContext';



const ProfileAvatar = ({ photoUrl }) => {
    const useStyles = makeStyles({
        avatar: {
            width: '35vw',
            height: '35vw',
        },
        avatarBacker: {

        },
        container: {
            height: '35vw',
            maxWidth: '50%'
        }
    })

    const classes = useStyles();

    const auth = useContext(AuthenticationContext);

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
                        !auth.userInfo.photoURL
                            ? `https://avatars.dicebear.com/v2/bottts/bot.svg`
                            : auth.userInfo.photoURL
                    }
                />
            </Box>
        </ButtonBase>


    )
}

export default ProfileAvatar;