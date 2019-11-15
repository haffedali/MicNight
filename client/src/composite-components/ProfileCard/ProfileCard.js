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

const ProfileCard = ({user}) => {

    const useStyles = makeStyles({
        paper:{
            width: '30%',
            height: '20%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center'
        },
        avatar:{},
    });

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <ProfileAvatar photoUrl={user.photoUrl} height={'40%'} width={'40%'}/>
            <Typography variant='subtitle1'>
                {user.name}
            </Typography>
            <Typography variant='subtitle2'>
                {user.tagLine}
            </Typography>
        </Paper>
    )
}

export default ProfileCard;