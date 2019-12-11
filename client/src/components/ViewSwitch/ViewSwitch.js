import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography'
import { mergeClasses } from '@material-ui/styles';

const SimpleButton = (props) => {
    const useStyles = makeStyles({
        text: {
            color: '#f1f7f3'
        }
    });

    const classes = useStyles();
    return (
        <Fab onClick={()=>props.clickHandler()}style={{background: 'linear-gradient(45deg, #AE6bf2 30%, #CFB4C8 90%', width: '100%'}}>
            {props.viewState === 'Upcoming' 
            ? <Typography className={classes.text}color="inherit" variant='button'>Who's Here?</Typography>
            : <Typography className={classes.text}color="inherit" variant='button'>Event Chat</Typography>}
        </Fab>
    )
}


//e => view === 'Upcoming' ? setView('Guests') : setView('Upcoming')

export default SimpleButton;