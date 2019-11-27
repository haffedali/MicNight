import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// Child components
import ProfileAvatar from '../../components/ProfileAvatar';
// import SocialLinks from '../../components/SocialLinks';

const ProfileCard = ({ user }) => {

    const useStyles = makeStyles({
        paper: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'space-between'
        },
        avatar: {
            maxHeight: '20vh',

        },
        userInfoContainer: {

        }
    });

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <ProfileAvatar className={classes.avatar} photoUrl={user.photoUrl} height={'15vh'} width={'15vh'} />
            <Container className={classes.userInfoContainer}>
                <Typography variant='subtitle1'>
                    {user.name}
                </Typography>
                <Typography variant='subtitle2'>
                    {user.tagLine}
                </Typography>
            </Container>


        </Paper>
    )
}

export default ProfileCard;