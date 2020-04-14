
import React, { useState } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import MainProfileAvatar from '../../components/MainProfileAvatar';
import Button from '@material-ui/core/Button';
import MuiAvatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';

// API UTILS
import events from '../../utils/events';



const AddEventModal = ({ userInfo }) => {

    const [eventInfo, setEventInfo] = useState({
        name: '',
        tagLine: 'rope em in!',
        photoURL: 'https://image.shutterstock.com/image-vector/vector-illustration-storefront-steps-entrance-260nw-1193933005.jpg',
        date: new Date('2020-02-18T21:11:54'),
        organizer: userInfo.uid,
        location: ''
    })

    const handleDateChange = date => {
        setEventInfo({ ...eventInfo, date: date });
    };

    const handleTextFieldChanges = (e) => {

        const { name, value } = e.target;
        console.log(name, value)
        setEventInfo({ ...eventInfo, [name]: value })
    }
    const handleSubmitChanges = () => {
        console.log(eventInfo)
        events.create(eventInfo)
    }

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
        avatarContainer: {
            display: 'flex',
            justifyContent: 'center',
            top: '1rem',
        },
        avatar: {
            height: '25vw',
            width: '25vw'
        },
        formGroup: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width:"100%"
        },
        buttonGroup: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center'
        },
        formEntry: {
            padding: '2vw',
            width: "100%"
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
            <div className={classes.avatarContainer}>
                <MuiAvatar className={classes.avatar}src={eventInfo.photoURL} />
            </div>
            <div className={classes.formGroup}>
                <div className={classes.formEntry}>
                    <TextField
                        className={classes.formEntry}
                        id="standard-helperText"
                        name="photoURL"
                        defaultValue={eventInfo.photoURL}
                        onChange={(e) => handleTextFieldChanges(e)}
                        helperText="What your attendees will see first!"
                    />
                </div>
                <div className={classes.formEntry}>
                    <TextField
                        className={classes.formEntry}
                        id="standard-helperText"
                        name="name"
                        defaultValue={eventInfo.displayName}
                        onChange={(e) => handleTextFieldChanges(e)}
                        helperText="Change up the name on em"
                    />
                </div>
                <div className={classes.formEntry}>
                    <TextField
                        className={classes.formEntry}
                        id="standard-helperText"
                        name="tagLine"
                        defaultValue={eventInfo.tagLine}
                        onChange={(e) => handleTextFieldChanges(e)}
                        helperText="What are ya all about?"
                    />
                </div>
                <div className={classes.formEntry}>
                    <TextField
                        className={classes.formEntry}
                        id="standard-helperText"
                        name="location"
                        defaultValue={eventInfo.tagLine}
                        onChange={(e) => handleTextFieldChanges(e)}
                        helperText="What city is your event in?"
                    />
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={eventInfo.date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={eventInfo.date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>

                <div className={classes.submitButton}>
                    <Button onClick={() => handleSubmitChanges()} variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </div>
            <div className={classes.buttonGroup}>


            </div>
        </form>
    )
}

export default AddEventModal;