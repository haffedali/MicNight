import React, { useState } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MainProfileAvatar from '../../components/MainProfileAvatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const EditProfileModal = ({ userInfo }) => {

    const useStyles = makeStyles({
        container: {
            width: '75vw',
            height: '75vh',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: '1rem',
            backgroundColor: '#f1f7f3'
        },
        avatar: {
            display: 'flex',
            justifyContent: 'center',
            top: '1rem'
        },
        formGroup: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        buttonGroup: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center'
        },
        formEntry: {
            padding: '2vw'
        },
        button: {
            padding: '2vw'
        },
        submitButton: {
            textAlign: 'center',
            padding: '3vw'
        }
    });

    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div className={classes.avatar}>
                <MainProfileAvatar photoUrl={userInfo.photoUrl} />
            </div>
            <div className={classes.formGroup}>
                <div className={classes.formEntry}>
                    <TextField
                        id="standard-helperText"
                        defaultValue={userInfo.name}
                        helperText="Change up the name on em"
                    />
                </div>
                <div className={classes.formEntry}>
                    <TextField
                        id="standard-helperText"
                        defaultValue={userInfo.name}
                        helperText="Change up the name on em"
                    />
                </div>
                <div className={classes.submitButton}>
                    <Button variant="contained" color="primary">
                        Submit Changes
                    </Button>
                </div>
            </div>
            <div className={classes.buttonGroup}>
                <div className={classes.button}>
                    <Button variant="contained" disabled>
                        Go Anonymous
                    </Button>
                </div>

                <div className={classes.button}>
                    <Button variant="contained" color="secondary">
                        Logout
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default EditProfileModal;