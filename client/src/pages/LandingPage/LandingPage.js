import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import './landing-page.scss';
import FirebaseAuthUI from '../../components/LogInUI/';
import LogoAvatar from '../../components/LogoAvatar';
import Typography from '@material-ui/core/Typography';


const LandingPage = (props) => {
  const useStyles = makeStyles({
    logoBox: {
      width: '100%',
      flexGrow: 2

    },
    avatar: {
      display: 'flex',
      justifyContent: 'center'
    },
    container: {
      width: '100vw',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#f1f7f3'
    },
    logoText: {
      fontFamily: 'Pacifico',
      fontSize: '5rem',
      textAlign: 'center',
      flexGrow: 2
    },
    logoTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
  })

  const classes = useStyles()

  return (

    <Paper className={classes.container}>
      <Grid container>
        <Typography className={classes.logoText}>Mic Night</Typography>
        <Box flexGrow={2} display={'flex'} justifyContent={'center'} flexWrap={'wrap'} flexDirection={'column'}>
          <Box display={'flex'} justifyContent={'center'} className={classes.logoBox}>
            <LogoAvatar mx={'auto'} />
          </Box>
          <FirebaseAuthUI firebase={props.firebase} />
        </Box>
      </Grid>
    </Paper>
  )
};

export default LandingPage;