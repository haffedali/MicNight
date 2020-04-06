import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';


import { makeStyles } from '@material-ui/styles';


import ProfileAvatar from '../ProfileAvatar';


const DiscoverDataTableItem = ({ entry }) => {
    const useStyles = makeStyles({
        root: {
            paddingLeft: '3vw',
            margin: '.5vw',
        },
        buttonBox: {
            height: '12%',
            width: '15vw',
        },
        socialLink: {
            padding: '.1vw',
            margin: '.1vw',
        },
        listItem: {
            height: '40vw',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justify: 'space-between'
        },
        avatar: {
            margin: '2%',
            minWidth: '1vw',
        },
        listSecondaryAction: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        collapsePortion: {
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'flex-end',
            height: "100%"
        }
    });

    const classes = useStyles();

    const setPhotoURL = () => {
        entry.photoURL = `https://image.shutterstock.com/image-vector/vector-illustration-storefront-steps-entrance-260nw-1193933005.jpg`
    }

    if (!entry.photoURL) {
        setPhotoURL();
    }

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(prev => !prev);
    };

    return (
        <Collapse in={checked} collapsedHeight={'15vw'}>
            <Paper className={classes.root}>
                <ListItem classes={{ root: classes.listItem }} mb={1} disableGutters divider className={classes.listItem} key={`ListItem: ${entry.uid}`}>
                    <Grid container direction="row" direction="flex-start" justify="space-between">
                        <Grid item xs={3}>
                            <ListItemAvatar className={classes.avatar}>
                                <ProfileAvatar photoUrl={entry.photoURL} />
                            </ListItemAvatar>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className={classes.detailBox}>
                                <ListItemText
                                    primary={entry.displayName}
                                    secondary={entry.tagLine}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={3}>
                            <ListItemSecondaryAction className={classes.listSecondaryAction} style={{ height: '100%', width: '20%' }}>
                                {/* collaps goes here */}
                                <FormControlLabel
                                    control={<Switch checked={checked} onChange={handleChange} />}
                                />
                            </ListItemSecondaryAction>
                        </Grid>
                    </Grid>
                    {/* beneath collapse */}
                    <Grid item>
                        <Button variant="contained">Add to my events</Button>
                    </Grid>
                    <Grid item className={classes.collapsePortion} container direction='row' alignItems="flex-end" justify="space-between">
                        <Grid item>
                            <div>3405 Salvatore Lane</div>
                        </Grid>
                        <Grid item>
                            <div>Monday 8:00pm</div>
                        </Grid>
                    </Grid>
                </ListItem>
            </Paper>
        </Collapse>

    );
};

export default DiscoverDataTableItem;