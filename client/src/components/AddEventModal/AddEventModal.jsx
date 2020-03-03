// import 'date-fns'
import React, { useState } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
// import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import MainProfileAvatar from '../../components/MainProfileAvatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// API UTILS
import events from '../../utils/events';

const AddEventModal = ({ }) => {

    const [eventInfo, setEventInfo] = useState({
        name: '',
        tagLine: 'rope em in!',
        photoURL: '',

    })

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
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

    const handleTextFieldChanges = (e) => {
        // console.log(e.target)
        const { name, value } = e.target;
        console.log(name, value)
        setEventInfo({ ...eventInfo, [name]: value })
    }
    const handleSubmitChanges = () => {
    }

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div className={classes.avatar}>
                <MainProfileAvatar photoURL={eventInfo.photoURL} />
            </div>
            <div className={classes.formGroup}>
                <div className={classes.formEntry}>
                    <TextField
                        id="standard-helperText"
                        name="displayName"
                        defaultValue={eventInfo.displayName}
                        onChange={(e) => handleTextFieldChanges(e)}
                        helperText="Change up the name on em"
                    />
                </div>
                <div className={classes.formEntry}>
                    <TextField
                        id="standard-helperText"
                        name="tagLine"
                        defaultValue={eventInfo.tagLine}
                        onChange={(e) => handleTextFieldChanges(e)}
                        helperText="What are ya all about?"
                    />
                </div>
                <div className={classes.formEntry}>
                    <TextField
                        id="standard-helperText"
                        name="adress"
                        defaultValue={eventInfo.tagLine}
                        onChange={(e) => handleTextFieldChanges(e)}
                        helperText="Where can we find you?"
                    />
                </div>
                <MuiPickersUtilsProvider>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={selectedDate}
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